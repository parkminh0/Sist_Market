package com.sist.back.controller;

import java.util.Map;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sist.back.service.MannerService;
import com.sist.back.vo.ReviewListVO;

@Controller
@RequestMapping("/user/manner")
public class MannerController {
    @Autowired
    private MannerService m_service;

    @RequestMapping("getManner")
    @ResponseBody
    public Map<String, Object> getManner(String userkey) {
        Map<String, Object> map = new HashMap<>();

        ReviewListVO[] m_ar = m_service.getManner(userkey);
        map.put("m_ar", m_ar);

        return map;
    }
}
