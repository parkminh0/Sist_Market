'use client'

import React from 'react'
import { Button, Card, CardContent, Divider, TextField } from '@mui/material'
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function page() {

  const router = useRouter();

  return (
    <div style={{width: '70%', margin: '10px auto'}}>
        <Card style={{width: '700px', margin: '20px auto'}}>
            <CardContent>
                <header>
                    <h2>게시판 글쓰기</h2>
                </header>
                <Divider />
                <br />
                <div>
                <form action='api/bbs/write' method="post" encType='multipart/form-data' style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px', margin: '0 auto' }}>
                  <TextField id="subject" label="제목" variant="outlined" name="subject" placeholder="글제목" required fullWidth />
                  <TextField id="writer" label="이름" variant="outlined" name="writer" placeholder="이름" required fullWidth />
                  <TextField id="content" label="글내용" variant="outlined" name="content" placeholder="글내용" required multiline rows={4} fullWidth />
                  <input type="hidden" name="ip" value="192.168.0.1" />
                  <input type='file' name='file' id='file'></input>
                  <div style={{display: 'flex', gap: '10px'}}>
                    {/* <Button type="button" variant="contained" color="primary" onClick={send}>저장</Button> */}
                    <Button type="button" variant="contained" color="primary" onClick={() => {document.forms[0].submit()}}>저장</Button>
                    <Button type="button" variant="contained" color="error" onClick={() => router.push('/bbs')}>취소</Button>
                  </div>
                </form>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}
