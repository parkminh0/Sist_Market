'use client'

import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar, Divider, Tabs, Tab } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';

export default function Review({ userKey, onReviewCountChange }) {
  const ALL_URL = "/user/allReview";
  const BUY_URL = "/user/buyingReview";
  const SELL_URL = "/user/sellingReview";

  const [selectedTab, setSelectedTab] = useState(0);
  const [allList, setAllList] = useState([]);
  const [buyingList, setBuyingList] = useState([]);
  const [sellingList, setSellingList] = useState([]);
  const [page, setPage] = useState({});
  const [bPage, setBpage] = useState({});
  const [sPage, setSpage] = useState({});
  const userkey = userKey;

  useEffect(() => {
    getData(1);
  }, [selectedTab]);

  function getData(cPage) {
    if (selectedTab === 0) {
      axios.get(ALL_URL, { params: { userkey, cPage } }).then((res) => {
        setAllList(res.data.all_ar);
        setPage(res.data.page);
        console.log(res.data.page);
        console.log(res.data.all_ar);
        onReviewCountChange(res.data.all_ar.length);
      });
    } else if (selectedTab === 1) {
      axios.get(SELL_URL, { params: { userkey, cPage } }).then((res) => {
        setSellingList(res.data.selling_ar);
        setSpage(res.data.s_page);
      });
    } else if (selectedTab === 2) {
      axios.get(BUY_URL, { params: { userkey, cPage } }).then((res) => {
        setBuyingList(res.data.buying_ar);
        setBpage(res.data.b_page);
      });
    }
  }

  const changePage = (pNum) => {
    getData(pNum);
  };

  const tabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  function filter(f) {
    if (f == 'buyer') {
      return buyingList || [];
    } else if (f == 'seller') {
      return sellingList || [];
    } else if (f == 'all') {
      return allList || [];
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
            </Box>
            {index < filter('buyer').length - 1 && (<Divider sx={{ width: '100%', mt: 2, mb: 2 }} />)}
          </React.Fragment>
        ))
      ) : (
        <Typography sx={{ textAlign: 'center', mt: 4, color: '#666' }}>받은 구매자 후기가 없습니다.</Typography>
      )))}
      </div>
      <Divider sx={{ width: '100%', mt: 2, mb: 2 }} />

      {/* 페이징 시작 */}
        {/* {selectedTab === 0 && (
          <div className="mPaginate">
            {page.startPage > 1 && (
              <Link href="#" onClick={() => {changePage(page.startPage - page.pagePerBlock)}} className="prev">
                이전 {page.pagePerBlock}페이지
              </Link>
            )}
            <ol>
              {Array.from({ length: page.endPage - page.startPage + 1 }, (_, i) => page.startPage + i).map((pNum) => (
                <li key={pNum}>
                  {page.nowPage == pNum ? (
                    <strong title="현재페이지">{pNum}</strong>
                  ) : (
                    <Link href="#" onClick={() => {changePage(pNum)}}>{pNum}</Link>
                  )}
                </li>
              ))}
            </ol>
            {page.endPage < page.totalPage && (
              <Link href="#" onClick={() => {changePage(page.endPage + 1)}} className="next">
                다음 {page.pagePerBlock}페이지
              </Link>
            )}
          </div>
        )}

        {selectedTab === 1 && (
          <div className="mPaginate">
          {sPage.startPage > 1 && (
            <Link href="#" onClick={() => {changePage(sPage.startPage - sPage.pagePerBlock)}} className="prev">
              이전 {sPage.pagePerBlock}페이지
            </Link>
          )}
          <ol>
            {Array.from({ length: sPage.endPage - sPage.startPage + 1 }, (_, i) => sPage.startPage + i).map((pNum) => (
              <li key={pNum}>
                {sPage.nowPage == pNum ? (
                  <strong title="현재페이지">{pNum}</strong>
                ) : (
                  <Link href="#" onClick={() => {changePage(pNum)}}>{pNum}</Link>
                )}
              </li>
            ))}
          </ol>
          {sPage.endPage < sPage.totalPage && (
            <Link href="#" onClick={() => {changePage(sPage.endPage + 1)}} className="next">
              다음 {sPage.pagePerBlock}페이지
            </Link>
          )}
        </div>
        )}

        {selectedTab === 2 && (
          <div className="mPaginate">
          {bPage.startPage > 1 && (
            <Link href="#" onClick={() => {changePage(bPage.startPage - bPage.pagePerBlock)}} className="prev">
              이전 {bPage.pagePerBlock}페이지
            </Link>
          )}
          <ol>
            {Array.from({ length: bPage.endPage - bPage.startPage + 1 }, (_, i) => bPage.startPage + i).map((pNum) => (
              <li key={pNum}>
                {bPage.nowPage == pNum ? (
                  <strong title="현재페이지">{pNum}</strong>
                ) : (
                  <Link href="#" onClick={() => {changePage(pNum)}}>{pNum}</Link>
                )}
              </li>
            ))}
          </ol>
          {bPage.endPage < bPage.totalPage && (
            <Link href="#" onClick={() => {changePage(bPage.endPage + 1)}} className="next">
              다음 {bPage.pagePerBlock}페이지
            </Link>
          )}
        </div>
        )} */}

<div className="mPaginate">
        {selectedTab === 0 && page.startPage > 1 && (
          <Link href="#" onClick={() => {changePage(page.startPage - page.pagePerBlock)}} className="prev">
            이전 {page.pagePerBlock}페이지
          </Link>
        )}
        {selectedTab === 1 && sPage.startPage > 1 && (
          <Link href="#" onClick={() => {changePage(sPage.startPage - sPage.pagePerBlock)}} className="prev">
            이전 {sPage.pagePerBlock}페이지
          </Link>
        )}
        {selectedTab === 2 && bPage.startPage > 1 && (
          <Link href="#" onClick={() => {changePage(bPage.startPage - bPage.pagePerBlock)}} className="prev">
            이전 {bPage.pagePerBlock}페이지
          </Link>
        )}

        <ol>
          {selectedTab === 0 && Array.from({ length: page.endPage - page.startPage + 1 }, (_, i) => page.startPage + i).map((pNum) => (
            <li key={pNum}>
              {page.nowPage == pNum ? (
                <strong title="현재페이지">{pNum}</strong>
              ) : (
                <Link href="#" onClick={() => {changePage(pNum)}}>{pNum}</Link>
              )}
            </li>
          ))}
          {selectedTab === 1 && Array.from({ length: sPage.endPage - sPage.startPage + 1 }, (_, i) => sPage.startPage + i).map((pNum) => (
            <li key={pNum}>
              {sPage.nowPage == pNum ? (
                <strong title="현재페이지">{pNum}</strong>
              ) : (
                <Link href="#" onClick={() => {changePage(pNum)}}>{pNum}</Link>
              )}
            </li>
          ))}
          {selectedTab === 2 && Array.from({ length: bPage.endPage - bPage.startPage + 1 }, (_, i) => bPage.startPage + i).map((pNum) => (
            <li key={pNum}>
              {bPage.nowPage == pNum ? (
                <strong title="현재페이지">{pNum}</strong>
              ) : (
                <Link href="#" onClick={() => {changePage(pNum)}}>{pNum}</Link>
              )}
            </li>
          ))}
        </ol>
        {selectedTab === 0 && page.endPage < page.totalPage && (
          <Link href="#" onClick={() => {changePage(page.endPage + 1)}} className="next">
            다음 {page.pagePerBlock}페이지
          </Link>
        )}
        {selectedTab === 1 && sPage.endPage < sPage.totalPage && (
          <Link href="#" onClick={() => {changePage(sPage.endPage + 1)}} className="next">
            다음 {sPage.pagePerBlock}페이지
          </Link>
        )}
        {selectedTab === 2 && bPage.endPage < bPage.totalPage && (
          <Link href="#" onClick={() => {changePage(bPage.endPage + 1)}} className="next">
            다음 {bPage.pagePerBlock}페이지
          </Link>
        )}
      </div>
      {/* 페이징 끝 */}
    </Box>
  );
}


