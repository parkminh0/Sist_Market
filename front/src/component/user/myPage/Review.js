import React, { useState } from 'react'
import { Box, Typography, Avatar, Divider, Tabs, Tab } from '@mui/material';

export default function Review() {
    const API_URL = "/user/dealReview";

    const [list, setList] = useState([]);

    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
      setSelectedTab(newValue);
    };
  
    const reviews = [
      {
        username: '당근은carrot',
        role: '판매자',
        location: '서울특별시 강남구',
        rating: 5,
        reviewText: '',
        avatarUrl: '/path-to-avatar-image',
      },
      {
        username: '떡이져아',
        role: '구매자',
        location: '경기도 용인시 수지구',
        rating: 0,
        reviewText: '잘 쓰겠습니다 :)',
        avatarUrl: '/path-to-avatar-image',
      },
    ];
  
    const renderReviews = (filter) => {
      const filteredReviews = reviews.filter((review) => {
        if (filter === 'seller') {
          return review.role === '판매자';
        } else if (filter === 'buyer') {
          return review.role === '구매자';
        }
        return true; // 전체 보기
      });

    return filteredReviews.map((review, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <Avatar src={review.avatarUrl} alt={review.username} sx={{ width: 48, height: 48 }} />
          <Box sx={{ ml: 2, flexGrow: 1 }}>
            <Typography variant="subtitle1">
              {review.username} ({review.role})
            </Typography>
            <Typography variant="body2">
              {review.location}
            </Typography>
            {review.rating > 0 ? (
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                {Array(review.rating)
                  .fill('')
                  .map((_, i) => (
                    <Typography key={i} variant="body1">
                      ●
                    </Typography>
                  ))}
              </Box>
            ) : (
              <Typography variant="body2" sx={{ mt: 1 }}>
                {review.reviewText}
              </Typography>
            )}
          </Box>
          <Box>
            <Typography variant="body2" sx={{ cursor: 'pointer' }}>
              ⋮
            </Typography>
          </Box>
        </Box>
      ));
    };
  
    return (
      <Box sx={{ width: '100%', padding: 2 }}>
        {/* 제목 */}
        <Typography variant="h5" sx={{ mb: 3 }}>
          거래 후기 상세
        </Typography>
  
    {/* 탭 */}
    <Tabs 
    value={selectedTab} 
    onChange={handleTabChange} 
    aria-label="deal review tabs" 
    sx={{ width: '100%' }}
    >
    <Tab label="전체 후기" sx={{ flex: 1 }} />
    <Tab label="판매자 후기" sx={{ flex: 1 }} />
    <Tab label="구매자 후기" sx={{ flex: 1 }} />
    </Tabs>

  
        {/* Divider */}
        <Divider sx={{ my: 2 }} />
  
        {/* 후기 리스트 */}
        {selectedTab === 0 && renderReviews('all')}
        {selectedTab === 1 && renderReviews('seller')}
        {selectedTab === 2 && renderReviews('buyer')}
      </Box>
    );
}
