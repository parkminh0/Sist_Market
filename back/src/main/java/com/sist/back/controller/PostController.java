package com.sist.back.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import com.sist.back.service.PostService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;




@RestController
@RequestMapping("/post")

public class PostController {
    
    @Autowired
    PostService service;

    @RequestMapping("/all")
    @ResponseBody
    public Map<String, Object> all() {

        Map<String, Object> res = new HashMap<>();
        res.put("post_list", service.all());
        return res;
    }
    
}
