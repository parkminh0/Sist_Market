package com.sist.back.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
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
    @RequestMapping("/api/usercount")
    @ResponseBody
    public Map<String, Object> getUserInfo() {
        Map<String, Object> map = new HashMap<>();
        UserCountVO ucvo = service.userForAdmin();
        map.put("ucvo", ucvo);
        return map;
    }

    // 관리자 유저 검색
    @RequestMapping("/api/search_user_admin")
    @ResponseBody
    public Map<String, Object> searchUserForAdmin(String search_type, String type, String regist_start_date,
            String regist_end_date, String isdeleted, String recent_login_start_date, String recent_login_end_date,
            String isauthorized, String cPage) {
        //System.out.println("@@@@@@@@@search_type="+search_type);
        //System.out.println("@@@@@@@@@type="+type);
        //System.out.println("@@@@@@@@@regist_start_date="+regist_start_date);
        //System.out.println("@@@@@@@@@isdeleted="+isdeleted);
        //System.out.println("@@@@@@@@@recent_login_start_date="+recent_login_start_date);
        //System.out.println("@@@@@@@@@recent_login_end_date="+recent_login_end_date);
        //System.out.println("@@@@@@@@@isauthorized="+isauthorized);
        //System.out.println("@@@@@@@@@cPage="+cPage);


        Map<String, String> iMap = new HashMap<>();
        
        if (type != null && type.length() != 0){
            iMap.put("search_type", search_type.trim());
            iMap.put("type", type.trim());
        }
        iMap.put("regist_start_date",regist_start_date.trim());
        iMap.put("regist_end_date",regist_end_date.trim());
        iMap.put("recent_login_start_date",recent_login_start_date.trim());
        iMap.put("recent_login_end_date",recent_login_end_date.trim());
        iMap.put("isdeleted", isdeleted.trim());
        iMap.put("isauthorized",isauthorized.trim());

        // 페이징 처리
        Paging p = new Paging(5, 3);
        // 전체 페이지
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
        map.put("totalPage", p.getTotalPage());
        map.put("totalRecords",p.getTotalRecord());
        return map;
    }

    //userAdmin 회원 정보 가져오기
    @RequestMapping("/api/admin/userEdit")
    @ResponseBody
    public Map<String, Object> getUserInfoForAdmin(String userkey) {
        Map<String, Object> map = new HashMap<>();
        userVO uvo = service.getUserForAdmin(userkey);
        map.put("ar", uvo);

        return map;
    }

    //userAdmin 회원 탈퇴
    @RequestMapping("/api/admin/userDel")
    @ResponseBody
    public Map<String, Object> userDel(String userkey) {
       
        Map<String, Object> map = new HashMap<>();
        int cnt = service.userDelForAdmin(userkey);
        if(cnt>0){
            String str = "success";
            map.put("str", str);
        }

        return map;
    }

    //userAdmin 회원 정보 수정
    @RequestMapping("/api/admin/userEditReal")
    @ResponseBody
    public Map<String, Object> userEdit(userVO vo) {
       
        Map<String, Object> map = new HashMap<>();
        int cnt = service.userEditForAdmin(vo);
        if(cnt>0){
            String str = "success";
            map.put("str", str);
        }
        return map;
    }

    //userAdmin 체크된회원 탈퇴
    @RequestMapping("/api/admin/checkUserDel")
    @ResponseBody
    public Map<String, Object> checkUserDel(@RequestBody List<String>userkeys) {
        
        Map<String, Object> map = new HashMap<>();
        int cnt;
        for(String userkey:userkeys){
            cnt = service.userDelForAdmin(userkey);
        }

        return map;
    }

    


}