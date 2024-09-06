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

    @RequestMapping("/buyingReview")
    @ResponseBody
    public Map<String, Object> buyingReview(String userkey) {
        Map<String, Object> map = new HashMap<>();
        PostVO[] buying_ar = d_service.buyingReview(userkey);
        map.put("buying_ar", buying_ar);

        return map;
    }

    @RequestMapping("/sellingReview")
    @ResponseBody
    public Map<String, Object> sellingReview(String userkey) {
        Map<String, Object> map = new HashMap<>();
        PostVO[] selling_ar = d_service.sellingReview(userkey);
        map.put("selling_ar", selling_ar);

        return map;
    }

}
