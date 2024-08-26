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
import com.sist.back.util.Paging;
import com.sist.back.vo.UserCountVO;
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

    @RequestMapping(value = "/login", method = RequestMethod.POST)
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

    @RequestMapping(value = "/logout")
    public String logout() {
        session.removeAttribute("user_VO");
        return "/";
    }

    @RequestMapping("/login/kakao")
    public ModelAndView login(String code) {
        ModelAndView mv = new ModelAndView();
        return mv;
    }

    // 관리자 유저 카운트 확인
    @RequestMapping("/usercount")
    @ResponseBody
    public Map<String, Object> getUserInfo() {
        Map<String, Object> map = new HashMap<>();
        UserCountVO ucvo = service.userForAdmin();
        map.put("ucvo", ucvo);
        return map;
    }

    // 관리자 유저 검색
    @RequestMapping("/search_user_admin")
    @ResponseBody
    public Map<String, Object> searchUserForAdmin(String search_type, String type, String regist_start_date,
            String regist_end_date, String del, String recent_login_start_date, String recent_login_end_date,
            String isauthorized, String cPage) {
        Map<String, String> iMap = new HashMap<>();
        iMap.put("search_type", (search_type != null && !search_type.isEmpty()) ? search_type.trim() : null);
        iMap.put("type", (type != null && !type.isEmpty()) ? type.trim() : null);
        iMap.put("regist_start_date",
                (regist_start_date != null && !regist_start_date.isEmpty()) ? regist_start_date.trim() : null);
        iMap.put("regist_end_date",
                (regist_end_date != null && !regist_end_date.isEmpty()) ? regist_end_date.trim() : null);
        iMap.put("recent_login_start_date",
                (recent_login_start_date != null && !recent_login_start_date.isEmpty()) ? recent_login_start_date.trim()
                        : null);
        iMap.put("recent_login_end_date",
                (recent_login_end_date != null && !recent_login_end_date.isEmpty()) ? recent_login_end_date.trim()
                        : null);
        iMap.put("del", (del != null && !del.isEmpty()) ? del.trim() : null);
        iMap.put("isauthorized", (isauthorized != null && !isauthorized.isEmpty()) ? isauthorized.trim() : null);

        // 페이징 처리
        // 전체 페이지
        Paging p = new Paging(5, 3);
        p.setTotalRecord(service.searchForAdminPaging(iMap));

        if (cPage != null && !cPage.equals("0")) {
            p.setNowPage(Integer.parseInt(cPage));
        } else {
            p.setNowPage(1);
        }

        iMap.put("begin", String.valueOf(p.getBegin()));
        iMap.put("end", String.valueOf(p.getEnd()));
        userVO[] ar = service.searchForAdmin(iMap);
        Map<String, Object> map = new HashMap<>();
        map.put("ar", ar);
        map.put("page", p);
        return map;
    }

    @RequestMapping("/api/admin/userEdit")
    @ResponseBody
    public Map<String, Object> getUserInfoForAdmin(String userkey) {
        System.out.println("컨트롤러 타는지 확인");
        Map<String, Object> map = new HashMap<>();
        userVO vo = service.getUserForAdmin(userkey);
        map.put("ar", vo);
        return map;
    }

}