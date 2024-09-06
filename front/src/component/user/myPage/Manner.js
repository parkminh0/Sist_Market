'use client'

import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider, ListItemSecondaryAction } from '@mui/material';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export default function Manner() {
  const compliments = [
    '친절하고 매너가 좋아요.',
    '제가 있는 곳까지 와서 거래했어요.',
    '물품상태가 설명한 것과 같아요.',
    '응답이 빨라요.',
    '좋은 물품을 저렴하게 판매해요.',
  ];

  return (
    <Box sx={{ padding: 2, maxWidth: 400, margin: 'auto' }}>
      {/* 매너 상세 제목, 가운데 정렬 및 굵은 구분선 */}
      <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
        <Typography variant="h6" sx={{ color: 'black' }}>매너 상세</Typography>
      </Box>
      <Divider sx={{ marginBottom: 2, borderColor: 'black', borderWidth: '1px' }} />

      {/* 받은 매너 칭찬 */}
      <Box sx={{ marginBottom: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SentimentSatisfiedAltIcon color="primary" />
          <Typography variant="subtitle1" sx={{ marginLeft: 1, color: 'black', fontWeight: 'bold' }}>
            받은 매너 칭찬
          </Typography>
        </Box>
        <Divider sx={{ borderColor: '#e0e0e0', borderWidth: '0.5px', margin: 1 }} />
        <List>
          {compliments.map((text, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText primary={text} sx={{ color: 'black' }} />
                {/* 오른쪽에 아이콘과 숫자 추가 */}
                <ListItemSecondaryAction>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <PeopleAltIcon sx={{ color: 'gray', marginRight: 0.5 }} />
                    <Typography sx={{ color: 'gray' }}>1</Typography>
                  </Box>
                </ListItemSecondaryAction>
              </ListItem>
              {/* 구분선 추가 (마지막 항목에는 구분선을 추가하지 않음) */}
              {index < compliments.length - 1 && <Divider sx={{ borderColor: '#e0e0e0', borderWidth: '0.5px' }} />}
            </React.Fragment>
          ))}
        </List>
      </Box>

      {/* 얇은 구분선 */}
      <Divider sx={{ borderColor: 'gray', borderWidth: '0.7px', marginBottom: 2 }} />

      {/* 받은 비매너 */}
      <Box sx={{ marginBottom: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SentimentDissatisfiedIcon color="error" />
          <Typography variant="subtitle1" sx={{ marginLeft: 1, color: 'black', fontWeight: 'bold' }}>
            받은 비매너
          </Typography>
        </Box>
        <Divider sx={{ borderColor: '#e0e0e0', borderWidth: '0.5px', margin: 1 }} />
        <List>
          <ListItem>
            <ListItemText primary="받은 비매너가 없어요." sx={{ color: 'black' }} />
            <ListItemSecondaryAction>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PeopleAltIcon sx={{ color: 'gray', marginRight: 0.5 }} />
                <Typography sx={{ color: 'gray' }}>1</Typography>
              </Box>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
