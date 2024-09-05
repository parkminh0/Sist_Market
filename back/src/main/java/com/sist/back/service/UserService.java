package com.sist.back.service;

import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.io.File;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.sist.back.jwt.JwtProvider;
import com.sist.back.mapper.UserMapper;
import com.sist.back.vo.PostVO;
import com.sist.back.vo.UserCountVO;
import com.sist.back.vo.WishlistVO;
import com.sist.back.vo.userVO;

import jakarta.servlet.ServletContext;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    @Autowired
    UserMapper mapper;

        @Autowired
    private ServletContext context;

    //jwt provider
    private final JwtProvider jwtProvider;

    @Autowired
    private PasswordEncoder passwordEncoder;


    //jwt reg
    public userVO reg(userVO vo) {
        
            //패스워드가 일치하는지 확인 
            vo.setPw(passwordEncoder.encode(vo.getPw()));
            Map<String,Object> map = new HashMap();
            map.put("id", vo.getId());
            map.put("userkey", vo.getUserkey());
            map.put("pw", vo.getPw());
            map.put("name", vo.getName());
            map.put("phone", vo.getPhone());
            map.put("email", vo.getEmail());
            map.put("imgurl", vo.getImgurl());
            map.put("isauthorized", vo.getIsauthorized());
       
            String refreshToken = jwtProvider.genRefreshToken(map);
            vo.setRefresh_token(refreshToken);
            
            int cnt = mapper.saveUser(vo);
            if(cnt>0){
                return vo;
            }else{
                throw new RuntimeException("회원가입에 실패했습니다.");
            }
    }

    // jwt login 을 위한 인증
    public userVO authAndMakeToken(String id,String pw) {
        userVO uvo = null;
        try {
            uvo = mapper.findByid(id);
            if (uvo == null) {
            throw new RuntimeException("존재하지 않음");}
            //패스워드가 일치하는지 확인 
            if(passwordEncoder.matches(pw, uvo.getPw())){
            Map<String,Object> map = new HashMap();
            map.put("id", uvo.getId());
            map.put("userkey", uvo.getUserkey());
            map.put("pw", uvo.getPw());
            map.put("name", uvo.getName());
            map.put("phone", uvo.getPhone());
            map.put("email", uvo.getEmail());
            map.put("imgurl", uvo.getImgurl());
            map.put("isauthorized", uvo.getIsauthorized());

            String accessToken = jwtProvider.genAccessToken(map);
            uvo.setAccess_token(accessToken);
            String refreshToken = jwtProvider.genRefreshToken(map);
            uvo.setRefresh_token(refreshToken);
            }else{  //패스워드가 일치하지 않은 경우 
                uvo = null;  
            }
        } catch (Exception e) {
        }
        return uvo;
    }

    public int upt_login_dtm(userVO vo) {
        return mapper.upt_login_dtm(vo);
    }

    public UserCountVO userForAdmin() {

        return mapper.countForAdmin();
    }

    public int searchForAdminPaging(Map iMap) {

        return mapper.searchForAdminPaging(iMap);
    }

    public userVO[] searchForAdmin(Map iMap) {
        userVO[] ar = null;

        List<userVO> list = mapper.searchForAdmin(iMap);
        if (list != null && list.size() > 0) {
            ar = new userVO[list.size()];
            list.toArray(ar);
        }
        return ar;
    }

    public userVO getUserForAdmin(String userkey) {
        return mapper.getUserForAdmin(userkey);
    }
        

    public int userDelForAdmin(String userkey){
        return mapper.userDelForAdmin(userkey);
    }

    public int userEditForAdmin(userVO vo){
        return mapper.userEditForAdmin(vo);
    }

    public userVO findByemail(String email){
        return mapper.findbyEmail(email);
    }


    public int getLikeCount(String userkey, String likewhat){
        int likecount = 0;
        switch(likewhat){
            case "post":
                likecount = mapper.getWishlistCount(userkey);
                break;
            case "category":
                likecount = mapper.getInterestCategoryCount(userkey);
                break;
            case "keyword":
                likecount = mapper.getKeywordCount(userkey);
                break;
            }
        return likecount;
    }
    
    public List<WishlistVO> getLikeLists(Map<String, Object> get_map, String likewhat){
        List<WishlistVO> likelist = new ArrayList<>();
        switch(likewhat){
            case "post":
            likelist = mapper.getWishlistByMap(get_map);
            break;
            case "category":
            likelist = mapper.getInterestCategoryByMap(get_map);
            break;
            case "keyword":
            likelist = mapper.getKeywordByMap(get_map);
            break;
        }
        return likelist;
    }
    

    public int getBuyTotalCount(String userkey){
        int likecount = mapper.getBuyTotalCount(userkey);
        return likecount;
    }

    public int getBuyCount(Map<String, Object> get_map){
        int likecount = mapper.getBuyCount(get_map);
        return likecount;
    }

    public List<PostVO> getBuyList(Map<String, Object> get_map){
        List<PostVO> likelist = mapper.getBuylistByMap(get_map);
        return likelist;
    }

    public int getCellTotalCount(String userkey){
        int likecount = mapper.getCellTotalCount(userkey);
        return likecount;
    }
    public int getCell1TotalCount(String userkey){
        int likecount = mapper.getCellPartCount(userkey, 1);
        return likecount;
    }
    public int getCell2TotalCount(String userkey){
        int likecount = mapper.getCellPartCount(userkey, 2);
        return likecount;
    }
    public int getCell3TotalCount(String userkey){
        int likecount = mapper.getCellPartCount(userkey, 3);
        return likecount;
    }
    public int getCell4TotalCount(String userkey){
        int likecount = mapper.getCellPartCount(userkey, 4);
        return likecount;
    }
    public int getCellCount(Map<String, Object> get_map){
        int likecount = mapper.getCellCount(get_map);
        return likecount;
    }
    public List<PostVO> getCellList(Map<String, Object> get_map){
        List<PostVO> likelist = mapper.getCelllistByMap(get_map);
        return likelist;
    }




        
    //회원정보 수정
    public int editImage(userVO uvo) {
        return mapper.editImage(uvo);
    }

    public String saveImage(MultipartFile image) {
        String uploadDir = context.getRealPath("/public/img/user/");
        String fileName = image.getOriginalFilename();
        String filePath = uploadDir + "/" + fileName;

        File directory = new File(uploadDir);
        if (!directory.exists()) {
            directory.mkdirs();
        }
        try {
            File f = new File(filePath);
            image.transferTo(f);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "/img/user/" + fileName;
    }

    public int delImage(String userkey) {
        return mapper.delImage(userkey);
    }

    public int editNickname(userVO uvo) {
        return mapper.editNickname(uvo);
    }

    public int editEmail(userVO uvo) {
        return mapper.editEmail(uvo);
    }

    public int editPw(userVO uvo) {
        return mapper.editPw(uvo);
    }

    public int editPhone(userVO uvo) {
        return mapper.editPhone(uvo);
    }




}
