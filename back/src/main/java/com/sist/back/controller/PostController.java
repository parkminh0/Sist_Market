package com.sist.back.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sist.back.service.PostService;
import com.sist.back.vo.PostVO;

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

       

    // POST 요청을 처리하기 위해 @PostMapping 사용
    @PostMapping("/searchpost")
    public Map<String, Object> searchpost(@RequestBody Map<String, Object> searchParams) {
        // 요청 파라미터 확인 (디버깅용)
        System.out.println("Received search parameters: " + searchParams);
        
        // 결과를 담을 Map 객체 생성
        Map<String, Object> res = new HashMap<>();
        res.put("post_list", p_service.searchpost(searchParams));
        // 결과를 JSON 형태로 반환
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
