package com.sist.back.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.sist.back.vo.userVO;

@Mapper
public interface UserMapper {

    userVO login(userVO vo);

    int upt_login_dtm(userVO vo);

}