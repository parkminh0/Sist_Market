import dynamic from 'next/dynamic';
import { useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, TextField } from '@mui/material';
import 'react-quill/dist/quill.snow.css';
import '/public/css/FaqPage.css';

// `ReactQuill`을 동적으로 가져오고, SSR은 비활성화합니다.
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function QnaModal(props) {
  const open = props.qnaOpen;
  const [content, setContent] = useState(''); // 에디터에 적히는 값
  const [title, setTitle] = useState('');
  const qnakey = useRef(1);
  const quillRef = useRef(null); // DOM 요소 접근 조작 가능
  const userkey = Cookies.get("userkey");

  const onClose = () => {
    const shouldCancel = window.confirm("변경 사항이 저장되지 않을 수 있습니다.");
    if (shouldCancel) {
      navigator.sendBeacon("/qna/deleteLatest", userkey);
      props.handleQnaClose();
    }
  };

  const emptyAdd = async () => {
    const formData = new FormData();
    formData.append('userkey', userkey);
    const response = await axios.post("/qna/empty", formData);
    if (response.data.chk === 1) {
      qnakey.current = response.data.qnakey;
    } else {
      throw new Error('빈 글 생성 실패');
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('userkey', userkey);
    formData.append('qnakey', qnakey.current);

    const response = await axios.post("/qna/addImage", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.data.chk === 1) {
      return response.data.filePath;
    } else {
      throw new Error('이미지 업로드 실패');
    }
  };

  const uploadContent = async () => {
    if (!title || !content) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append('qnakey', qnakey.current);
    formData.append('content', content);
    formData.append('title', title);
    formData.append('userkey', userkey);

    const response = await axios.post("/qna/question", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.data.chk === 1) {
      alert("문의 내용이 정상적으로 등록되었습니다.");
      setTitle('');
      props.handleQnaClose();
    } else {
      throw new Error('문의 등록 실패');
    }
  };

  useEffect(() => {
    if (open) {
      if (!userkey) {
        alert("로그인이 필요한 서비스입니다.");
        props.handleQnaClose();
      } else {
        emptyAdd();
      }
    }
  }, [open]);

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        ["link", "image", "video"],
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
      ],
      handlers: {
        image: async () => {
          if (typeof document !== 'undefined') {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            input.setAttribute('multiple', '');

            input.addEventListener('change', async () => {
              const editor = quillRef.current.getEditor(); // quill 에디터 인스턴스
              const range = editor.getSelection(true);
              const file = input.files[0];
              if (file) {
                try {
                  const filePath = await uploadImage(file);
                  editor.insertEmbed(range.index, "image", filePath);
                  editor.setSelection(range.index + 1);
                } catch (error) {
                  console.error("이미지 삽입 오류:", error);
                }
              }
            });
            input.click();
          }
        },
      },
    },
  }), []);

  return (
    <Dialog open={open} onClose={onClose} PaperProps={{ sx: { width: '800px', height: '600px', maxWidth: '90%', borderRadius: '16px' } }}>
      <DialogTitle className="dialog-title" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        문의하기 🍊
      </DialogTitle>
      <Divider />
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <TextField
          id="title1"
          name="title1"
          label="제목"
          required
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
          size="small"
          className="centered-input"
          sx={{ width: '90%', marginTop: '10px', '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#FF8000' }, '& .MuiInputLabel-root.Mui-focused': { color: '#FF8000' } }}
        />
        <DialogContent sx={{ width: '90%', height: '400px', overflow: 'auto', padding: 0, marginTop: '10px' }}>
          {ReactQuill && (
            <ReactQuill className="quill-editor centered-editor" theme="snow" ref={quillRef} modules={modules} formats={formats} onChange={setContent} style={{ height: '350px', width: '100%' }} />
          )}
        </DialogContent>
      </Box>
      <DialogActions className="dialog-actions" sx={{ justifyContent: 'center', paddingBottom: '20px' }}>
        <Button type="submit" onClick={uploadContent} className="submit-button" sx={{ backgroundColor: '#FF8000', color: 'white', marginRight: '10px', '&:hover': { backgroundColor: '#e67300' } }}>
          보내기
        </Button>
        <Button className="cancel-button" onClick={onClose} sx={{ backgroundColor: '#BDBDBD', color: 'white', '&:hover': { backgroundColor: 'gray' } }}>
          취소
        </Button>
      </DialogActions>
    </Dialog>
  );
}
