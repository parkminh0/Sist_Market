import Link from 'next/link'
import React from 'react'
import '/public/css/popcatelist.css';
import ImageNotSupportedRoundedIcon from '@mui/icons-material/ImageNotSupportedRounded';


export default function PopCateList(props) {
    const pvo = props.pvo;
    const price = pvo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원"
    return (
    <Link
        href={`/post/detail?postkey=${pvo.postkey}`}
    >
        <article className='popCateArticle'>
            <div className='thumbnail'>
                {pvo.pimg_list.length>0 ? (
                pvo.pimg_list[0].imgurl!=undefined) ? (
                    <img
                    src={pvo.pimg_list[0].imgurl}
                    alt="thumbnail"
                    className='thumbnail'
                    />
                    ) : <ImageNotSupportedRoundedIcon style={{
                        width: '100%',  // 아이콘의 너비를 100%로 설정
                        height: '250px', // 아이콘의 높이를 100%로 설정
                }}/> : ''}
            </div>
            <div >
                <div className='firstRow'>
                    <div className='title'>
                        {pvo.title}
                    </div>
                </div>
                <div className='secondRow'>
                    <div className='price'>
                        {price}
                    </div>
                    <div className='place'>
                        {pvo.hope_place}
                    </div>
                </div>
            </div>
        </article>
    </Link>
    )
}
