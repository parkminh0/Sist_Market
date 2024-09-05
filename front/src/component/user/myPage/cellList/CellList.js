import axios from 'axios';
import Link from 'next/link';
import latestRemindsplitLink from 'next/link';
import React from 'react'

export default function CellList(props) {
    const celllist = props.celllist;
    const whatNow = props.whatNow;
    const getCellList = props.getCellList;
    const cPage = props.cPage;
        
    function getLatestRemind(clvo){
        var pi_list = clvo.pinfo_list;
        var pl_length = pi_list.length;
        if(pl_length > 0){
            for(var i=pl_length-1;i>=0;i--){
                if(pi_list[i].isupdate){
                    return pi_list[i].dtm.split(" ")[0];
                }
            }
        }
        return clvo.create_dtm.split(" ")[0];
    }

    function canRemindFunc(latestRemind){
        var canRemind = true;
        const timeDiff = new Date() - new Date(latestRemind);
        const daysDiff = timeDiff / (1000 * 60 * 60 * 24)
        canRemind = (daysDiff>1.0);
        return canRemind;
    }

    function remindPost(postkey){
        const API_URL = '/adpost/remind';
        axios({
          url: API_URL,
          method: 'get',
          params: {
            'postkey': postkey,
          }
        }).then((res) => {
            console.log(res.data);
            getCellList(cPage);
        });
    }

    return (
        celllist ? celllist.map((clvo,index)=>{
        var price = clvo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원";
        var latestRemind = getLatestRemind(clvo);
        var canRemind = canRemindFunc(latestRemind);
        return(
        <div key={index} data-v-eff62a72="">
            {/* <!-- 여기서 FOREACH로 구매내역 뿌리기 --> */}
            <div data-v-53e92c51="" data-v-eff62a72="">
            <div
                className="purchase_list_display_item"
                style={{ backgroundColor: "#FFFFFF" }}
                data-v-53e92c51=""
            >
                <div
                className="purchase_list_product"
                data-v-53e92c51=""
                >
                <div
                    className="list_item_img_wrap"
                    data-v-53e92c51=""
                >
                    <img
                    alt="product_image"
                    src={clvo.pimg_list[0].imgurl}
                    className="list_item_img"
                    style={{ backgroundColor: "#ebf0f5" }}
                    data-v-53e92c51=""
                    />
                </div>
                <div
                    className="list_item_title_wrap"
                    data-v-53e92c51=""
                >
                    <p className="list_item_title" data-v-53e92c51="">
                    {clvo.title}
                    </p>
                    <p
                    className="list_item_description"
                    data-v-53e92c51=""
                    >
                    <span data-v-53e92c51="">{clvo.cvo.categoryname}</span>
                    </p>
                </div>
                </div>
                <div className="list_item_status" data-v-53e92c51="">
                <div
                    className="list_item_column column_secondary"
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
                    className="list_item_column column_secondary"
                    data-v-53e92c51=""
                >
                    <p
                    className="text-lookup secondary_title display_paragraph"
                    style={{ color: "#22222280" }}
                    data-v-09bea70c=""
                    data-v-7d3b6402=""
                    data-v-53e92c51=""
                    >
                    {whatNow == "Hidden" ? clvo.update_dtm.split(" ")[0] : whatNow == "Sold" ?  clvo.deal_dtm.split(" ")[0] : clvo.create_dtm.split(" ")[0]}
                    </p>
                </div>
                <div
                    className="list_item_column column_secondary"
                    data-v-53e92c51=""
                    style={{textAlign:'right'}}
                >
                    <div
                    data-v-0b6ddb6a=""
                    data-v-9ff60cb2=""
                    className="division_btn_box"
                    >
                        <button
                            data-v-0b6ddb6a=""
                            className="btn_action"
                            style={canRemind ? {
                            backgroundColor:  "rgb(239, 98, 83)",
                            }:{
                                backgroundColor:  "rgb(100, 100, 100)",
                                cursor: 'default',
                            }}
                            onClick={canRemind ? ()=>{remindPost(clvo.postkey)} : ()=>{alert("가장 최근 끌어올리기로부터 2주(14일)이 지나야 다시 끌어올리기를 하실 수 있습니다. ")}} 
                        >
                            <strong
                            data-v-0b6ddb6a=""
                            className="title"
                            >
                            끌어올리기
                            </strong>
                        </button>
                    </div>
                        <div style={{fontSize:10}}>최근일자: {latestRemind}</div>
                </div>
                <div
                    className="list_item_column column_last"
                    data-v-53e92c51=""
                >
                    <Link
                    href="/"
                    className="text-lookup last_description display_paragraph action_named_action"
                    style={{ color: "#222222CC" }}
                    data-v-09bea70c=""
                    data-v-7d3b6402=""
                    data-v-53e92c51=""
                    >
                    설정
                    </Link>
                </div>
                </div>
            </div>
            </div>
            {/* <!-- 여기까지 FOREACH --> */}
        </div>
    )})
    :
        <div
            data-v-24868902=""
            data-v-eff62a72=""
            className="empty_area"
            >
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
    )
}
