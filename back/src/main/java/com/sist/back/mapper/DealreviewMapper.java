package com.sist.back.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.sist.back.vo.PostVO;
import com.sist.back.vo.ReviewListVO;

import java.util.List;
import java.util.Map;

@Mapper
public interface DealreviewMapper {
    int buyingCount(String userkey);

    int sellingCount(String userkey);

    List<PostVO> buyingReview(Map<String, Object> d_map);

    List<PostVO> sellingReview(Map<String, Object> d_map);

    List<ReviewListVO> reviewList(String preference);

    int sellerReview(String reviewlistkey, String postkey);

    int buyerReview(String reviewlistkey, String postkey);

    int addManner(String userkey, String reviewlistkey, String estimateuserkey);

}
