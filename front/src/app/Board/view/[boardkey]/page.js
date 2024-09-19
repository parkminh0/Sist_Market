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
  
  // props에서 boardkey를 받아옴
  const boardkey = props?.params?.boardkey;

  const router = useRouter();
  const [bclist, setBclist] = useState([]); // bclist 상태 추가
  const [categorykey, setCategorykey] = useState(`${props.params.categorykey}`);
  const API_URL = `/admin/board/getBbs?boardkey=${boardkey}`;
  
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
    getBcList();
  }, []);
  
   //bclist 가져와서 =boardside로 넘겨줄거임
   const bcUrl = "/admin/board/getAllBc";

   function getBcList() {  
     axios.get(bcUrl)
     .then((json) => { 
         setBclist(json.data.bc_list);
         const category = json.data.bc_list.find(bc => bc.key === categorykey);
         if (category) {
           setCategoryName(category.value);  // 선택한 카테고리 이름 저장
         }
     })
     .catch((error) => {
         console.error("데이터 로딩 오류:", error);  
     });
   }


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
                        <Link href="/Board/list/1">
                            <span className="_588sy4192 _588sy41x _588sy41b2 _588sy43">
                                쌍용소식
                            </span>
                        </Link>
                    </div>
                    <Link href="/Board/list/1">
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
                        {/* 마이페이지 서브와 콘텐츠를 한 줄에 배치 */}
                        <div style={{ display: 'flex', alignItems: 'stretch' }}>
                            {/* BoardSide는 2 비율 */}
                            <div style={{ flex: '1.5', marginRight: '20px',marginTop:'20px' }}>
                                <BoardSide  bclist={bclist} categorykey={categorykey}/>
                            </div>
                            {/* 콘텐츠는 8 비율 */}
                            <div style={{ flex: '8.5' }}>
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
                                                        fontSize: '1.3rem',   // 글씨 크기 키움
                                                        marginTop:'0px',
                                        
                                                    }}>
                                                    {ar.categorykey == 1 ? '공지사항' : '이벤트'}
                                                </TableCell>
                                                <TableCell align="left" sx={{ width: '85%' }}>
                                                    <div>{ar.create_dtm}</div>
                                                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{ar.title}</div>  {/* 제목 굵게 */}
                                                </TableCell>
                                            </TableRow>

                                            <TableRow
                                            key={ar.boardkey + "_content"}  
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="left" sx={{ width: '100%', fontWeight: 'bold' }}>
                                                    <div dangerouslySetInnerHTML={{ __html: ar.content }} />
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
            </div>
        </article>
    </div>
  )
}
