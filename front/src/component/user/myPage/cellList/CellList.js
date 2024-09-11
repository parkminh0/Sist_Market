import axios from "axios";
import Link from "next/link";
import React from "react";
import "/public/css/celllist.css";
import ImageNotSupportedRoundedIcon from "@mui/icons-material/ImageNotSupportedRounded";

export default function CellList(props) {
  // const param = useSearchParams();
  // alert(param.get("edit"));
  const celllist = props.celllist;
  const whatNow = props.whatNow;
  const getCellList = props.getCellList;
  const cPage = props.cPage;

  function getLatestRemind(clvo) {
    var remindDate = clvo.remind_dtm ? clvo.remind_dtm : clvo.create_dtm;
    return remindDate;
  }
  function getRemainRemind(clvo) {
    var latestRemind = clvo.remind_dtm ? clvo.remind_dtm : clvo.create_dtm;
    var timeDiff = new Date() - new Date(latestRemind);
    const target_time = 24 * 60 * 60 * 1000;

    var flownHours = Math.floor(timeDiff / (1000 * 60 * 60));
    timeDiff = timeDiff - flownHours * 1000 * 60 * 60;

    var flownMinutes = Math.floor(timeDiff / (1000 * 60));
    timeDiff = timeDiff - flownMinutes * 1000 * 60;

    var flownSeconds = Math.floor(timeDiff / 1000);

    var remainTimes =
      target_time -
      flownSeconds * 1000 -
      flownMinutes * 1000 * 60 -
      flownHours * 1000 * 60 * 60;

    const remainHours = Math.floor(remainTimes / (1000 * 60 * 60));
    remainTimes = remainTimes - remainHours * 1000 * 60 * 60;
    const remainMinutes = Math.floor(remainTimes / (1000 * 60));
    remainTimes = remainTimes - remainMinutes * 1000 * 60;
    const remainSeconds = Math.floor(remainTimes / 1000);

    var remindDate = `${remainHours}시간 ${remainMinutes}분 ${remainSeconds}초`;
    return remindDate;
  }

  function canRemindFunc(latestRemind) {
    var canRemind = true;
    const timeDiff = new Date() - new Date(latestRemind);
    const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
    canRemind = daysDiff > 1.0;
    return canRemind;
  }

  function remindPost(postkey) {
    const API_URL = "/adpost/remind";
    axios({
      url: API_URL,
      method: "get",
      params: {
        postkey: postkey,
      },
    }).then((res) => {
      console.log(res);
      getCellList(cPage);
    });
  }

  function unhidPost(postkey) {
    const API_URL = "/adpost/unhid";
    axios({
      url: API_URL,
      method: "get",
      params: {
        postkey: postkey,
      },
    }).then((res) => {
      console.log(res.data);
      getCellList(cPage);
    });
  }

  return celllist ? (
    celllist.map((clvo, index) => {
      var price =
        clvo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
      var latestRemind = getLatestRemind(clvo);
      var remainRemind = getRemainRemind(clvo);
      var canRemind = canRemindFunc(latestRemind);
      const detailLink = `/myPage/celllist/detail/${clvo.postkey}`;
      return (
        <div key={index} data-v-eff62a72="">
          {/* <!-- 여기서 FOREACH로 구매내역 뿌리기 --> */}
          <Link
            href={`/post/detail?postkey=${clvo.postkey}`}
            data-v-53e92c51=""
            data-v-eff62a72=""
          >
            <div
              className="purchase_list_display_item"
              style={{ backgroundColor: "#FFFFFF" }}
              data-v-53e92c51=""
            >
              <div className="purchase_list_product" data-v-53e92c51="">
                <div className="list_item_img_wrap" data-v-53e92c51="">
                  {clvo.pimg_list &&
                  clvo.pimg_list.length > 0 &&
                  clvo.pimg_list[0].imgurl != undefined ? (
                    <img
                      alt="product_image"
                      src={clvo.pimg_list[0].imgurl}
                      className="list_item_img"
                      style={{ backgroundColor: "#ebf0f5" }}
                      data-v-53e92c51=""
                    />
                  ) : (
                    <ImageNotSupportedRoundedIcon
                      style={{
                        width: "80px", // 아이콘의 너비를 100%로 설정
                        height: "80px", // 아이콘의 높이를 100%로 설정
                      }}
                    />
                  )}
                </div>
                <div className="list_item_title_wrap" data-v-53e92c51="">
                  <p className="list_item_title" data-v-53e92c51="">
                    {clvo.title}
                  </p>
                  <p className="list_item_description" data-v-53e92c51="">
                    <span data-v-53e92c51="">{clvo.cvo.categoryname}</span>
                  </p>
                </div>
              </div>
              <div className="list_item_status_CL" data-v-53e92c51="">
                <div
                  className="list_item_column_CL column_secondary"
                  data-v-53e92c51=""
                >
                  <p
                    className="text-lookup secondary_title display_paragraph"
                    style={{ color: "#22222280" }}
                    data-v-09bea70c=""
                    data-v-7d3b6402=""
                    data-v-53e92c51=""
                  >
                    {price}
                  </p>
                </div>
                <div
                  className="list_item_column_CL column_secondary"
                  data-v-53e92c51=""
                >
                  <p
                    className="text-lookup secondary_title display_paragraph"
                    style={{ color: "#22222280" }}
                    data-v-09bea70c=""
                    data-v-7d3b6402=""
                    data-v-53e92c51=""
                  >
                    {whatNow == "Hidden"
                      ? clvo.update_dtm.split(" ")[0]
                      : whatNow == "Sold"
                        ? clvo.create_dtm.split(" ")[0]
                        : clvo.create_dtm.split(" ")[0]}
                  </p>
                </div>
                <div
                  className="list_item_column_CL column_secondary"
                  data-v-53e92c51=""
                  style={{ textAlign: "right" }}
                >
                  <div
                    data-v-0b6ddb6a=""
                    data-v-9ff60cb2=""
                    className="division_btn_box"
                  >
                    <button
                      data-v-0b6ddb6a=""
                      className="btn_action"
                      style={
                        canRemind
                          ? {
                              backgroundColor: "rgb(239, 98, 83)",
                            }
                          : {
                              backgroundColor: "rgb(100, 100, 100)",
                              cursor: "default",
                            }
                      }
                      onClick={
                        canRemind
                          ? (e) => {
                              remindPost(clvo.postkey);
                              e.preventDefault();
                            }
                          : (e) => {
                              remainRemind = getRemainRemind(clvo);
                              alert(
                                `가장 최근 끌어올리기로부터 1일(24시간)이 지나야 다시 끌어올리기를 하실 수 있습니다.\n남은 시간: [${remainRemind}]`
                              );
                              e.preventDefault();
                            }
                      }
                    >
                      <strong data-v-0b6ddb6a="" className="button_name">
                        끌어올리기
                      </strong>
                    </button>
                  </div>
                  <div style={{ fontSize: 10, textAlign: "right" }}>
                    최근일자: <br />
                    {latestRemind}
                  </div>
                </div>
                <div
                  className="list_item_column_CL column_last"
                  data-v-53e92c51=""
                >
                  {whatNow == "Hidden" ? (
                    <Link
                      href="#"
                      onClick={() => {
                        unhidPost(clvo.postkey);
                      }}
                      className="last_item_txt text-lookup last_description display_paragraph action_named_action"
                      style={{ color: "#222222CC" }}
                    >
                      해제
                    </Link>
                  ) : whatNow == "Sold" ? (
                    <Link
                      href={detailLink}
                      className="last_item_txt text-lookup last_description display_paragraph action_named_action"
                      style={{ color: "#222222CC" }}
                    >
                      확인
                    </Link>
                  ) : (
                    <Link
                      href={`/post/detail?postkey=${clvo.postkey}&edit`}
                      className="last_item_txt text-lookup last_description display_paragraph action_named_action"
                      style={{ color: "#222222CC" }}
                    >
                      수정
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Link>
          {/* <!-- 여기까지 FOREACH --> */}
        </div>
      );
    })
  ) : (
    <div data-v-24868902="" data-v-eff62a72="" className="empty_area">
      {/* <!-- 없을 경우 --> */}
      <p data-v-24868902="" className="desc">
        구매 내역이 없습니다.
      </p>
      <Link
        data-v-420a5cda=""
        data-v-24868902=""
        href="/post"
        className="btn outlinegrey small"
      >
        {" "}
        SHOP 바로가기{" "}
      </Link>
      {/* <!--  --> */}
    </div>
  );
}
