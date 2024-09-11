import Link from 'next/link';
import React from 'react'
import ImageNotSupportedRoundedIcon from '@mui/icons-material/ImageNotSupportedRounded';

export default function BuyList(props) {
    const buylist = props.buylist;
    
    return (buylist.map((blvo,index)=>{
        const detailLink = `/myPage/buylist/detail/${blvo.postkey}`;
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
                {(blvo.pimg_list[0].imgurl!=undefined) ? (
                    <img
                    alt="product_image"
                    src={blvo.pimg_list[0].imgurl}
                    className="list_item_img"
                    style={{ backgroundColor: "#ebf0f5" }}
                    data-v-53e92c51=""
                    />
                  ) : <ImageNotSupportedRoundedIcon style={{
                    width: '80px',  // 아이콘의 너비를 100%로 설정
                    height: '80px', // 아이콘의 높이를 100%로 설정
                  }}/>}
                </div>
                <div
                    className="list_item_title_wrap"
                    data-v-53e92c51=""
                >
                    <p className="list_item_title" data-v-53e92c51="">
                    {blvo.title}
                    </p>
                    <p
                    className="list_item_description"
                    data-v-53e92c51=""
                    >
                    <span data-v-53e92c51="">{blvo.cvo.categoryname}</span>
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
                    {blvo.deal_dtm.split(" ")[0]}
                    </p>
                </div>
                <div
                    className="list_item_column column_last"
                    data-v-53e92c51=""
                >
                    <Link
                    href={detailLink}
                    className="text-lookup last_description display_paragraph action_named_action"
                    style={{ color: "#222222CC" }}
                    data-v-09bea70c=""
                    data-v-7d3b6402=""
                    data-v-53e92c51=""
                    >
                    확인
                    </Link>
                </div>
                </div>
            </div>
            </div>
            {/* <!-- 여기까지 FOREACH --> */}
        </div>
    )})
    )
}
