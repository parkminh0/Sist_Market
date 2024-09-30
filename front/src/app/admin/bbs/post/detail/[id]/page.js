'use client'

import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Typography, Box, Button, CircularProgress } from '@mui/material';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Page() {
  //인자로 내가 입력한 값을 받아오는 거면 {}안에 넣어줘야 하지만
  //detail, edit 뒤에 [id]는 동적(Dynamic) 라우팅으로 내가 받아오는 값이 아니다. 그러므로 properties의 개념으로 {}없이 그냥 props라고 쓴 것 

  const params = useParams();
  const API_URL = `/admin/board/getBbs?boardkey=${params.id}`;
  const DEL_URL = `/admin/board/del?boardkey=${params.id}`;
  const BC_URL = "/admin/board/getBc";
  const [vo, setVo] = useState({});
  const [categoryname, setCategoryname] = useState('');
  const router = useRouter();

  function getData() {
      axios.get(
          API_URL
      ).then((res) => {
          console.log(res);
          setVo(res.data.bvo);
          getCategoryname(params.id)
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
      });
    }

  function getCategoryname(boardkey) {
    axios.get(BC_URL, { params: { boardkey } })
        .then((res) => {
            console.log(res);
            setCategoryname(res.data.categoryname);
        });
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginLeft: '0px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '10px' }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>게시글 상세보기</Typography>
          <Box>
            <Button variant="contained" color="success" sx={{ marginRight: '10px', fontSize: '12px' }} onClick={() => router.push(`/admin/bbs/post/edit/${params.id}`)}>
              수정
            </Button>
            <Button variant="contained" sx={{ marginRight: '10px', fontSize: '12px' }} onClick={() => router.push('/admin/bbs/post')}>
              목록
            </Button>
            <Button variant="contained" color="error" sx={{ fontSize: '12px' }} onClick={del}>
              삭제
            </Button>
          </Box>
        </Box>
        <TableContainer component={Paper} sx={{ minWidth: 200, borderRadius: 2, boxShadow: 3, width: '100%', overflowX: 'auto' }}>
          <Table sx={{ border: '1px solid lightgray' }} aria-label="공지사항 표">
            <TableBody>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.4rem', border: '1px solid lightgray' }}>
                  게시글 번호
                </TableCell>
                <TableCell align="center" sx={{ fontSize: '1.3rem', borderRight: '1px solid lightgray', borderBottom: '1px solid lightgray' }}>
                  {vo.boardkey}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.4rem', border: '1px solid lightgray' }}>
                  카테고리
                </TableCell>
                <TableCell align="center" sx={{ fontSize: '1.3rem', borderBottom: '1px solid lightgray' }}>
                  {categoryname}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.4rem', border: '1px solid lightgray' }}>
                  작성일
                </TableCell>
                <TableCell align="center" sx={{ fontSize: '1.3rem', borderRight: '1px solid lightgray', borderBottom: '1px solid lightgray' }}>
                  {vo.create_dtm}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.4rem', border: '1px solid lightgray' }}>
                  수정일
                </TableCell>
                <TableCell align="center" sx={{ fontSize: '1.3rem', borderBottom: '1px solid lightgray' }}>
                  {vo.update_dtm}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.4rem', border: '1px solid lightgray' }}>
                  제목
                </TableCell>
                <TableCell align="center" colSpan={3} sx={{ fontSize: '1.3rem', borderBottom: '1px solid lightgray' }}>
                  {vo.title}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.4rem', border: '1px solid lightgray' }}>
                  내용
                </TableCell>
                <TableCell align="left" colSpan={3} dangerouslySetInnerHTML={{ __html: vo.content }}
                          sx={{ fontSize: '1.3rem', borderBottom: '1px solid lightgray', minHeight: '200px', display: 'block', padding: '20px' }} />
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}
