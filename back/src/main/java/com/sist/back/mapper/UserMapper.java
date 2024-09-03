package com.sist.back.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.sist.back.vo.userVO;
import com.sist.back.vo.UserCountVO;

@Mapper
public interface UserMapper {

    userVO login(userVO vo);

    int upt_login_dtm(userVO vo);

    UserCountVO countForAdmin();

    int searchForAdminPaging(Map iMap);

    List<userVO> searchForAdmin(Map iMap);

    userVO getUserForAdmin(String userkey);

    int userDelForAdmin(String userkey);

    int userEditForAdmin(userVO vo);

    userVO findByid(String id);

    int saveUser(userVO vo);

}