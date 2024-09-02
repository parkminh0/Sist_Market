package com.sist.back.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sist.back.service.PostService;
import com.sist.back.vo.PostVO;

@RestController
@RequestMapping("/uspost")
public class testController {

    @Autowired
    PostService p_service;

    @PostMapping("/write")
    public Map<String, Object> write(@ModelAttribute PostVO vo, List<MultipartFile> post_img) {

        System.out.println("카테고리:" + vo.getCategorykey());
        System.out.println("제목:" + vo.getTitle());
        System.out.println("내용:" + vo.getContent());
        System.out.println("가격:" + vo.getPrice());
        System.out.println("메소드:" + vo.getMethod());
        System.out.println("바겐:" + vo.getCanbargain());

        // 파일 데이터 처리
        if (post_img != null) {
            for (MultipartFile file : post_img) {
                System.out.println("Uploaded file name: " + file.getOriginalFilename());
            }
        }

        Map<String, Object> res = new HashMap<>();
        res.put("test", "test");
        return res;
    }

}
