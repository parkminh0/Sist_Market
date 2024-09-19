'use client'
import { Button, Pagination, Paper, Table, TableBody, TableRow } from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import "/public/css/myPage.css";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from "next/link";
import BoardSide from "@/component/user/layout/BoardSide";

export default function page( props ) {

  // 서버로부터 받을 vo 정보를 저장할 곳 (객체로 초기화)
  const [ar, setAr] = useState({});
  //const [categorykey, setCategorykey] = useState(0);
  
  const router = useRouter();

  const API_URL = `/admin/board/getBbs?boardkey=${props.params.boardkey}`;
  
  function getData() {
    axios.get(API_URL).then((res) => {
        console.log(res.data.bvo);  // 데이터 구조 확인
        setAr(res.data.bvo);        // 객체로 설정
        //setCategorykey(res.data.bvo.categorykey);
    }).catch((error) => {
        console.error("Error fetching data: ", error);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
        <article className="_1h4pbgy7wg _1h4pbgy7wz">
            <div className="_6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
                <section style={{ borderBottom: "1px solid #ebebeb" }}>
                    <div className="_588sy41z _588sy421 _588sy42q _588sy415q _588sy417e">
                        <nav className="iq86zf0">
                            <ol className="iq86zf1 _588sy42q _588sy415q">
                                <li>
                                    <Link href="#">
                                        <span className="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf3 iq86zf2 _588sy41n">
                                            홈
                                        </span>
                                    </Link>
                                    <span className="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf4 _588sy4ze _588sy4w8">
                                        &gt;
                                    </span>
                                </li>
                            </ol>
                        </nav>
                        <Link href="/Board/notice">
                            <span className="_588sy4192 _588sy41x _588sy41b2 _588sy43">
                                쌍용소식
                            </span>
                        </Link>
                    </div>
                    <Link href="/Board/notice">
                        <div className="_1h4pbgy7dk _1h4pbgy7j7 _1h4pbgy7j0 _1h4pbgy7il _1h4pbgy7w0">
                            <h1 className="_1h4pbgy78o _1h4pbgy796 _1h4pbgy79g _1h4pbgy7ag _1h4pbgy7c8">
                                쌍용소식
                            </h1>
                        </div>
                    </Link>
                </section>
            </div>
            <div className="my_home container my md _6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
                <article className="_1h4pbgy7wg _1h4pbgy7wz">
                    <section className="_1h4pbgy9ug _1h4pbgy8zc _1h4pbgy92j _1h4pbgy7y8 _1h4pbgy83s _1h4pbgy843 _1h4pbgy84k">
                        {/* 마이페이지 서브 */}
                        <BoardSide />
                        {/* 여기서부터 콘텐츠 */}
                        <div className="content_area my-page-content" style={{ display: 'flex', flexDirection: 'column' }}>
                        
                            {/* 테이블 */}
                            <div style={{ flex: '1' }} className="tableDiv">
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableBody>
                                        <TableRow
                                        key={ar.boardkey}  
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="left" sx={{ 
                                                    width: '15%', 
                                                    fontWeight: 'bold',  // 글씨 굵게 설정
                                                    fontSize: '1.2rem'   // 글씨 크기 키움
                                                }}>
                                                {ar.categorykey == 1 ? '공지사항' : '이벤트'}
                                            </TableCell>
                                            <TableCell align="left" sx={{ width: '85%' }}>
                                                <div>{ar.create_dtm} </div>
                                                <div style={{ fontSize: '1.2rem' }}>{ar.title}   </div>                                
                                            </TableCell>
                                        </TableRow>

                                        <Table Rowkey={ar.boardkey + "_content"}  
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="left" sx={{ width: '100%', font: 'bold' }}>
                                                ㅣ<div dangerouslySetInnerHTML={{ __html: ar.content }} />
                                            </TableCell>
                                        </Table>
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </section>
                </article>
            </div>
        </article>
    </div>
  )
}
