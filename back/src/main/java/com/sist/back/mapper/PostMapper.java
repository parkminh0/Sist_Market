package com.sist.back.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import com.sist.back.vo.ChatroomVO;
import com.sist.back.vo.OfferVO;
import com.sist.back.vo.PostVO;
import com.sist.back.vo.TownVO;
import com.sist.back.vo.UserReviewVO;

@Mapper
public interface PostMapper {
    PostVO[] all();

    PostVO getPostByPostKey(int postkey);

    TownVO getTownByPostKey(int postkey);

    List<OfferVO> getOfferByPostKey(int postkey);

    List<ChatroomVO> getChatroomByPostKey(int postkey);

    List<UserReviewVO> getUserReviewByPostKey(int postkey);

    int insertRemindPost(String postkey);
    int remindPostByPostKey(String postkey);

    List<PostVO> searchpost(Map<String, Object> map);

    int writePost(PostVO vo);

    int editPost(PostVO vo);

    int delWishlistByKey(String likeKey);
    int delInterestcategoryByKey(String likeKey);
    int delKeywordByKey(String likeKey);

    List<PostVO> search(Map<String, String> map);
}
