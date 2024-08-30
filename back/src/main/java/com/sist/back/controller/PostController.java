package com.sist.back.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sist.back.service.PostService;

@RestController
@RequestMapping("/adpost")
public class PostController {
    
    @Autowired
    PostService p_service;
  
    @RequestMapping("/all")
    public Map<String, Object> all() {

        Map<String, Object> res = new HashMap<>();
        res.put("post_list", p_service.all());
        return res;
    }

    @RequestMapping("/detail")
    public Map<String, Object> findById(int postkey) {
        Map<String, Object> e_map = new HashMap<>();
        e_map.put("pvo", p_service.getPostByPostKey(postkey));
        e_map.put("tvo", p_service.getTownByPostKey(postkey));
        e_map.put("o_list", p_service.getOfferByPostKey(postkey));
        e_map.put("cr_list", p_service.getChatroomByPostKey(postkey));
        e_map.put("ur_list", p_service.getUserReviewByPostKey(postkey));
        return e_map;
    }
  
}
