package com.sist.back.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import com.sist.back.vo.ChatroomVO;
import com.sist.back.vo.OfferVO;
import com.sist.back.vo.PostVO;
import com.sist.back.vo.PostCountVO;
import com.sist.back.vo.TownVO;

@Mapper
public interface PostMapper {
    PostVO[] all();

    PostVO getPostByPostKey(int postkey);

    TownVO getTownByPostKey(int postkey);

    List<OfferVO> getOfferByPostKey(int postkey);

    List<ChatroomVO> getChatroomByPostKey(int postkey);

    int insertRemindPost(String postkey);

    int remindPostByPostKey(String postkey);

    int unhidPostByPostKey(String postkey);

    List<PostVO> searchpost(Map<String, Object> map);

    int writePost(PostVO vo);

    int editPost(PostVO vo);

    int delWishlistByKey(String likeKey);

    int delInterestcategoryByKey(String likeKey);

    int delKeywordByKey(String likeKey);

    List<PostVO> search(Map<String, String> map);

    PostVO[] main(String param);

    PostCountVO countpostForAdmin();

    int deletePostImg(String postkey);

    // 여러 상태 값에 따른 조회 / search
    List<PostVO> findAllByPoststatusIn(List<Integer> statuses);

    // 특정 상태 값에 따른 조회 / search
    List<PostVO> findByPoststatus(int poststatus);

}
