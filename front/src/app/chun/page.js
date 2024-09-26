'use client'

import React, { useState } from 'react'
import SellerReviewModal from "@/component/user/chun/SellerReviewModal";
import BuyerReviewModal from "@/component/user/chun/BuyerReviewModal";

export default function page() {
  const [sellerReportOpen, setSellerReportOpen] = useState(false);
  const [buyerReportOpen, setBuyerReportOpen] = useState(false);

  const handleSellerReportOpen = () => setSellerReportOpen(true);
  const handleSellerReportClose = () => setSellerReportOpen(false);

  const handleBuyerReportOpen = () => setBuyerReportOpen(true);
  const handleBuyerReportClose = () => setBuyerReportOpen(false);

  const postkey = 139;

  return (
    <>
      <div>
        <button onClick={handleSellerReportOpen}>판매자 후기</button>
        <SellerReviewModal
          reportOpen={sellerReportOpen}
          handleReportClose={handleSellerReportClose}
          postkey={postkey}
        />
      </div>
      <div>
        <button onClick={handleBuyerReportOpen}>구매자 후기</button>
        <BuyerReviewModal
          reportOpen={buyerReportOpen}
          handleReportClose={handleBuyerReportClose}
          postkey={postkey}
        />
      </div>
    </>
  );
}
