'use client'

import "/public/css/admin/board.css";
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Page() {
  //인자로 내가 입력한 값을 받아오는 거면 {}안에 넣어줘야 하지만
  //detail, edit 뒤에 [id]는 동적(Dynamic) 라우팅으로 내가 받아오는 값이 아니다. 그러므로 properties의 개념으로 {}없이 그냥 props라고 쓴 것 

  const params = useParams();
  const API_URL = `/admin/board/getBbs?boardkey=${params.id}`;
  const DEL_URL = `/admin/board/del?boardkey=${params.id}`;
  const [vo, setVo] = useState({});
  const router = useRouter();

  function getData() {
      axios.get(
          API_URL
      ).then((res) => {
          console.log(res);
          setVo(res.data.bvo);
      });
  }

  useEffect(() => {
      getData();
  }, []); 

  function del() {
    axios.post(
      DEL_URL,
    ).then(res => {
        alert("삭제 완료");
        router.push('/admin/bbs/post');
      })
      .catch(error => {
        console.error("삭제 중 오류가 발생했습니다.", error);
      });
    }

  return (
    <div className="container">
      <div className="card">
        <header>
            <h2>게시글 상세보기</h2>
        </header>
        <hr className="divider"/>
        <div>
          <table className="styled-table">
            <tbody>
              <tr>
                <td className="table-cell header-cell">게시글 번호</td>
                <td className="table-cell table-cell-regular" colSpan={4}>{vo.boardkey}</td>
                <td className="table-cell header-cell">첨부파일</td>
                <td className="table-cell table-cell-regular" colSpan={4}>{vo.file_name}</td>
              </tr>
              <tr>
                <td className="table-cell header-cell">제목</td>
                <td className="table-cell table-cell-regular" colSpan={8}>{vo.title}</td>
              </tr>
              <tr>
                <td className="table-cell header-cell date-cell">등록일</td>
                <td className="table-cell table-cell-regular date-cell" colSpan={4}>{vo.create_dtm}</td>
                <td className="table-cell header-cell date-cell">수정일</td>
                <td className="table-cell table-cell-regular date-cell" colSpan={4}>{vo.update_dtm}</td>
              </tr>
              <tr>
                <td className="table-cell header-cell">조회수</td>
                <td className="table-cell table-cell-regular" colSpan={4}>{vo.viewqty}</td>
                <td className="table-cell header-cell">좋아요수</td>
                <td className="table-cell table-cell-regular" colSpan={4}>{vo.likeqty}</td>
              </tr>
              <tr>
                <td className="table-cell header-cell">내용</td>
                <td className="table-cell table-cell-regular" colSpan={8} dangerouslySetInnerHTML={{__html: vo.content}}/>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="button-group">
          <button type="button" className="btn btn-list" onClick={() => router.push('/admin/bbs/post')}>목록</button>
          <button type="button" className="btn btn-primary" onClick={() => router.push(`/admin/bbs/post/edit/${params.id}`)}>수정</button>
          <button type="button" className="btn btn-error" onClick={del}>삭제</button>
        </div>
      </div>
    </div>
  )
}
