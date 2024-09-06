import axios from 'axios';
import Link from 'next/link';
import latestRemindsplitLink from 'next/link';
import React from 'react'
import "/public/css/userlistcomponent.css";

export default function UserList(props) {
    const userlist = props.userlist;
    const whatNow = props.changeNow;
    const getUserList = props.getUserList;
    const cPage = props.cPage;

    function uncheckUser(userkey){
        const API_URL = '/user/api/uncheck';
        axios({
          url: API_URL,
          method: 'get',
          params: {
            'whatNow': whatNow,
            'userkey': userkey,
          }
        }).then((res) => {
            console.log(res.data);
            getUserList(cPage);
        });
    }

    return (
        userlist ? userlist.map((ulvo,index)=>{
        return(
        <div key={index}>
            {/* <!-- 여기서 FOREACH로 구매내역 뿌리기 --> */}
            <div className="userListComponents">
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
                    src={ulvo.uvo?ulvo.uvo.imgurl:''}
                    className="list_item_img"
                    style={{ width: 100}}
                    />
                </div>
                <div
                    className="list_item_title_wrap"
                    data-v-53e92c51=""
                >
                    <p
                    className="list_item_title"
                    data-v-53e92c51=""
                    style={{fontSize: 20}}
                    >
                    <span data-v-53e92c51="">{ulvo.uvo?ulvo.uvo.nickname:''}</span>
                    </p>
                    <p
                    className="list_item_description"
                    data-v-53e92c51=""
                    >
                        <span data-v-53e92c51="">@{ulvo.uvo?ulvo.uvo.id:''}</span>
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
                    {ulvo.create_dtm.split(" ")[0]}
                    </p>
                </div>
                <div
                    className="list_item_column column_last"
                    data-v-53e92c51=""
                >
                    <Link
                    href="#"
                    onClick={()=>{uncheckUser(ulvo.uvo.userkey)}}
                    className="text-lookup last_description display_paragraph action_named_action"
                    style={{ color: "#222222CC" }}
                    >
                    {whatNow=="likeUser" ? '취소' : '해제'}
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
