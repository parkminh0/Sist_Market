'use client';

import axios from 'axios';
import { useEffect, useMemo, useRef, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ImageActions } from '@xeger/quill-image-actions';
import { ImageFormats } from '@xeger/quill-image-formats';
import { Button, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';

// formats로 사용자가 넣을 수 있는 데이터를 제한함
const formats = ["header", "font", "size", "bold", "italic", "underline", "strike", "align", "float", "blockquote", "list", "bullet", "indent", "background", "color", "link", "image", "video", "height", "width",];
const BC_URL = "/admin/board/getAllBc";
const AddImage_URL = "/admin/board/addImage";
const Add_URL = "/admin/board/add";
const EmptyAdd_URL = "/admin/board/empty";
const deleteLatest_URL="/admin/board/deleteLatest";

// 이미지 사이즈 조절을 위한 모듈
Quill.register('modules/imageActions', ImageActions);
Quill.register('modules/imageFormats', ImageFormats);

const ReactEditor = () => {
  const [bc_list, setBc_list] = useState([]);
  const [content, setContent] = useState(); // 에디터에 적히는 값 콘솔에 출력
  const [title, setTitle] = useState();
  const [categoryname, setCategoryName] = useState();
  const [userkey, setUserkey] = useState("1");
  const boardkey = useRef(1);
  const router = useRouter();
  console.log(content);

  const quillRef = useRef(); // 레퍼런스 객체로서 DOM 요소 접근 조작 가능

  const emptyAdd = async () => {
    const formData = new FormData();
    formData.append('userkey', userkey);
    const response = await axios({
      url: EmptyAdd_URL,
      method: "post",
      data: formData
    });
    if (response.data.chk === 1) {
      boardkey.current = response.data.boardkey;
    } else {
      throw new Error('빈 글 생성 실패')
    }
  }
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('userkey', userkey);
    formData.append('boardkey', boardkey.current);
    const response = await axios({
      url: AddImage_URL,
      method: "post",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
    if (response.data.chk === 1) {
      return response.data.filePath;
    } else {
      throw new Error('업로드 실패');
    }
  };

  const uploadContent = async () => {
    const formData = new FormData();
    formData.append('boardkey', boardkey.current);
    formData.append('content', content);
    formData.append('title', title);
    formData.append('userkey', userkey);
    formData.append('categoryname', categoryname);
    const response = await axios({
      url: Add_URL,
      method: "post",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
    if (response.data.chk === 1) {
      alert("저장 성공");
      router.push('/admin/bbs/post');
      return response.data.filePath;
    } else {
      throw new Error('업로드 실패');
    }
  };

  const preventGoBack = () => {
    const shouldCancel = window.confirm("변경 사항이 저장되지 않을 수 있습니다.");
    if (shouldCancel) {
        navigator.sendBeacon(deleteLatest_URL, userkey);
        router.push('/admin/bbs/post');
    } else {
        history.pushState(null, "", location.href);
    }
  };

  useEffect(() => {
    let reaction = true;
    history.pushState(null, "", location.href);
    window.addEventListener("popstate", preventGoBack);

    const handleBeforeUnload = (event) => {
        event.preventDefault();
        event.returnValue = '변경 사항이 저장되지 않을 수 있습니다.';
        navigator.sendBeacon(deleteLatest_URL, userkey);
    };

    const multiFunction = async () => {
        try {
            const res = await axios.get(BC_URL);
            setBc_list(res.data.bc_list || []);
            if (reaction) {
                emptyAdd();
            }
        } catch (error) {
            setBc_list([]);
        }
    };
    multiFunction();
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
        reaction = false;
        window.removeEventListener('beforeunload', handleBeforeUnload);
        window.removeEventListener("popstate", preventGoBack);
    }
  }, []);

  const modules = useMemo(() => ({
    imageActions: {},
    imageFormats: {},
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
          const input = document.createElement('input');
          input.setAttribute('type', 'file');
          input.setAttribute('accept', 'image/*');
          input.setAttribute('multiple', '');
          input.addEventListener('change', async () => {
            const editor = quillRef.current.getEditor(); // quill 에디터 인스턴스
            const range = editor.getSelection(true);
            const file2 = input.files && input.files[0];
            const files = input.files;
            if (file2) {
              for (const file of files) {
                try {
                  const filePath = `/img/admin/post/`;
                  const url = await uploadImage(file, filePath);
                  editor.insertEmbed(range.index, "image", url);
                  editor.setSelection(range.index + 1);
                } catch (error) {
                  console.error("이미지 삽입 오류", error);
                }
              }
            }
          });
          input.click();
        },
      },
    },
  }), []);
  
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <select className="fSelect" id="sel_board_no" name="sel_board_no" value={categoryname} onChange={(e) => setCategoryName(e.target.value)}
            style={{ flex: '1', height: '40px', padding: '10px', boxSizing: 'border-box', marginRight: '10px', fontSize: '16px !important' }}>
              <option value="" disabled hidden>:::카테고리 선택:::</option>
              {bc_list && bc_list.map((bc, i) => (
                  <option key={i} value={bc.value}>{bc.value}</option>
              ))}
          </select>
          <div className="button-group1" style={{ display: 'flex', gap: '10px' }}>
            <Button variant="contained" color="success" onClick={uploadContent}>저장</Button>
            <Button variant="contained" color="error" onClick={() => {
                    const shouldCancel = window.confirm('변경 사항이 저장되지 않을 수 있습니다. 정말 취소하시겠습니까?');
                        if (shouldCancel) {
                        navigator.sendBeacon(deleteLatest_URL, userkey);
                        router.push('/admin/bbs/post');
                        }}}>
                취소
            </Button>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <input type="text" id="title1" name="title1" placeholder="제목" required className="input-field"
            value={title} onChange={(e) => setTitle(e.target.value)}
            style={{ flex: '1', height: '40px', padding: '10px', boxSizing: 'border-box', marginBottom: '10px' }} />
        </div>
      </div>
      <div>
        <ReactQuill theme="snow" ref={quillRef} modules={modules} formats={formats} onChange={setContent} style={{ height: '800px', width: '1000px' }}/>
      </div>
    </>
  );
};

export default ReactEditor;
