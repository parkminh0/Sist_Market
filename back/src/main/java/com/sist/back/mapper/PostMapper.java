package com.sist.back.mapper;

import java.util.List;

import com.sist.back.vo.ChatroomVO;
import com.sist.back.vo.OfferVO;
import com.sist.back.vo.PostVO;
import com.sist.back.vo.TownVO;
import com.sist.back.vo.UserReviewVO;

public interface PostMapper {
    PostVO getPostByPostKey(int postkey);
    TownVO getTownByPostKey(int postkey);
    List<OfferVO> getOfferByPostKey(int postkey);
    List<ChatroomVO> getChatroomByPostKey(int postkey);
    List<UserReviewVO> getUserReviewByPostKey(int postkey);
}
