package com.sist.back.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.sist.back.service.UserService;
import com.sist.back.util.Paging;
import com.sist.back.vo.UserCountVO;
import com.sist.back.vo.userVO;

import jakarta.servlet.ServletContext;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    ServletContext application;

    @Autowired
    HttpSession session;

    @Autowired
    UserService service;
    

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
        map.put("totalRecord",p.getTotalRecord());
        map.put("numPerPage", p.getNumPerPage());
      
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


    //jwt token login 
    @PostMapping("/api/login")
    @ResponseBody
     public Map<String, Object> login(userVO vo, HttpServletResponse res) {


    //계정관리 user정보
    @RequestMapping("/api/getUser")
    @ResponseBody
    public Map<String, Object> getUser(String userkey) {
        Map<String, Object> map = new HashMap<>();
        userVO uvo = service.getUserForAdmin(userkey);
        map.put("uvo", uvo);
        return map;
    }

    
    Map<String, Object> map = new HashMap<>();
    int cnt = 0;  //아무 작업도 못했어 0 한번했어 1 
    String msg = "로그인에 실패하였습니다.";

    userVO uvo = null;
    if (vo.getId() != null) {
      
      uvo = service.authAndMakeToken(vo.getId(),vo.getPw());
      
      if(uvo !=null){ 
        ResponseCookie cookie = ResponseCookie
            .from("accessToken",uvo.getAccess_token())
            .path("/")
            .sameSite("None")
            .httpOnly(false)
            .secure(true)
            .build();
            res.addHeader("Set-Cookie", cookie.toString());
        cookie = ResponseCookie.from("refreshToken",uvo.getRefresh_token())
            .path("/")
            .sameSite("None")
            .httpOnly(false)
            .secure(true)
            .build();
            res.addHeader("Set-Cookie", cookie.toString());
            //map.put("mvo",m);
            cnt =1; 
            msg="success";
    }
    }
    map.put("cnt", cnt); 
    map.put("msg", msg);
    map.put("uvo", uvo);
    return map;
  }

  //jwt token logout
  @PostMapping("/api/logout")
  @ResponseBody
  public Map<String, Object> logout(HttpServletResponse res) {
      
      Map <String, Object> map = new HashMap<>();
      //쿠키에서 accessToken과 refreshToken을 삭제하여 클라이언트에게 보내야한다. 
      ResponseCookie cookie = ResponseCookie.from("accessToken",null)
      .path("/")
      .sameSite("None")
      .secure(true)
      .httpOnly(true)
      .maxAge(0)
      .build();
      res.addHeader("Set-Cookie", cookie.toString());

      cookie = ResponseCookie.from("refreshToken",null)
      .path("/")
      .sameSite("None")
      .secure(true)
      .httpOnly(true)
      .maxAge(0)
      .build();
      res.addHeader("Set-Cookie", cookie.toString());
    
    
      map.put("msg", "로그아웃");
      map.put("totalCount", 0);
      
      return map;
  }

  @PostMapping("/api/reg")
  @ResponseBody
  public Map<String, Object> reg(userVO vo) {
    Map<String, Object> map = new HashMap<>();

    if (vo.getId() != null) {
      // 사용자가 입력한 비밀번호를 암호화 시킨다.
      // String pw = passwordEncoder.encode(member.getMPw());
     
      userVO uvo = service.reg(vo);
      map.put("uvo", uvo);
    }
    return map;
}


}