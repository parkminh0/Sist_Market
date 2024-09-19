package com.sist.back.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sist.back.mapper.PostMapper;

import com.sist.back.vo.ChatroomVO;
import com.sist.back.vo.OfferVO;
import com.sist.back.vo.PostVO;
import com.sist.back.vo.TownVO;
import com.sist.back.vo.PostCountVO;
import com.sist.back.vo.PostImgVO;

@Service
public class PostService {
    @Autowired
    PostMapper p_mapper;

    public PostVO[] all() {
        return p_mapper.all();
    }

    public int getViewqty(int postkey) {
        return p_mapper.getViewqty(postkey);
    }

    public int incViewqty(int postkey) {
        return p_mapper.incViewqty(postkey);
    }

    public PostVO getPostByPostKey(int postkey) {
        return p_mapper.getPostByPostKey(postkey);
    }

    public List<PostVO> getPostByCategoryKey(int categorykey) {
        return p_mapper.getPostByCategoryKey(categorykey);
    }

    public List<PostVO> getCellListByUserPostKey(int userkey, int postkey) {
        return p_mapper.getCellListByUserPostKey(userkey, postkey);
    }

    public TownVO getTownByPostKey(int postkey) {
        return p_mapper.getTownByPostKey(postkey);
    }

    public List<OfferVO> getOfferByPostKey(int postkey) {
        return p_mapper.getOfferByPostKey(postkey);
    }

    public List<ChatroomVO> getChatroomByPostKey(int postkey) {
        return p_mapper.getChatroomByPostKey(postkey);
    }

    public int remindInsert(String postkey) {
        return p_mapper.insertRemindPost(postkey);
    }

    public int unhidPost(String postkey) {
        return p_mapper.unhidPostByPostKey(postkey);
    }

    public int remindUpdate(String postkey) {
        return p_mapper.remindPostByPostKey(postkey);
    }

    public int delLikeFromList(String likeWhat, String likeKey) {
        int result = 0;
        switch (likeWhat) {
            case "post":
                result = p_mapper.delWishlistByKey(likeKey);
                break;
            case "category":
                result = p_mapper.delInterestcategoryByKey(likeKey);
                break;
            case "keyword":
                result = p_mapper.delKeywordByKey(likeKey);
                break;
        }

        return result;
    }

    public PostVO[] searchpost(Map<String, Object> map) {
        PostVO[] ar = null;
        List<PostVO> list = p_mapper.searchpost(map);
        if (list != null && list.size() > 0) {
            ar = new PostVO[list.size()];
            list.toArray(ar);
        }
        return ar;
    }

    public int writePost(PostVO vo) {
        p_mapper.writePost(vo);
        return Integer.parseInt(vo.getPostkey());
    }

    public int editPost(PostVO vo) {
        return p_mapper.editPost(vo);
    }

    public int deletePostImg(String postkey) {
        return p_mapper.deletePostImg(postkey);
    }

    public PostVO[] search(String userkey, String lastPostKey, int howManyPost, String loc1, String[] loc2, String sort,
            String category, String minPrice, String maxPrice) {
        Map<String, Object> map = new HashMap<>();
        map.put("userkey", userkey);
        map.put("lastPostKey", lastPostKey);
        map.put("howManyPost", howManyPost);
        map.put("loc1", loc1);
        map.put("loc2", loc2);
        map.put("sort", sort);
        map.put("category", category);
        map.put("minPrice", minPrice);
        map.put("maxPrice", maxPrice);

        PostVO[] ar = null;
        List<PostVO> list = p_mapper.search(map);
        if (list != null && list.size() > 0) {
            ar = new PostVO[list.size()];
            list.toArray(ar);
        }
        return ar;
    }

    public PostVO[] main(String param) {
        return p_mapper.main(param);
    }

    public PostCountVO postForPostAdmin() {
        return p_mapper.countpostForAdmin();
    }

    // 전체 상태를 조회하는 메서드 (1, 2, 3, 4 상태를 모두 조회)
    public List<PostVO> findAllByPoststatusIn(List<Integer> statuses) {
        return p_mapper.findAllByPoststatusIn(statuses);
    }

    // 특정 상태를 조회하는 메서드
    public List<PostVO> findByPoststatus(int poststatus) {
        return p_mapper.findByPoststatus(poststatus);
    }

    public List<PostImgVO> getPImgListByPostKey(int postkey) {
        return p_mapper.pImg_list(postkey); // PostMapper에서 pImg_list 메서드 호출
    }




    public int hidePost(String postkey) {
        return p_mapper.hidePost(postkey);
    }
}
