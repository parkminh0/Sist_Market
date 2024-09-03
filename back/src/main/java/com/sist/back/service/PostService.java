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
import com.sist.back.vo.UserReviewVO;

@Service
public class PostService {
    @Autowired
    PostMapper p_mapper;

    public PostVO[] all() {
        return p_mapper.all();
    }

    public PostVO getPostByPostKey(int postkey) {
        return p_mapper.getPostByPostKey(postkey);
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

    public List<UserReviewVO> getUserReviewByPostKey(int postkey) {
        return p_mapper.getUserReviewByPostKey(postkey);
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

    public PostVO[] search(String sort, String category, String minPrice, String maxPrice) {
        Map<String, String> map = new HashMap<>();
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
}
