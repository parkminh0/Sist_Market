'use client'

import React, { useEffect, useRef, useState } from 'react'
import "/public/css/admin/board.css";
import { useRouter } from 'next/navigation';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
export default function page() {
    //npm install react-router-dom --save
    
    const router = useRouter();
    
    const ADD_URL = '/api/admin/board/add';
    const BC_URL = "/api/admin/board/getAllBc";
    const [bc_list, setBc_list] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [boardkey, setBoardkey] = useState(); //쓰나?
    // const [userkey, setUserkey] = useState(); 
    const [categoryName, setCategoryName] = useState('0');
    const [s_files, setS_files] = useState([]);
    
    const titleRef = useRef();
    const quillRef = useRef(null);

    // useEffect(() => {
    //     로그인 관련 코드 보고 userkey 가져와서 set하기
    //     setUserkey(res...);
    // }, []);

    useEffect(() => {
        axios.get(BC_URL)
          .then((res) => {
            setBc_list(res.data.bc_list);
          })
      }, []);

    const send = (e) => {
        e.preventDefault();
    
        if (title.length < 1) {
            titleRef.current.focus();
            return;
        }
    
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("boardkey", boardkey);
        formData.append("categoryName", categoryName);
    
        // 여러 파일을 선택할 수 있으므로 모든 파일을 FormData에 추가합니다.
        s_files.forEach((file, index) => {
            // formData.append(`s_files[${index}]`, file);
            formData.append(`s_files`, file);
        });
    
        axios.post(ADD_URL, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        .then((res) => {
            if (res.data.cnt === 1) {
                router.push('/admin/board/post', { replace: true });
            } else {
                alert("업로드 실패.");
            }
        })
        .catch((error) => {
            console.error("추가 중 오류가 발생했습니다.", error);
        });
    };

  return (
    <div className="container">
        <div className="card">
            <header>
                <h2>게시글 추가</h2>
            </header>
            <hr className="divider" />
            <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <select className="fSelect" id="sel_board_no" name="sel_board_no" onChange={(e) => setCategoryName(e.target.value)}
                        style={{ flex: '0.5', height: '40px', padding: '10px', marginBottom: '10px', boxSizing: 'border-box' }}>
                    <option value="" disabled selected hidden>:::카테고리 선택:::</option>
                        {bc_list.map((bc, i) => (
                            <option key={i} value={bc.value}>{bc.value}</option>
                        ))}
                </select>
                <input type="text" id="title" name="title" placeholder="제목" required  className="input-field" value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        style={{ flex: '2', height: '40px', padding: '10px', boxSizing: 'border-box' }} />
            </div>
            <div>
                <ReactQuill value={content} placeholder="내용을 입력하세요" style={{ height: '300px', marginBottom: '20px' }} 
                            onChange={setContent} />
            </div>
            <div className="button-group">
                <button type="button" className="btn btn-primary" onClick={send}>저장</button>
                <button type="button" className="btn btn-error" onClick={() => router.push('/admin/board/post')}>취소</button>
            </div>
        </div>
    </div>
  )
}
