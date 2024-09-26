'use client'
import Link from "next/link";
import React, { useState } from "react";
import ImageNotSupportedRoundedIcon from "@mui/icons-material/ImageNotSupportedRounded";
import BuyDetail from "./BuyDetail";
import { TableCell, TableRow } from "@mui/material";
import { useRouter } from "next/navigation";


export default function BuyList(props) {
  const buylist = props.buylist;

  const router = useRouter();

  const[open,setOpen] = useState(false);
  const[postkey,setPostkey] = useState(0);
  function openDetail(postkey){
    setPostkey(postkey);
    setOpen(true);
  }
  function closeDetail(){
    setOpen(false);
    setPostkey(0);
  }

  return (
    <>
      {
      buylist.map((blvo, index) => {
        const lastprice =
        blvo.lastprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
        return (
          <TableRow
            key={index}
            onDoubleClick={()=>{router.push(`/post/detail?postkey=${blvo.postkey}`);}}>
            
            <TableCell colSpan={3}>
                <div style={{
                    display:'flex',
                    alignItems: 'center',
                  }}>
                  {blvo.pimg_list &&
                    blvo.pimg_list.length > 0 &&
                    blvo.pimg_list[0].imgurl != undefined ? (
                      <img
                        alt="product_image"
                        src={blvo.pimg_list[0].imgurl}
                        style={{
                          backgroundColor: "#ebf0f5",
                          width: "80px",
                          minWidth: "80px",
                          height: "80px",
                          borderRadius: 23,
                          overflow: 'hidden',
                          }}
                      />
                    ) : (
                      <ImageNotSupportedRoundedIcon
                        style={{
                          width: "80px", // 아이콘의 너비를 100%로 설정
                          height: "80px", // 아이콘의 높이를 100%로 설정
                          borderRadius: 23,
                          overflow: 'hidden',
                        }}
                      />
                    )}
                  <div style={{
                    display:'flex',
                    flexDirection: 'column',
                    marginLeft: '10px',
                    width:'60%'
                  }}>
                    <div style={{
                      marginBottom: '5px',
                      fontSize:'16px',
                      fontWeight: 'bold',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      }}>{blvo.title}</div>
                    <div style={{
                      marginTop: '5px',
                      fontSize:'10px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      }}>{blvo.cvo.categoryname}</div>
                  </div>
                  </div>
              </TableCell>
              <TableCell
                style={{color: "#22222280",
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                      }}
                >
                  {lastprice}
              </TableCell>
              <TableCell style={{color: "#22222280"}}>
                  {blvo.deal_dtm.split(" ")[0]}
              </TableCell>
              <TableCell style={{textAlign:'right'}}>
                <Link
                  href="#"
                  onClick={()=>{
                    openDetail(blvo.postkey);
                  }}
                  className="last_item_txt text-lookup last_description display_paragraph action_named_action"
                  style={{ color: "#222222CC" }}
                >
                  확인
                </Link>
              </TableCell>
            {/* <!-- 여기까지 FOREACH --> */}
          </TableRow>
    );
  })
  }
      <BuyDetail open={open} closeDetail={closeDetail} postkey={postkey} />
    </>
  )
}
