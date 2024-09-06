'use client'
import MyPageSide from '@/component/user/layout/MyPageSide';
import ImageModal from "@/component/admin/post/detail/ImageModal";
import axios from 'axios';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import "/public/css/myPage.css";
import "/public/css/buylistDetail.css";

export default function page() {
    const params = useParams();
    const [pvo, setPvo] = useState({});
    const [price, setPrice] = useState('0원');
    const [lastprice, setLastprice] = useState('0원');
    const [deal_dtm, setDeal_dtm] = useState('');
    const [dureview_dtm, setDureview_dtm] = useState('');
    const [method, setMethod] = useState('일반 판매');
  
    const API_URL = "/adpost/detail";

    
  const [open, setOpen] = useState(false);
  const [imgurl, setImgurl] = useState("");
  function handleOpen(imgurl) {
    setImgurl(imgurl);
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  
    function getDateFormat(dtm){
        var yyyymmdd = dtm.split(" ")[0];
        var hhmmss = dtm.split(" ")[1];
        var yyyy = yyyymmdd.split("-")[0];
        var mM = yyyymmdd.split("-")[1];
        var dd = yyyymmdd.split("-")[2];
        var hh = hhmmss.split(":")[0];
        var mm = hhmmss.split(":")[1];
        var formatted_dtm = yyyy+"년 "+mM+"월 "+dd+"일  "+hh+"시 "+mm+"분";
        return formatted_dtm;
    }

    function getPostDetail() {
      axios({
        url: API_URL,
        method: "post",
        params: { postkey: params.postkey },
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        console.log("pvo: ");
        console.log(response.data.pvo);
        setPvo(response.data.pvo);
        var price = response.data.pvo.price;
        var lastprice = response.data.pvo.lastprice;
        price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원";
        setPrice(price);
        lastprice = lastprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원";
        setLastprice(lastprice);
        if(response.data.pvo.method == 1){
          useState('나눔');
        }

        setDeal_dtm(getDateFormat(response.data.pvo.deal_dtm));
        setDureview_dtm(getDateFormat(response.data.pvo.dealuserreview_dtm));
      });
    }
  
    useEffect(() => {
      getPostDetail();
    }, []);

    return (
        <>
          <article className="_1h4pbgy7wg _1h4pbgy7wz">
            <div className="_6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
              <section style={{ borderBottom: "1px solid #ebebeb" }} className="">
                <div className="_588sy41z _588sy421 _588sy42q _588sy415q _588sy417e">
                  <nav className="iq86zf0">
                    <ol className="iq86zf1 _588sy42q _588sy415q">
                      <li>
                        <Link href="/">
                          <span className="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf3 iq86zf2 _588sy41n">
                            <font style={{ verticalAlign: "inherit" }}>홈</font>
                          </span>
                        </Link>
                        <span className="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf4 _588sy4ze _588sy4w8">
                          <font style={{ verticalAlign: "inherit" }}> &gt;</font>
                        </span>
                      </li>
                    </ol>
                  </nav>
                  <Link href="/myPage">
                    <div className="_588sy41z _588sy421 _588sy42q _588sy415q">
                      <span className="_588sy4192 _588sy41x _588sy41b2 _588sy43">
                        <font style={{ verticalAlign: "inherit" }}>
                          마이 페이지
                        </font>
                      </span>
                    </div>
                  </Link>
                </div>
              </section>
            </div>
            <div className="my_home container my md _6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
              <section className="_1h4pbgy9ug _1h4pbgy8zc _1h4pbgy92j _1h4pbgy7y8 _1h4pbgy83s _1h4pbgy843 _1h4pbgy84k">
                <MyPageSide />
                {/* <!-- 여기서부터 콘텐츠 --> */}
                <div className='detailInfoBody'>
                  <div className='detailInfoTitle'>
                    판매내역 상세
                  </div>
                  <div className='detailInfos'>
                      <div className='detailInfoItem'>
                          <div className='detailInfoPost'>
                            <div className='detailInfoPostDesc'>
                              <div className='detailInfoPostDescImg'>
                                <img src={pvo.pimg_list?pvo.pimg_list[0].imgurl:''}/>
                              </div>
                              <div className='detailInfoPostDescTxt'>
                                <p className='title'>{pvo.title}</p>
                                <p className='category'>{pvo.cvo ? pvo.cvo.categoryname : pvo.title}</p>
                                <p className='hope_place'>{pvo.hope_place}</p>
                              </div>
                            </div>
                            <div className='detailInfoPostEtc'>
                                <p className='method'>{method}</p>
                            </div>
                          </div>
                      </div>
                      <div className='detailInfoItem'>
                          <div className='detailInfoTransaction'>
                            <div className='transactionFinal'>
                              <div className='transactionDesc'>
                                <p>최초금액</p>
                              </div>
                              <div className='transactionPrice'>
                                  <p className='price'>{price}</p>
                              </div>
                              <div className='transactionDesc'>
                                <p>최종금액</p>
                              </div>
                              <div className='transactionPrice'>
                                  <p className='lastprice'>{lastprice}</p>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className='detailInfoItem'>
                          <div class="reviewTitle">
                            <div class="title">
                              구매자 후기
                            </div>
                            <div class="reviewDtm">
                                <p className='dtmDesc'>작성일자</p>
                                <p className='dtmVal'>{dureview_dtm}</p>
                            </div>
                          </div>
                          <div className='detailInfoSeller'>
                            <div className='SellerProfile'>
                              <div className='profiileImg'>
                                <img src={pvo.duvo ? pvo.duvo.imgurl : ''} style={{width: 50, marginTop: 10}}/>
                              </div>
                              <div className='profileDesc'>
                                  <p className='nickname'>{pvo.duvo ? pvo.duvo.nickname : ''}</p>
                                  <p className='userId'>@{pvo.duvo ? pvo.duvo.id : ''}</p>
                              </div>
                            </div>
                            <div className='SellerReview'>
                              <div class="reviewLeft">
                                <div className='userreviewtxt'>
                                    <p className='userreview'>{pvo.dealuserreview}</p>
                                </div>
                              </div>
                              <div class="reviewRight">
                                <div className='userreviewimg'>
                                  <img src={pvo.dealuserreviewimg} onClick={()=>handleOpen(pvo.dealuserreviewimg)} style={{width: 100, marginTop: 10, cursor:'pointer'}}/>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className='detailInfoItem'>
                          <div className='detailInfoTransaction'>
                            <div className='transactionFinal'>
                              <div className='transactionDesc'>
                                <p>거래일시</p>
                              </div>
                              <div className='transactionPrice'>
                                  <p className='price'>{deal_dtm}</p>
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>
                </div>
                <ImageModal open={open} handleClose={handleClose} imgurl={imgurl} />
                {/* <!-- 여기까지 컨텐츠 --> */}
              </section>
            </div>
          </article>
          {/* 아래 광고 이미지 */}
          <div className="_588sy4rk _588sy4rr _588sy4ry _588sy4s5">
            <div className="_1h4pbgy14w _1h4pbgy9ug _1h4pbgy9xc _1h4pbgya2w">
              <div className="a1nvr40 _1h4pbgy7nk _1h4pbgy7o1 _1h4pbgy7oy _1h4pbgy7pn _1h4pbgy7pw _1h4pbgy7qd _1h4pbgy7s8 _1h4pbgy7sp _1h4pbgy7tm _1h4pbgy7ub _1h4pbgy7uk _1h4pbgy7v1 _1h4pbgy14w _1h4pbgy8jc">
                <div className="a1nvr41">
                  <div className="a1nvr42 _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy9wi _1h4pbgy9vs _1h4pbgya0o">
                    <div
                      className="a1nvr43 _1h4pbgy78g _1h4pbgy78p _1h4pbgy796 _1h4pbgy79n _1h4pbgy7ag _1h4pbgy7c8 _1h4pbgy7bk _1h4pbgy7az _1h4pbgy7b8 _1h4pbgy48 _1h4pbgya54 _1h4pbgya4i _19xafot0 _19xafot4 _19xafot5"
                      style={{
                        _19xafot2: "0ms",
                        _19xafot1: "500ms",
                        _19xafot3: "translateY(1rem)",
                      }}
                    >
                      <font>
                        <font>오늘 대단한 발견을 해보세요!</font>
                      </font>
                    </div>
                    <div
                      className="a1nvr44 _1h4pbgy79c _1h4pbgy7a3 _1h4pbgy7ac _1h4pbgy7ag _1h4pbgy7c8 _1h4pbgy7bk _1h4pbgy7az _1h4pbgy7b8 _1h4pbgy8g _1h4pbgy81k _19xafot0 _19xafot4 _19xafot5"
                      style={{
                        _19xafot2: "0ms",
                        _19xafot1: "500ms",
                        _19xafot3: "translateY(1rem)",
                      }}
                    >
                      <font>
                        <font>앱을 받으세요</font>
                      </font>
                    </div>
                    <div className="a1nvr45 _1h4pbgy9vc _1h4pbgy90g _1h4pbgy90r">
                      <Link
                        href="#"
                        className="_19xafot0 _19xafot4 _19xafot5"
                        style={{
                          _19xafot2: "0ms",
                          _19xafot1: "500ms",
                          _19xafot3: "translateY(1rem)",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="_1h4pbgy8rk _1h4pbgy8rv _1h4pbgy8s4"
                          src="https://karrotmarket-com-sanity-cdn.krrt.io/production/49380c1c7e70e49f0f93baf0f790925eefc69082-120x40.svg"
                          alt="앱스토어에서 다운로드"
                        />
                      </Link>
                      <Link
                        href="#"
                        className="_19xafot0 _19xafot4 _19xafot5"
                        style={{
                          _19xafot2: "0ms",
                          _19xafot1: "500ms",
                          _19xafot3: "translateY(1rem)",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="_1h4pbgy8rk _1h4pbgy8rv _1h4pbgy8s4"
                          src="https://karrotmarket-com-sanity-cdn.krrt.io/production/0d8f72b8e4cdb98af115a7c1f04c4abf19f5c419-180x53.svg"
                          alt="Google Play에서 받으세요"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="a1nvr46">
                    <img
                      src="https://karrotmarket-com-sanity-cdn.krrt.io/production/bff14eb869318da13eeb329ac060450dfe1ecadf-750x1624.png"
                      className="a1nvr49 a1nvr48 _1h4pbgy95k _1h4pbgya0o _19xafot0 _19xafot4 _19xafot5"
                      alt="홈 피드 화면의 스크린샷"
                      style={{
                        _19xafot2: "0ms",
                        _19xafot1: "1000ms",
                        _19xafot3: "translateY(1rem)",
                      }}
                    />
                    <img
                      src="https://karrotmarket-com-sanity-cdn.krrt.io/production/5cfdb708e8491051b4765819e796ca373e58fc44-753x1637.png"
                      className="a1nvr4a a1nvr48 _1h4pbgy95k _1h4pbgya0o _19xafot0 _19xafot4 _19xafot5"
                      alt="상세 페이지의 스크린샷"
                      style={{
                        _19xafot2: "0ms",
                        _19xafot1: "1000ms",
                        _19xafot3: "translateY(-1rem)",
                      }}
                    />
                    <img
                      src="https://karrotmarket-com-sanity-cdn.krrt.io/production/1da74f52dfcb54be6b1ec40af8d8480ed6abc4c0-900x339.png"
                      className="a1nvr4b _19xafot0 _19xafot4 _19xafot5"
                      alt="홈 피드 항목의 스크린샷"
                      style={{
                        _19xafot2: "0ms",
                        _19xafot1: "1000ms",
                        _19xafot3: "translateY(1rem)",
                      }}
                    />
                    <div className="a1nvr47"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}
