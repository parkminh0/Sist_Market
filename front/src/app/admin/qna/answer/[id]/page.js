'use client';

import axios from 'axios';
import { useEffect, useMemo, useRef, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from '@mui/material';
import { useParams, useRouter } from 'next/navigation';

export default function Page() {
  // formats로 사용자가 넣을 수 있는 데이터를 제한함
  const formats = ["header", "font", "size", "bold", "italic", "underline", "strike", "align", "float", "blockquote", "list", "bullet", "indent", "background", "color", "link", "image", "video", "height", "width",];
  const params = useParams();
  const router = useRouter();
  const quillRef = useRef();
  const API_URL = `/qna/getQuestion?qnakey=${params.id}`;
  const ANSWER_URL = `/qna/answer?qnakey=${params.id}`;
  
  const [vo, setVo] = useState({});
  const [content, setContent] = useState(); // 에디터에 적히는 값 콘솔에 출력
  const [answerContent, setAnswerContent] = useState('');

  function getData() {
    axios.get(API_URL).then((res) => {
      setVo(res.data.qvo);
      if (res.data.qvo.content) {
        setContent(res.data.qvo.content || '');
      }
    });
  }

  useEffect(() => {
    getData();
  }, [API_URL]);

  const handleChange = (value) => {
      setAnswerContent(value);
  };

  function answer() {
    axios.post(ANSWER_URL, {
        qnakey: params.id,
        answer: answerContent,
      }, {
        headers: {
            'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        if (res.data.cnt === 1) {
          alert("답변 완료");
          router.push('/admin/qna');
        } else {
          throw new Error('업로드 실패');
        }
      });
  }

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        ["bold", "italic", "underline", "strike"],
        ["link", "image", "video"],
        [{ header: [1, 2, 3, false] }],
        ["blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ align: [] }],
        [{ color: [] }, { background: [] }]
      ],
    },
  }), []);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div className="button-group" style={{ display: 'flex', gap: '10px' }}>
            <Button variant="contained" color="success" onClick={answer}>저장</Button>
            <Button variant="contained" color="error" onClick={() => router.push(`/admin/qna/detail/${params.id}`)}>
                취소
            </Button>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <input type="text" id="title" name="title" placeholder="제목" required className="input-field"
            value={vo.title || ''}
            style={{ flex: '1', height: '40px', padding: '10px', boxSizing: 'border-box', marginBottom: '10px' }} readOnly/>
        </div>
      </div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: "[문의 내용]<br/><br/>" + content }} style={{ border: '1px solid lightgray', padding: '10px' }} />
        <br/><br/>
        <strong style={{ display: 'block', marginBottom: '5px' }}>[ 답 변 ]</strong>
        <ReactQuill theme="snow" ref={quillRef} modules={modules} formats={formats} value={answerContent} onChange={handleChange} style={{ height: '400px', width: '100%' }}/>
      </div>
    </>
  );
};


