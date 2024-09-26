package com.sist.back.controller;

import java.util.Map;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sist.back.service.DealreviewService;
import com.sist.back.vo.PostVO;
import com.sist.back.vo.ReviewListVO;

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

    @RequestMapping("/reviewList")
    @ResponseBody
    public Map<String, Object> reviewList(String preference) {
        Map<String, Object> map = new HashMap<>();
        ReviewListVO[] r_ar = d_service.reviewList(preference);
        map.put("r_ar", r_ar);
        return map;
    }

    @RequestMapping("sellerReview")
    @ResponseBody
    public Map<String, Object> sellerReview(String reviewlistkey, String postkey) {
        Map<String, Object> map = new HashMap<>();
        int cnt = d_service.sellerReview(reviewlistkey, postkey);
        map.put("cnt", cnt);
        return map;
    }

    @RequestMapping("buyerReview")
    @ResponseBody
    public Map<String, Object> buyerReview(String reviewlistkey, String postkey) {
        Map<String, Object> map = new HashMap<>();
        int cnt = d_service.buyerReview(reviewlistkey, postkey);
        map.put("cnt", cnt);
        return map;
    }
    

}
