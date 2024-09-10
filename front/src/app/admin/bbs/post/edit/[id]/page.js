'use client';

import axios from 'axios';
import { useEffect, useMemo, useRef, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ImageActions } from '@xeger/quill-image-actions';
import { ImageFormats } from '@xeger/quill-image-formats';
import { Button, TextField } from '@mui/material';
import { useParams, useRouter } from 'next/navigation';


export default function Page() {
  const params = useParams();
  // formats로 사용자가 넣을 수 있는 데이터를 제한함
  const formats = ["header", "font", "size", "bold", "italic", "underline", "strike", "align", "float", "blockquote", "list", "bullet", "indent", "background", "color", "link", "image", "video", "height", "width",];
  const API_URL = `/admin/board/getBbs?boardkey=${params.id}`;
  const ALL_BC_URL = "/admin/board/getAllBc";
  const BC_URL = "/admin/board/getBc";
  const EDIT_URL = "/admin/board/edit";
  const AddImage_URL = "/admin/board/addImage";
  const Add_URL = "/admin/board/add";
  // const EmptyAdd_URL = "/admin/board/empty";
  // const deleteLatest_URL="/admin/board/deleteLatest";
  
  // 이미지 사이즈 조절을 위한 모듈
  Quill.register('modules/imageActions', ImageActions);
  Quill.register('modules/imageFormats', ImageFormats);

  const [vo, setVo] = useState({});

  const [bc_list, setBc_list] = useState([]);
  const [content, setContent] = useState(); // 에디터에 적히는 값 콘솔에 출력
  const [title, setTitle] = useState();
  const [categoryname, setCategoryname] = useState();
  const [userkey, setUserkey] = useState("1");
  const boardkey = useRef(1);
  const router = useRouter();
  console.log(content);

  const quillRef = useRef(); // 레퍼런스 객체로서 DOM 요소 접근 조작 가능

  function getData() {
    axios.get(
        API_URL
    ).then((res) => {
        console.log(res);
        setVo(res.data.bvo);
        getCategoryname(params.id)
    });
  }

  function getCategoryname(boardkey) {
    axios.get(BC_URL, { params: { boardkey } })
        .then((res) => {
            console.log(res);
            setCategoryname(res.data.categoryname);
        });
  };


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

  useEffect(() => {
    getData();
    let reaction = true;

    const multiFunction = async () => {
        try {
            const res = await axios.get(ALL_BC_URL);
            setBc_list(res.data.bc_list || []);
            if (reaction) {
                // emptyAdd();
            }
        } catch (error) {
            setBc_list([]);
        }
    };
    multiFunction();
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
          <select className="fSelect" id="sel_board_no" name="sel_board_no" value={categoryname} onChange={(e) => setCategoryname(e.target.value)}
            style={{ flex: '1', height: '40px', padding: '10px', boxSizing: 'border-box', marginRight: '10px', marginTop: '10px' }}>
            {bc_list && bc_list.map((bc, i) => (<option key={i} value={bc.value}>{bc.value}</option>))}
          </select>
          <div className="button-group" style={{ display: 'flex', gap: '10px' }}>
            <Button variant="contained" color="success" onClick={uploadContent}>수정</Button>
            <Button variant="contained" color="error" >
                취소
            </Button>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <input type="text" id="title" name="title" placeholder="제목" required className="input-field"
            value={title || vo.title} onChange={(e) => setTitle(e.target.value)}
            style={{ flex: '1', height: '40px', padding: '10px', boxSizing: 'border-box', marginBottom: '10px' }} />
        </div>
      </div>
      <div>
        <ReactQuill theme="snow" ref={quillRef} modules={modules} formats={formats} value={content || vo.content} onChange={setContent} style={{ height: '800px', width: '1000px' }}/>
      </div>
    </>
  );
};


