package com.sist.back.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.sist.back.jwt.JwtProvider;
import com.sist.back.mapper.UserMapper;
import com.sist.back.vo.UserCountVO;
import com.sist.back.vo.userVO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    @Autowired
    UserMapper mapper;

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



}
