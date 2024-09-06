'use client'

import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar, Divider, Tabs, Tab } from '@mui/material';
import axios from 'axios';

export default function Review() {
  const BUY_URL = "/user/buyingReview";

  const [selectedTab, setSelectedTab] = useState(0);
  const [buyingList, setBuyingList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios.get(
      BUY_URL, {
        params: { userkey: 45 }
      }).then((res) => {
        console.log(res.data.buying_ar);
        setBuyingList(res.data.buying_ar); // buyingList에 저장
      })
  }

  const tabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // 탭에 따른 데이터를 필터링하는 함수
  function filter(f) {
    if (f === 'buyer') {
      return buyingList;
    } else {
      return [];
    }
  }

  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <Typography variant="h5" sx={{ mb: 3, color: '#000' }}>거래 후기 상세</Typography>
      <Tabs value={selectedTab} onChange={tabChange} aria-label="deal review tabs" sx={{ width: '100%' }}>
        <Tab label="전체 후기" sx={{ flex: 1, color: '#000' }} />
        <Tab label="판매자 후기" sx={{ flex: 1, color: '#000' }} />
        <Tab label="구매자 후기" sx={{ flex: 1, color: '#000' }} />
      </Tabs>
      <Divider sx={{ my: 2 }} />
      <div className="empty_area">
        {/* 구매자 후기 탭에만 데이터 표시 */}
        {selectedTab === 2 && filter('buyer').map((review, index) => (
          <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, mb: 2 }}>
            {/* 왼쪽 내용 */}
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
              {/* 프로필 이미지 */}
              <Avatar src={review.imgurl || '/default-profile.png'} alt="프로필" sx={{ width: 56, height: 56, mr: 2 }} />
              <Box sx={{ flexGrow: 1 }}>
                {/* 닉네임 */}
                <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#000' }}>
                  {review.nickname}
                </Typography>
                {/* 리뷰 타입 및 주소 */}
                <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#666' }}>
                  {review.reviewType} • {review.district} {review.city} {review.name}
                </Typography>
                {/* 후기 내용 */}
                <Typography variant="body1" sx={{ fontSize: '1rem', mt: 1, color: '#000' }}>
                  {review.dealuserreview || '후기 내용이 없습니다.'}
                </Typography>
              </Box>
            </Box>
            {/* 오른쪽 후기 이미지 */}
            {review.dealuserreviewimg && (
              <Box sx={{ ml: 2 }}>
                <img src={review.dealuserreviewimg} alt="후기 이미지" style={{ width: '80px', height: '80px', borderRadius: '8px' }} />
              </Box>
            )}
            {/* 구분선 */}
          </Box>
        ))}
      </div>
      <Divider sx={{ width: '100%', mt: 2, mb: 2 }} />
    </Box>
  );
}
