package com.sist.back.controller;

import java.util.Map;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sist.back.service.DealreviewService;
import com.sist.back.vo.PostVO;



@Controller
@RequestMapping("/user")

public class DealreviewController {
    @Autowired
    private DealreviewService d_service;

    @RequestMapping("/dealReview")
    @ResponseBody
    public Map<String, Object> dealReview(String userkey) {
        Map<String, Object> map = new HashMap<>();
        PostVO[] d_ar = d_service.dealReview(userkey);
        map.put("d_ar", d_ar);

        return map;
    }
    
}
