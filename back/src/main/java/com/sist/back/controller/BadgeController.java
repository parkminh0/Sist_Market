package com.sist.back.controller;

import java.util.Map;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sist.back.service.BadgeService;
import com.sist.back.vo.BadgeVO;


@Controller
@RequestMapping("/user/badge")
public class BadgeController {
    @Autowired
    private BadgeService b_service;

    @RequestMapping("getAllBadge")
    @ResponseBody
    public Map<String, Object> getAllBadge() {
        Map<String, Object> map = new HashMap<>();

        BadgeVO[] b_ar = b_service.getAllBadge();
        map.put("all", b_ar);

        return map;
    }

    @RequestMapping("getBadge")
    @ResponseBody
    public Map<String, Object> getBadge(String userkey) {
        Map<String, Object> map = new HashMap<>();

        BadgeVO[] b_ar = b_service.getBadge(userkey);
        map.put("b_ar", b_ar);

        return map;
    }
    
    @RequestMapping("representBadge")
    @ResponseBody
    public Map<String, Object> representBadge(String userkey, String badgekey) {
        Map<String, Object> map = new HashMap<>();
        map.put("cnt", b_service.representBadge(userkey, badgekey));
        return map;
    }

    @RequestMapping("cancelRep")
    @ResponseBody
    public Map<String, Object> cancelRep(String userkey, String badgekey) {
        Map<String, Object> map = new HashMap<>();
        map.put("cnt", b_service.cancelRep(userkey, badgekey));
        return map;
    }
}
