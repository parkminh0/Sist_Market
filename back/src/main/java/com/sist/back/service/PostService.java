package com.sist.back.service;


import java.util.List;
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

    public PostVO[] all(){
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
}
