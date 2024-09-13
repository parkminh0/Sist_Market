'use client'

import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar, Divider, Tabs, Tab, Modal } from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Review({ userKey, onReviewCountChange }) {
  const BUY_URL = "/user/buyingReview";
  const SELL_URL = "/user/sellingReview";

  const [selectedTab, setSelectedTab] = useState(0);
  const [buyingList, setBuyingList] = useState([]);
  const [sellingList, setSellingList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const userkey = userKey;

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    Promise.all([
      axios.get(BUY_URL, { params: { userkey: userkey} }),
      axios.get(SELL_URL, { params: { userkey: userkey} })
    ]).then(([res1, res2]) => {
        console.log(res2.data.selling_ar);
        setBuyingList(res1.data.buying_ar);
        setSellingList(res2.data.selling_ar);
        onReviewCountChange([...(res1.data.buying_ar || []), ...(res2.data.selling_ar || [])].length);
    })
  }

  const tabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  function filter(f) {
    if (f == 'buyer') {
      return buyingList || [];
    } else if (f == 'seller') {
      return sellingList || [];
    } else if (f == 'all') {
      return [...(sellingList || []), ...(buyingList || [])]; //sellingList + buyingList (순서 상관 O)
    } else {
      return [];
    }
}

  const modalOpen = (imgUrl) => {
    setSelectedImage(imgUrl);
    setOpenModal(true);
  };

  const modalClose = () => {
    setOpenModal(false);
    setSelectedImage(null);
  };

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
      {(selectedTab === 0 && (filter('all').length > 0 ? (
        filter('all').map((review, index) => (
          <React.Fragment key={index}>
            <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, mb: 2, alignItems: 'flex-start' }}>
              <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <Avatar src={review.imgurl || '/default-profile.png'} alt="프로필" sx={{ width: 56, height: 56, mr: 2 }} />
                <Box sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#000', textAlign: 'left' }}>{review.nickname}</Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#666', textAlign: 'left' }}>
                      {review.reviewType} • {review.region1} {review.region2} {review.region3}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1rem', mt: 1, color: '#000', textAlign: 'left' }}>{review.dealuserreview || '후기 내용이 없습니다.'}</Typography>
                  </Box>
                </Box>
              </Box>
              {(review.dealuserreviewimg || review.userreviewimg) && (
                <Box sx={{ ml: 2 }}>
                  <img src={review.dealuserreviewimg || review.userreviewimg} alt="후기 이미지" style={{ width: '120px', height: '120px', borderRadius: '8px', cursor: 'pointer' }} 
                    onClick={() => modalOpen(review.dealuserreviewimg || review.userreviewimg)} />
                </Box>
              )}
            </Box>
            {index < filter('all').length - 1 && (<Divider sx={{ width: '100%', mt: 2, mb: 2 }} />)}
          </React.Fragment>
        ))
      ) : (
        <Typography sx={{ textAlign: 'center', mt: 4, color: '#666' }}>받은 거래 후기가 없습니다.</Typography>
      )))}

      {(selectedTab === 1 && (filter('seller').length > 0 ? (
        filter('seller').map((review, index) => (
          <React.Fragment key={index}>
            <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, mb: 2, alignItems: 'flex-start' }}>
              <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <Avatar src={review.imgurl || '/default-profile.png'} alt="프로필" sx={{ width: 56, height: 56, mr: 2 }} />
                <Box sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#000', textAlign: 'left' }}>{review.nickname}</Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#666', textAlign: 'left' }}>
                      {review.reviewType} • {review.region1} {review.region2} {review.region3}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1rem', mt: 1, color: '#000', textAlign: 'left' }}>{review.dealuserreview || '후기 내용이 없습니다.'}</Typography>
                  </Box>
                </Box>
              </Box>
              {review.userreviewimg && (
                <Box sx={{ ml: 2 }}>
                  <img src={review.userreviewimg} alt="후기 이미지" style={{ width: '120px', height: '120px', borderRadius: '8px', cursor: 'pointer' }} 
                    onClick={() => modalOpen(review.userreviewimg)} />
                </Box>
              )}
            </Box>
            {index < filter('seller').length - 1 && (<Divider sx={{ width: '100%', mt: 2, mb: 2 }} />)}
          </React.Fragment>
        ))
      ) : (
        <Typography sx={{ textAlign: 'center', mt: 4, color: '#666' }}>받은 판매자 후기가 없습니다.</Typography>
      )))}

      {(selectedTab === 2 && (filter('buyer').length > 0 ? (
        filter('buyer').map((review, index) => (
          <React.Fragment key={index}>
            <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, mb: 2, alignItems: 'flex-start' }}>
              <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <Avatar src={review.imgurl || '/default-profile.png'} alt="프로필" sx={{ width: 56, height: 56, mr: 2 }} />
                <Box sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#000', textAlign: 'left' }}>{review.nickname}</Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#666', textAlign: 'left' }}>
                      {review.reviewType} • {review.region1} {review.region2} {review.region3}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1rem', mt: 1, color: '#000', textAlign: 'left' }}>{review.dealuserreview || '후기 내용이 없습니다.'}</Typography>
                  </Box>
                </Box>
              </Box>
              {review.dealuserreviewimg && (
                <Box sx={{ ml: 2 }}>
                  <img src={review.dealuserreviewimg} alt="후기 이미지" style={{ width: '120px', height: '120px', borderRadius: '8px', cursor: 'pointer' }} 
                    onClick={() => modalOpen(review.dealuserreviewimg)} />
                </Box>
              )}
            </Box>
            {index < filter('buyer').length - 1 && (<Divider sx={{ width: '100%', mt: 2, mb: 2 }} />)}
          </React.Fragment>
        ))
      ) : (
        <Typography sx={{ textAlign: 'center', mt: 4, color: '#666' }}>받은 구매자 후기가 없습니다.</Typography>
      )))}
      </div>
      <Divider sx={{ width: '100%', mt: 2, mb: 2 }} />
      <Modal open={openModal} onClose={modalClose} aria-labelledby="image-modal-title" aria-describedby="image-modal-description">
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', maxWidth: '500px', bgcolor: 'background.paper', 
                  boxShadow: 24, p: 4, outline: 'none' }}>
          {selectedImage && ( <img src={selectedImage} alt="확대된 이미지" style={{ width: '100%', height: 'auto', borderRadius: '8px' }}/> )}
        </Box>
      </Modal>
    </Box>
  );
}


