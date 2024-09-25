'use client'

import React, { useEffect, useState } from 'react'
import "/public/css/admin/board.css";
import axios from 'axios';
import { useRouter } from "next/navigation";

export default function page() {
  const ALL_URL = '/qna/all';
  const SELECT_URL = '/qna/select';
  const CHKDEL_URL = '/qna/chkDelete';

  const router = useRouter();
  const [list, setList] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [page, setPage] = useState({});
  const [isanswered, setIsAnswered] = useState(""); // 추가된 상태


  function getData(cPage, selectedData = "") {
    const url = selectedData !== "" 
      ? `${SELECT_URL}?cPage=${cPage}&isanswered=${selectedData}` 
      : `${ALL_URL}?cPage=${cPage}`;
    axios({
      url,
      method: 'get',
    }).then((res) => {
      setList(res.data.q_ar);
      setPage(res.data.page);
    }).catch((error) => {
      if (error.response && error.response.status === 404) {
        setList([]);
        setPage({});
      }
    });
  }
  
  useEffect(() => {
      getData(1);
  }, []);

  function changePage(pNum) {
    getData(pNum, isanswered);
  }
  
  const handleAllCheck = (e) => {
    const checked = e.target.checked;
    setAllChecked(checked);
    if (checked) {
        const allCheckedItems = list.map((item) => item.qnakey);
        setCheckedItems(allCheckedItems);
    } else {
        setCheckedItems([]);
    }
  };

  const handleRowCheck = (e, qnakey) => {
    const checked = e.target.checked;
    let updatedCheckedItems = [...checkedItems];
    if (checked) {
        updatedCheckedItems.push(qnakey);
    } else {
        updatedCheckedItems = updatedCheckedItems.filter((item) => item !== qnakey);
    }
    setCheckedItems(updatedCheckedItems);
    setAllChecked(updatedCheckedItems.length === list.length);
  };

  function delete_choice() {
    if (checkedItems.length === 0) {
      alert("삭제할 게시글을 선택해 주세요.");
      return;
    }
    axios.post(
      CHKDEL_URL, checkedItems
    ).then(res => {
        alert("삭제 완료");
        getData(1);
      })
      .catch(error => {
        console.error("삭제 중 오류가 발생했습니다.", error);
      });
    }

    const handleSelect = (e) => {
      const selectedData = e.target.value;
      setIsAnswered(selectedData);
      getData(1, selectedData);
    };
    
  return (
    <>
      <div className="section">
        <div className="mTitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="gLeft" style={{ display: 'flex', alignItems: 'center' }}>
            <h2 style={{ marginRight: '5px' }}>문의사항 목록</h2>
            <select id="answer_filter" name="answer_filter" onChange={handleSelect}>
              <option value="">전체</option>
              <option value="1">답변 완료</option>
              <option value="0">답변 미완</option>
            </select>
            <p className="total">(<strong style={{ color: 'blue', marginLeft: '5px' }}>{page.totalRecord || 0}</strong> 건)</p>
          </div>
          <div className="gRight" style={{ display: 'flex', alignItems: 'center' }}>
            <span className="txtLess"></span>
            <a id="eBtnSearch" onClick={delete_choice} className="btnSearch"><span>삭제</span></a>
          </div>
        </div>
        <div className="mBoard gScroll gCell typeList">
          <table border="1" summary="" className="eChkTr">
            <caption>게시글 목록</caption>
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
                <th scope="col" className="th-center-bold">번호</th>
                <th scope="col" className="th-center-bold">사용자번호</th>
                <th scope="col" className="th-center-bold">제목</th>
                <th scope="col" className="th-center-bold">작성일</th>
                <th scope="col" className="th-center-bold">답변 날짜</th>
                <th scope="col" className="th-center-bold">답변 여부</th>
              </tr>
            </thead>
            <tbody>
              {list && list.length > 0 ? (
                  list.map((ar, i) => (
                    <tr key={i} style={{textAlign: 'center'}}>
                        <td>
                          <input type="checkbox" className="rowChk" name="use_board[]" value={ar.qnakey} 
                                checked={checkedItems.includes(ar.qnakey)} onChange={(e) => handleRowCheck(e, ar.qnakey)}/>
                        </td>
                        <td onClick={() => router.push(`/admin/qna/detail/${ar.qnakey}`)} style={{ cursor: 'pointer' }}>
                          {(page.nowPage - 1) * page.numPerPage + i + 1}
                        </td>
                        <td>{ar.userkey}</td>
                        <td onClick={() => router.push(`/admin/qna/detail/${ar.qnakey}`)} style={{ cursor: 'pointer' }}>{ar.title ? ar.title : '-'}</td>
                        <td>{ar.create_dtm}</td>
                        <td>{ar.answer_dtm ? ar.answer_dtm : '-'}</td>
                        <td>{ar.isanswered == 1 ? 'O' : 'X'}</td>
                    </tr>
                  ))
              ) : (
                  <tr><td colSpan="7" style={{textAlign: 'center'}}>문의사항이 없습니다.</td></tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="mPaginate">
          {page.startPage > 1 && (
            <a href="#" onClick={() => changePage(page.startPage - page.pagePerBlock)} className="prev">
              이전 {page.pagePerBlock}페이지
            </a>
          )}
          <ol>
            {Array.from({ length: page.endPage - page.startPage + 1 }, (_, i) => page.startPage + i).map((pNum) => (
              <li key={pNum}>
                {page.nowPage == pNum ? (
                  <strong title="현재페이지">{pNum}</strong>
                ) : (
                  <a href="#" onClick={() => changePage(pNum)}>{pNum}</a>
                )}
              </li>
            ))}
          </ol>
          {page.endPage < page.totalPage && (
            <a href="#" onClick={() => changePage(page.endPage + 1)} className="next">
              다음 {page.pagePerBlock}페이지
            </a>
          )}
        </div>
      </div>
    </>
  )
}
