package com.sist.back.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sist.back.mapper.UserMapper;
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
}
