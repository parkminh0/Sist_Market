package com.sist.back.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.sist.back.vo.PostVO;
import com.sist.back.vo.ReviewListVO;

import java.util.List;

@Mapper
public interface DealreviewMapper {
    List<PostVO> buyingReview(String userkey);

    List<PostVO> sellingReview(String userkey);

    List<ReviewListVO> reviewList(String preference);

    int sellerReview(String reviewlistkey, String postkey);

    int buyerReview(String reviewlistkey, String postkey);
}
