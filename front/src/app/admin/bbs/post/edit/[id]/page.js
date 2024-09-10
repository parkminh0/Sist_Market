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
    const API_URL = `/admin/board/getBbs?boardkey=${props.params.id}`
    const EDIT_URL = `/admin/board/edit?bordkey=${props.params.id}`
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
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('boardkey', boardkey);
        formData.append('userkey', 45);
        formData.append('categoryname', categoryname);

        axios.post(
            EDIT_URL, 
            formData,
            { headers: {
                    "Content-Type": "multipart/form-data",
                }
            }
        ).then((res) => {
            if (res.data.cnt === 1) {
                alert("수정 완료");
                router.push(`/admin/bbs/post/detail/${props.params.id}`);
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
                <button type="button" className="btn btn-list" onClick={() => router.push('/admin/bbs/post')}>목록</button>
                <button type="button" className="btn btn-primary" onClick={send}>수정</button>
                <button type="button" className="btn btn-error" onClick={() => router.push(`/admin/bbs/post/detail/${props.params.id}`)}>취소</button>
            </div>
        </div>
    </div>
    // <>
    //   <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    //     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
    //       <select className="fSelect" id="sel_board_no" name="sel_board_no" onChange={(e) => setCategoryName(e.target.value)}
    //         style={{ flex: '1', height: '40px', padding: '10px', boxSizing: 'border-box', marginRight: '10px' }}>
    //         <option value="" disabled selected hidden>:::카테고리 선택:::</option>
    //         {bc_list && bc_list.map((bc, i) => (<option key={i} value={bc.value}>{bc.value}</option>))}
    //       </select>
    //       <div className="button-group" style={{ display: 'flex', gap: '10px' }}>
    //         <Button variant="contained" color="success" onClick={uploadContent}>저장</Button>
    //         <Button variant="contained" color="error" onClick={() => {
    //                 const shouldCancel = window.confirm('변경 사항이 저장되지 않을 수 있습니다. 정말 취소하시겠습니까?');
    //                     if (shouldCancel) {
    //                     navigator.sendBeacon(deleteLatest_URL, userkey);
    //                     router.push('/admin/bbs/post');
    //                     }}}>
    //             취소
    //         </Button>
    //       </div>
    //     </div>
    //     <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
    //       <input type="text" id="title" name="title" placeholder="제목" required className="input-field"
    //         value={title} onChange={(e) => setTitle(e.target.value)}
    //         style={{ flex: '1', height: '40px', padding: '10px', boxSizing: 'border-box', marginBottom: '10px' }} />
    //     </div>
    //   </div>
    //   <div>
    //     <ReactQuill
    //       theme="snow"
    //       ref={quillRef}
    //       modules={modules}
    //       formats={formats}
    //       onChange={setContent}
    //       style={{ height: '800px', width: '1000px' }}
    //     />
    //   </div>
    // </>
  )
}
