'use client'

import "/public/css/admin/board.css";
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Typography, Box, Button } from '@mui/material';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Page() {
  const params = useParams();
  const API_URL = `/qna/getQuestion?qnakey=${params.id}`;
  const DEL_URL = `/qna/delete?qnakey=${params.id}`;
  const [vo, setVo] = useState({});
  const router = useRouter();

  function getData() {
      axios.get(
          API_URL
      ).then((res) => {
          setVo(res.data.qvo);
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
        router.push('/admin/qna');
      });
    }

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginLeft: '0px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '10px' }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>게시글 상세보기</Typography>
          <Box>
            <Button variant="contained" color="success" sx={{ marginRight: '10px', fontSize: '12px' }} onClick={() => router.push(`/admin/qna/answer/${params.id}`)}>
              답변하기
            </Button>
            <Button variant="contained" sx={{ marginRight: '10px', fontSize: '12px' }} onClick={() => router.push('/admin/qna')}>
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
                  문의사항 번호
                </TableCell>
                <TableCell align="center" sx={{ fontSize: '1.3rem', borderRight: '1px solid lightgray', borderBottom: '1px solid lightgray' }}>
                  {vo.qnakey}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.4rem', border: '1px solid lightgray' }}>
                  사용자 번호
                </TableCell>
                <TableCell align="center" sx={{ fontSize: '1.3rem', borderBottom: '1px solid lightgray' }}>
                  {vo.userkey}
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
                  답변 날짜
                </TableCell>
                <TableCell align="center" sx={{ fontSize: '1.3rem', borderBottom: '1px solid lightgray' }}>
                  {vo.answer_dtm ? vo.answer_dtm : '-'}
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
                  문의 내용
                </TableCell>
                <TableCell align="left" colSpan={3} dangerouslySetInnerHTML={{ __html: vo.content }}
                          sx={{ fontSize: '1.3rem', borderBottom: '1px solid lightgray', minHeight: '200px', display: 'block', padding: '20px' }} />
              </TableRow>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.4rem', border: '1px solid lightgray' }}>
                  답변 내용
                </TableCell>
                <TableCell align="center" colSpan={3} sx={{ fontSize: '1.3rem', borderBottom: '1px solid lightgray' }}>
                    {vo.answer ? (
                        <div dangerouslySetInnerHTML={{ __html: vo.answer }} />
                    ) : (
                        "아직 답변하지 않았습니다."
                    )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}
