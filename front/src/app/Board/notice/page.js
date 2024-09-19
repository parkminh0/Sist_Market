'use client'

import Link from "next/link";
import "/public/css/myPage.css";
import BoardSide from "@/component/user/layout/BoardSide";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import axios from "axios";

export default function () {
    const [ar, setAr] = useState([]);
    const listUrl = "/admin/board/userBbsList";
    const [categorykey, setCategorykey] = useState(0);
    const [nowPage, setNowPage] = useState(1);
    const [page, setPage] = useState({});
    const [title, setTitle] = useState("");  // title을 searchNotice 함수에서 사용

    // 페이지 변경시 모든 공지사항 로드
    function getData(cPage) {  
      axios.get(listUrl, {
        params: {
          cPage: cPage,
          categorykey: 1
        }
      })
      .then((json) => {
          setAr(json.data.ar);
          setPage(json.data.page);
      })
      .catch((error) => {
          console.error("데이터 로딩 오류:", error);  // 에러 콘솔에 출력
      });
    }

    function changePage(cPage) { 
      setNowPage(cPage); 
      if (title) {
        searchNotice(cPage.toString());  // cPage를 문자열로 변환
      } else {
        getData(cPage.toString());  // cPage를 문자열로 변환
      }
    }
    
    

    useEffect(() => {
        getData(nowPage);
    }, [nowPage]);

    
    // 공지사항 검색
    const sUrl = "/admin/board/searchForNotice";
    function searchNotice(cPage = 1){  // cPage 인자 추가
      axios.get(sUrl, {
        params: {
          title: title,
          categorykey: 1,
          cPage: cPage,
        }
      })
      .then((json) => {
          setAr(json.data.ar);
          setPage(json.data.page);
      })
      .catch((error) => {
          console.error("검색 데이터 로딩 오류:", error);  // 에러 콘솔에 출력
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
                            <div
                                data-v-81750584=""
                                data-v-0adb81cc=""
                                className="content_area my-page-content"
                                style={{ display: 'flex', flexDirection: 'column' }} // flex 설정
                            >
                                <div
                                    data-v-6b53f901=""
                                    data-v-81750584=""
                                    className="content_title border"
                                >
                                    <div data-v-6b53f901="" className="title">
                                        <h3 data-v-6b53f901="">공지사항</h3>
                                    </div>
                                </div>
                                {/* 검색 */}
                                
                                    <Paper 
                                        component="form"
                                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '99%' ,margin: "5px" }}
                                    >
                                        <InputBase
                                          sx={{ ml: 1, flex: 1 }}
                                          placeholder="검색"
                                          inputProps={{ 'aria-label': 'search google maps' }}
                                          onChange={(e) => setTitle(e.target.value)}
                                          onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                              e.preventDefault();  // 기본 Enter 동작 방지
                                              searchNotice();  // 검색 함수 호출
                                            }
                                          }}
                                        />
                                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={searchNotice}>
                                            <SearchIcon />
                                        </IconButton>
                                    </Paper>
                                
                                {/* 테이블 */}
                                <div style={{ flex: '1' }} className="tableDiv">
                                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                  <TableBody>
                                      {/* 삼항 연산자를 사용하여 데이터가 없을 경우 메시지 표시 */}
                                      {ar && ar.length > 0 ? (
                                        ar.map((ar, i) => (
                                          <TableRow
                                            key={i}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                          >
                                            <TableCell align="left" sx={{ width: '20%', fontWeight: 'bold' }}>
                                              {ar.categorykey == 1 ? '공지사항' : '이벤트'}
                                            </TableCell>
                                            <TableCell align="left" sx={{ width: '80%' }}>
                                              <Link href={`/Board/view/${ar.boardkey}`}>
                                                {ar.title}
                                              </Link>
                                            </TableCell>
                                          </TableRow>
                                        ))
                                      ) : (
                                        <TableRow>
                                          <TableCell colSpan={2} align="center">
                                            검색된 게시글이 없습니다.
                                          </TableCell>
                                        </TableRow>
                                      )}
                                    </TableBody>
                                  </Table>
                                </div>

                                {/* 페이징 */}
                                <div className="mPaginate" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }} >
                                  {page && page.startPage > 1 && (
                                    <a href="#" onClick={() => changePage(page.startPage - page.pagePerBlock)} className="prev">
                                      이전 {page.pagePerBlock}페이지
                                    </a>
                                  )}
                                  <ol style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
                                    {page && Array.from({ length: page.endPage - page.startPage + 1 }, (_, i) => page.startPage + i).map((pNum) => (
                                      <li key={pNum} style={{ margin: '0 5px' }}>
                                        {page.nowPage === pNum ? (
                                          <strong title="현재페이지">{pNum}</strong>
                                        ) : (
                                          <a href="#" onClick={() => changePage(pNum)}>{pNum}</a>
                                        )}
                                      </li>
                                    ))}
                                  </ol>
                                  {page && page.endPage < page.totalPage && (
                                    <a href="#" onClick={() => changePage(page.endPage + 1)} className="next">
                                      다음 {page.pagePerBlock}페이지
                                    </a>
                                  )}
                                </div>
                            </div>
                        </section>
                    </article>
                </div>
            </article>
        </div>
    )
}
