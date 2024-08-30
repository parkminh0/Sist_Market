'use client'

import React, { useEffect, useRef, useState } from 'react'
import "/public/css/admin/board_add.css";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default function page() {
    //npm install react-router-dom --save
    const API_URL = '/api/admin/board/list';

    const router = useRouter();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [boardkey, setBoardkey] = useState();
    const [userkey, setUserkey] = useState();
    const [townkey, setTownkey] = useState();
    const [b_category, setB_category] = useState();
    const [s_files, setS_files] = useState([]);
    

    const titleRef = useRef();


    function getData() {
        axios.get(
            API_URL
        ).then((res) => {
            const item = res.data.b_ar[0];
            setUserkey(item.userkey);
            setTownkey(item.townkey);
            setB_category(item.b_category);
            setBoardkey(item.boardkey);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (title.length < 1) {
            titleRef.current.focus();
            return;
        }
    
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("userkey", userkey);
        formData.append("boardkey", boardkey);
    
        // 여러 파일을 선택할 수 있으므로 모든 파일을 FormData에 추가합니다.
        s_files.forEach((file, index) => {
            formData.append(`s_files[${index}]`, file);
        });
    
        axios.post("http://localhost:8080/api/admin/board/write", formData, {
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
            console.error("There was an error!", error);
        });
    };

    const customUploadAdapter = (loader) => {
        return {
          upload() {
            return new Promise((resolve, reject) => {
              const formData = new FormData();
              loader.file.then((file) => {
                formData.append("file", file);
                formData.append("title", title);
                formData.append("content", content);
                // 필요한 필드가 모두 포함되었는지 확인
                formData.append("userkey", userkey);
                formData.append("boardkey", boardkey);
                formData.append("s_files", s_files[0])
                // formData.append("townkey", townkey);
                // formData.append("categorykey", categorykey);

    
                axios
                  .post("http://localhost:8080/api/admin/board/write", formData)
                  .then((res) => {
                    resolve({
                      default: res.data.data.uri,
                    });
                  })
                  .catch((err) => reject(err));
              });
            });
          },
        };
      };
    
      function uploadPlugin(editor) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
          return customUploadAdapter(loader);
        };
      }
    
    //   const handleSubmit = () => {
    //     if (title.length < 1) {
    //       titleRef.current.focus();
    //       return;
    //     }
    
    //     const data = {
    //       title,
    //       content,
    //     };
    
    //     axios.post("http://localhost:8080/api/admin/board/write", data).then((res) => {
    //       if (res.status === 200) {
    //         router.push("/", { replace: true });
    //         return;
    //       } else {
    //         alert("업로드 실패.");
    //         return;
    //       }
    //     });
    //   };
    
  return (
    // npm install @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic
    <>
        <div className="Editor">
        <section>
    <div className="title-wrapper">
        <textarea
            className="input-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            ref={titleRef}
        />
    </div>
</section>
<section>
    <CKEditor
        editor={ClassicEditor}
        data=""
        config={{ extraPlugins: [uploadPlugin] }}
        onReady={(editor) => {
            console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
            setContent(editor.getData());
            console.log({ event, editor, content });
        }}
        onBlur={(event, editor) => {
            console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
            console.log("Focus.", editor);
        }}
    />
</section>
<section>
    <div className="file-upload-wrapper">
        <input
            type="file"
            multiple
            onChange={(e) => setS_files([...e.target.files])}
        />
    </div>
</section>
<section>
    <div className="control-box">
        <div className="cancel-btn-wrapper">
            <button type='button' onClick={() => router.push('/admin/board/post')}>취소</button>
        </div>
        <div className="submit-btn-wrapper">
            <button type='button' onClick={handleSubmit}>완료</button>
        </div>
    </div>
</section>

    </div>

        {/* <div className="container">
            <div className="card">
                <header>
                    <h2>게시물 쓰기</h2>
                </header>
                <hr className="divider"/>
                <div>
                    <input type="text" id="title" name="title" placeholder="제목" required className="input-field" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <CKEditor
                        editor={ClassicEditor}
                        data={content}
                        onReady={editor => {
                            editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
                                return handleImageUpload(loader);
                            };
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setContent(data);
                        }}
                    />
                </div>
                <div className="button-group">
                    <button type="button" className="btn btn-error" onClick={() => router.push('/admin/board/post')}>취소</button>
                </div>
            </div>
        </div> */}
    </>
  )
}
