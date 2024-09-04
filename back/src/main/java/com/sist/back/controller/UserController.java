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
import com.sist.back.vo.PostVO;
import com.sist.back.vo.UserCountVO;
import com.sist.back.vo.WishlistVO;
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

    @RequestMapping("/api/getUser")
    @ResponseBody
    public Map<String, Object> getUser(String userkey) {
        Map<String, Object> map = new HashMap<>();
        userVO uvo = service.getUserForAdmin(userkey);
        map.put("uvo", uvo);
        return map;
    }

    //jwt token login 
    @PostMapping("/api/login")
    @ResponseBody
     public Map<String, Object> login(userVO vo, HttpServletResponse res) {


    //계정관리 user정보

    
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

    // 사용자 관심목록
    @RequestMapping("/api/likeLists")
    @ResponseBody
    public Map<String, Object> getLikeList(String userkey, String likewhat, String cPage) {
        Map<String, Object> l_map = new HashMap<>();
        // Paging
        Paging page = new Paging(3, 3);
        int totalRecord = service.getLikeCount(userkey, likewhat);
        l_map.put("totalCount", totalRecord);
        page.setTotalRecord(totalRecord);
        int nowPage = 1;
        if (cPage != null) {
            nowPage = Integer.parseInt(cPage);
        } else {
        }
        page.setNowPage(nowPage);
        
        
        int begin = page.getBegin();
        int end = page.getEnd();
        
        l_map.put("page", page);
        
        Map<String, Object> get_map = new HashMap<>();
        get_map.put("userkey", userkey);
        get_map.put("begin", begin);
        get_map.put("end", end);

        List<WishlistVO> likeList = service.getLikeLists(get_map, likewhat);
        l_map.put("likeList", likeList);
        return l_map;
    }

    // 사용자 구매목록
    @RequestMapping("/api/buyList")
    @ResponseBody
    public Map<String, Object> getBuyList(String userkey, String cPage, String start_date, String end_date) {
        Map<String, Object> bl_map = new HashMap<>();
        Map<String, Object> get_map = new HashMap<>();
        // Paging
        Paging page = new Paging(3, 3);
        get_map.put("userkey", userkey);
        int totalCount = service.getBuyTotalCount(userkey);
        get_map.put("start_date", start_date);
        get_map.put("end_date", end_date);
        int totalRecord = service.getBuyCount(get_map);
        bl_map.put("totalCount", totalCount);
        bl_map.put("totalRecord", totalRecord);
        page.setTotalRecord(totalRecord);
        int nowPage = 1;
        if (cPage != null) {
            nowPage = Integer.parseInt(cPage);
        } else {
        }
        page.setNowPage(nowPage);
        
        
        int begin = page.getBegin();
        int end = page.getEnd();
        
        
        
        bl_map.put("page", page);
        
        get_map.put("begin", begin);
        get_map.put("end", end);
        
        List<PostVO> buyList = service.getBuyList(get_map);
        bl_map.put("buylist", buyList);
        return bl_map;
    }


    // 사용자 판매목록
    @RequestMapping("/api/cellList")
    @ResponseBody
    public Map<String, Object> getCellList(String userkey, String cPage, String poststatus, String start_date, String end_date) {
        Map<String, Object> bl_map = new HashMap<>();
        Map<String, Object> get_map = new HashMap<>();
        // Paging
        Paging page = new Paging(3, 3);
        get_map.put("userkey", userkey);

        int totalCount = service.getCellTotalCount(userkey);
        int cell1Count = service.getCell1TotalCount(userkey);
        int cell2Count = service.getCell2TotalCount(userkey);
        int cell3Count = service.getCell3TotalCount(userkey);
        int cell4Count = service.getCell4TotalCount(userkey);
        bl_map.put("totalCount", totalCount);
        bl_map.put("cell1Count", cell1Count);
        bl_map.put("cell2Count", cell2Count);
        bl_map.put("cell3Count", cell3Count);
        bl_map.put("cell4Count", cell4Count);

        get_map.put("poststatus", poststatus);
        get_map.put("start_date", start_date);
        get_map.put("end_date", end_date);

        int totalRecord = service.getCellCount(get_map);

        bl_map.put("totalRecord", totalRecord);

        page.setTotalRecord(totalRecord);
        int nowPage = 1;
        if (cPage != null) {
            nowPage = Integer.parseInt(cPage);
        } else {
        }
        page.setNowPage(nowPage);
        
        
        int begin = page.getBegin();
        int end = page.getEnd();
        
        
        bl_map.put("page", page);
        
        get_map.put("begin", begin);
        get_map.put("end", end);
        
        List<PostVO> cellList = service.getCellList(get_map);
        bl_map.put("celllist", cellList);
        return bl_map;
    }

    

}