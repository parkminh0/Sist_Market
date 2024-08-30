package com.sist.back.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.sist.back.service.UserService;
import com.sist.back.vo.userVO;

import jakarta.servlet.ServletContext;
import jakarta.servlet.http.HttpSession;

@Controller
public class UserController {

    @Autowired
    ServletContext application;

    @Autowired
    HttpSession session;

    @Autowired
    UserService service;

    

    @RequestMapping(value="/login", method=RequestMethod.POST)
    @ResponseBody
    public Map<String, String> login(userVO vo) {

        Map<String, String> response = new HashMap<String, String>();

        userVO uvo = service.login(vo);
        if (uvo != null) {
            service.upt_login_dtm(uvo);
            session.setAttribute("user_VO", uvo);
            response.put("message", "로그인 성공");

        } else {
            response.put("message", "로그인 실패");
        }

        return response;
    }

    @RequestMapping(value="/logout")
    public String logout() {
        session.removeAttribute("user_VO");
        return "/";
    }

    @RequestMapping("/login/kakao")
    public ModelAndView login(String code) {
        ModelAndView mv = new ModelAndView();
        return mv;
    }
}