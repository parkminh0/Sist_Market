import Link from 'next/link';
import React from 'react'

export default function LikePost(props) {
    const likelist = props.likelist;
    const getDelLike = props.getDelLike;
    return (
        likelist.map((lvo,index)=>{

        const price = lvo.pvo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원";
        return(
        <li key={index} data-v-6aa963fd="">
            <div data-v-6aa963fd="" className="wish_item">
            <div data-v-6aa963fd="" className="wish_product">
                <div data-v-6aa963fd="" className="product_box">
                <div
                    data-v-16369cf2=""
                    data-v-6aa963fd=""
                    className="product"
                    style={{
                    backgroundColor: "rgb(235, 240, 245)",
                    }}
                >
                    <div
                    data-v-17ca498c=""
                    data-v-16369cf2=""
                    className="display_tag_item product_inner_tag tag--default"
                    >
                    <span
                        data-v-17ca498c=""
                        className="tag_text"
                    ></span>
                    </div>
                    <picture
                    data-v-82b93d2c=""
                    data-v-16369cf2=""
                    className="picture product_img"
                    >
                    <img
                        data-v-82b93d2c=""
                        alt="게시글 이미지"
                        src={lvo.pvo.pimg_list[0].imgurl}
                        style={{height:80}}
                        loading="lazy"
                        className="image full_width"
                    />
                    </picture>
                </div>
                </div>
                <div data-v-6aa963fd="" className="product_detail">
                <div data-v-6aa963fd="" className="brand_link">
                    <a
                    data-v-6aa963fd=""
                    href="#"
                    className="brand-text"
                    >
                    {" "}
                    {lvo.pvo.title}
                    </a>
                </div>
                <p data-v-6aa963fd="" className="name">
                    {lvo.pvo.cvo.categoryname}
                </p>
                <p data-v-6aa963fd="" className="size">
                    <span data-v-6aa963fd="">{lvo.pvo.hope_place}</span>
                </p>
                </div>
                <div
                data-v-9ff60cb2=""
                data-v-6aa963fd=""
                className="wish_buy"
                >
                <div data-v-9ff60cb2="">
                    <div
                    data-v-0b6ddb6a=""
                    data-v-9ff60cb2=""
                    className="division_btn_box lg"
                    >
                    <button
                        data-v-0b6ddb6a=""
                        className="btn_action"
                        style={{
                        backgroundColor: "rgb(239, 98, 83)",
                        }}
                    >
                        <strong
                        data-v-0b6ddb6a=""
                        className="title"
                        >
                        {price}
                        </strong>
                    </button>
                    </div>
                    <Link
                    data-v-9ff60cb2=""
                    href="#"
                    className="status_link"
                    onClick={()=>{getDelLike('post',lvo.wishlistkey)}} 
                    >
                    {" "}
                    삭제{" "}
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </li>
        )})
    )
}
