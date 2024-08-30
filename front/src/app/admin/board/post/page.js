'use client'

import "/public/css/admin/board.css";
import axios from 'axios';
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react'

export default function page() {

  const API_URL = '/api/admin/board/list';
  const DEL_URL = "/api/admin/board/chkDel";

  let cPage = 1;
  const router = useRouter();

  const [list, setList] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [nowPage, setNowPage] = useState(1);
  const [numPerPage, setNumPerPage] = useState(0);
  const [totalRecord, setTotalRecord] = useState(0);
  const [page, setPage] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  function getData() {
    axios.get(
        API_URL,
        {params: {cPage: nowPage, categorykey: null}}
    ).then((res) => {
        console.log(res.data);
        setList(res.data.b_ar);
        setTotalPage(res.data.totalPage);
        setNowPage(res.data.nowPage);
        setNumPerPage(res.data.numPerPage);
        setTotalRecord(res.data.totalRecord);
        setPage(res.data.page);
        setCheckedItems([]);
        setAllChecked(false);
        
    })
  }

  useEffect(() => {
      getData();
  }, [nowPage]); //nowPage의 값이 바뀔 때마다 useEffect호출(≒서버 호출)

  //1페이지에서 2페이지로 이동한다는 상황을 예시로 들어보자
  //인자 e는 이벤트 객체 -> 이벤트 객체를 부르는 target이 2페이지로 이동하는 버튼 -> 그 버튼의 innerText가 2 -> 2를 nowPage에 넣어서 값 변경 -> getData 변경
  function changePage(e) { 
      setNowPage(e.target.innerText);
      // getData(); useEffect안에 []만 쓸 거면 getData(); 호출해야하지만 [nowPage]를 써주면 getData();를 호출하지 않아도 괜찮음
  }


  const handleAllCheck = (e) => {
    const checked = e.target.checked;
    setAllChecked(checked);

    if (checked) {
        const allCheckedItems = list.map((item) => item.key);
        setCheckedItems(allCheckedItems);
    } else {
        setCheckedItems([]);
    }
};


    const handleRowCheck = (e, key) => {
      const checked = e.target.checked;
      let updatedCheckedItems = [...checkedItems];
  
      if (checked) {
          updatedCheckedItems.push(key);
      } else {
          updatedCheckedItems = updatedCheckedItems.filter((item) => item !== key);
      }
  
      setCheckedItems(updatedCheckedItems);
      setAllChecked(updatedCheckedItems.length === list.length);
  };

  function delete_choice() {
    if (checkedItems.length === 0) {
      alert("삭제할 게시물을 선택해 주세요.");
      return;
    }
    axios.post(
      DEL_URL, checkedItems
    ).then(res => {
        alert("삭제 완료");
        getData(); // 데이터 새로고침
      })
      .catch(error => {
        console.error("삭제 중 오류가 발생했습니다.", error);
      });
    }

    const thStyle = {
    textAlign: 'center', 
    fontWeight: 'bold'
  };

  // function doSrchFrm(cPage) {
  //   let now = cPage;
    
  //   axios({
  //     url: `${API_URL_2}?cPage=${cPage}`,
  //     method: 'post',
  //     params: {
  //         search_type: search_type,
  //         type: type,
  //         regist_start_date: regist_start_date,
  //         regist_end_date: regist_end_date,
  //         isdeleted: isdeleted,
  //         recent_login_start_date: recent_login_start_date,
  //         recent_login_end_date: recent_login_end_date,
  //         isauthorized: isauthorized,
  //     }
  // }).then((response) => {
  //       setUserlist(response.data.ar);
  //       setTotalPage(response.data.totalPage);
  //     }).catch(error => {
  //       console.error("Error during search:", error);
  //   });
  // }

  return (
    <>
      <form name="frm" id="frm" method="post">
        <div className="headingArea">
          <div className="mTitle">
            <h1>게시물 관리</h1>
          </div>
          <div className="mBreadcrumb">
            <ol>
              <li className="home">게시판관리</li>
              <li>게시판</li>
              <li className="now" title="현재 페이지">게시물 관리</li>
            </ol>
          </div>
        </div>
        <div className="section">
          <div className="mBoard gSmall typeSearch">
            <table border="1" summary="">
              <caption>전체게시물 검색</caption>
              <tbody>
                <tr>
                  <th scope="row" style={thStyle}>작성일</th>
                  <td>
                    <input type="text" id="startDate" className="fText gDate" name="start_date" value="2024-06-01" readOnly />
                    <a href="javascript:;" id="eStartCalendar" className="btnIcon icoCal"><span>달력보기</span></a> ~
                    <input type="text" id="endDate" className="fText gDate" name="end_date" value="2024-07-01" readOnly />
                    <a href="javascript:;" id="eEndCalendar" className="btnIcon icoCal"><span>달력보기</span></a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={thStyle}>게시판 선택</th>
                  <td>
                    <select className="fSelect" id="sel_board_no" name="sel_board_no">
                      <option value="0">전체목록</option>
                      {/* 게시판 목록 렌더링 */}
                      {list && list.length > 0 ? (
                          list.map((bvo, index) => (
                              <option key={index} value={index}>{bvo.bc_option1}</option>
                          ))
                      ) : (
                          <option value="">옵션값 없음</option>
                      )}
                    </select>
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={thStyle}>게시글 찾기</th>
                  <td>
                    <select id="search" name="search" className="fSelect">
                      <option value="">::선택::</option>
                      <option value="categorykey">분류</option>
                      <option value="title">제목</option>
                    </select>
                    <input type="text" id="search_key" name="search_key" value="" className="fText" style={{ width: '400px' }} />
                    <span style={{ display: 'none' }}>
                      <a onClick={() => searchProduct(0)} className="btnSearch"><span>검색</span></a>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mButton gCenter">
            <a id="eBtnSearch" onClick={() => searchProduct(0)} className="btnSearch"><span>검색</span></a>
            <a id="eBtnSearch" onClick={() => router.push('/admin/board/post/add')} className="btnSearch"><span>작성</span></a>
          </div>
          <input type="hidden" name="page" />
        </div>
      </form>

      <div className="section">
        <div className="mTitle">
          <h2>전체 게시물 목록</h2>
          <div className="gRight">
            <span className="txtLess"><blank></blank></span>
            <a href="#none" className="btnNormal" onClick={delete_choice}>
              <span><em className="icoDel"></em> 삭제</span>
            </a>
          </div>
        </div>
        <div className="mBoard gScroll gCell typeList">
          <table border="1" summary="" className="eChkTr">
            <caption>전체 게시물 목록</caption>
            <colgroup>
              <col className="chk" />
              <col style={{ width: '80px' }} />
              <col style={{ width: '90px' }} />
              <col style={{ width: '250px' }} />
              <col style={{ width: '140px' }} />
              <col style={{ width: '140px' }} />
              <col style={{ width: '90px' }} />
            </colgroup>
            <thead>
              <tr>
                <th scope="col"><input type="checkbox" className="allChk" checked={allChecked} onChange={handleAllCheck}/></th>
                <th scope="col" style={thStyle}>번호</th>
                <th scope="col" style={thStyle}>분류</th>
                <th scope="col" style={thStyle}>제목</th>
                <th scope="col" style={thStyle}>작성일</th>
                <th scope="col" style={thStyle}>수정일</th>
                <th scope="col" style={thStyle}>조회</th>
              </tr>
            </thead>
            <tbody>
              {list && list.length > 0 ? (
                  list.map((ar, i) => (
                    <tr key={i} style={{textAlign: 'center'}}>
                        <td>
                          <input type="checkbox" className="rowChk" name="use_board[]" value={ar.boardkey} 
                            checked={checkedItems.includes(ar.boardkey)} onChange={(e) => handleRowCheck(e, ar.boardkey)}/>
                        </td>
                        <td onClick={() => router.push(`/admin/board/post/detail/${ar.boardkey}`)} style={{ cursor: 'pointer' }}>{i + 1}</td>
                        <td>{ar.categorykey}</td>
                        <td onClick={() => router.push(`/admin/board/post/detail/${ar.boardkey}`)} style={{ cursor: 'pointer' }}>{ar.title}</td>
                        <td>{ar.create_dtm}</td>
                        <td>{ar.update_dtm}</td>
                        <td>{ar.viewqty}</td>
                    </tr>
                  ))
              ) : (
                  <tr>
                      <td colSpan="7">게시물이 없습니다.</td>
                  </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* <div className="mPaginate">
          {page.startPage >= page.pagePerBlock && (
            <a href="#" onClick={() => searchProduct(page.nowPage - page.pagePerBlock)} className="prev">이전 10페이지</a>
          )}
          <ol>
            {Array.from({ length: page.endPage - page.startPage + 1 }, (_, i) => page.startPage + i).map((p, idx) => (
              <li key={idx}>
                {page.nowPage === p ? (
                  <strong title="현재페이지">{p}</strong>
                ) : (
                  <a href="#" onClick={() => searchProduct(p)}>{p}</a>
                )}
              </li>
            ))}
          </ol>
          {page.endPage < page.totalPage && (
            <a href="#" onClick={() => searchProduct(page.nowPage + page.pagePerBlock)} className="next">다음 10페이지</a>
          )}
        </div> */}
        <div className="mPaginate">
          <ol>
          {Array.from({ length: totalPage }, (_, index) => (
              <li key={index + 1}>
                  <a href="#" onClick={() => doSrchFrm(index + 1)}>
                      {index + 1}
                  </a>
              </li>
          ))}
          </ol>
        </div>
      </div>
    </>
  )
}
