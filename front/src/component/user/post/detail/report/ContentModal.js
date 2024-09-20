import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import "/public/css/report.css";

export default function ContentModal(props) {
  const onClose = props.handleContentClose;
  const content = props.content;
  const handleReportOpen = props.handleReportOpen;

  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);

  const handleMaxText = (e) => {
    if (e.target.value.length <= 300) {
      setText(e.target.value);
    }
  };

  const handleChkbox = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div>
      {/* 모달 제거하고 일반 컴포넌트처럼 렌더링 */}
      <Box className="modal-box" sx={{ bgcolor: 'background.paper', p: 3, borderRadius: 2, width: 600 }}>
        <div className='divv'>
          <button onClick={() => { onClose(); handleReportOpen(); }} style={{ cursor: 'pointer', fontSize: '20px' }}>&lt;</button>
          <button onClick={() => { onClose(); props.handleReportClose(); }} className="link-button" style={{ cursor: 'pointer', fontSize: '20px' }}>X</button>
        </div>
        <Typography id="modal-modal-title" variant="subtitle1" component="h2" sx={{ fontWeight: 'bold', mb: 1, fontSize: '16px', marginBottom: '10px' }}>
          {content}
        </Typography>
        <TextField fullWidth multiline rows={4} variant="outlined" value={text} onChange={handleMaxText} placeholder="신고 내용을 입력해주세요. (최대 300자)" className='text-field'
          helperText={`${text.length}/300`} />
        <FormControlLabel label="이 사용자의 글 보지 않기" className="label-custom" 
          sx={{ mb: 1, '& .MuiFormControlLabel-label': { fontSize: '14px', alignItems: 'center', paddingTop: '4px;' } }}
          control={ <Checkbox checked={checked} onChange={handleChkbox} className="checkbox-custom" />} />
        <Typography variant="body2" sx={{ mb: 2, fontSize: '12px', color: 'gray' }}>
          '나의 당근 &gt; 설정 &gt; 게시글 미노출 사용자 관리'에서 취소할 수 있습니다.
        </Typography>
        <Button variant="contained" fullWidth onClick={onClose} sx={{ backgroundColor: '#ff5722', color: 'white', mt: 1, '&:hover': { backgroundColor: '#e64a19' }, marginTop: 0 }}>
          신고하기
        </Button>
      </Box>
    </div>
  );
}
