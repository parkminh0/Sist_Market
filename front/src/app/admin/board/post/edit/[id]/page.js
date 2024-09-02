'use client'

import axios from 'axios';
import { useRouter } from 'next/navigation';
import "/public/css/admin/board.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useEffect, useState } from 'react'

export default function page(props) {

    const router = useRouter();
    const [vo, setVo] = useState({});
    const API_URL = `/api/admin/board/getBbs?boardkey=${props.params.id}`
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [boardkey, setBoardkey] = useState();

    function getData() {
        axios.get(
            API_URL
        ).then((res) => {
            setVo(res.data.bvo);
            setTitle(res.data.bvo.title);
            setContent(res.data.bvo.content);
            setBoardkey(res.data.bvo.boardkey);
        });
    }

    useEffect(() => {
        getData();
    }, [])

    function send() {
        if (content == null) {
            alert("내용 없음");
            return;
        }
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('boardkey', boardkey);

        axios.post(
            "/api/admin/board/edit", 
            formData,
        ).then((res) => {
            if (res.data.cnt === 1) {
                router.push(`/admin/board/post/detail/${props.params.id}`);
            }
        });
    }

  return (
    <div className="container">
        <div className="card">
            <header>
                <h2>게시글 수정</h2>
            </header>
            <hr className="divider"/>
            <div>
                <input type="text" id="title" name="title" placeholder="제목" required className="input-field" value={title} onChange={(e) => setTitle(e.target.value)} />
                <ReactQuill value={content} placeholder="내용을 입력하세요" style={{ height: '300px', marginBottom: '20px' }} onChange={setContent} />
            </div>
            <div className="button-group">
                <button type="button" className="btn btn-list" onClick={() => router.push('/admin/board/post')}>목록</button>
                <button type="button" className="btn btn-primary" onClick={send}>수정</button>
                <button type="button" className="btn btn-error" onClick={() => router.push(`/admin/board/post/detail/${props.params.id}`)}>취소</button>
            </div>
        </div>
    </div>
  )
}
