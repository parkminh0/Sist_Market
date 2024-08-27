package com.sist.back.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sist.back.mapper.UserMapper;
import com.sist.back.vo.UserCountVO;
import com.sist.back.vo.userVO;

@Service
public class UserService {
    @Autowired
    UserMapper mapper;

    public userVO login(userVO vo) {
        return mapper.login(vo);
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
