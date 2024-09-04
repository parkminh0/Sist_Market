package com.sist.back.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.sist.back.vo.userVO;
import com.sist.back.vo.PostVO;
import com.sist.back.vo.UserCountVO;
import com.sist.back.vo.WishlistVO;

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

    // likelist
    int getWishlistCount(String userkey);
    int getInterestCategoryCount(String userkey);
    int getKeywordCount(String userkey);

    List<WishlistVO> getWishlistByMap(Map<String, Object> get_map);
    List<WishlistVO> getInterestCategoryByMap(Map<String, Object> get_map);
    List<WishlistVO> getKeywordByMap(Map<String, Object> get_map);

    // buylist
    int getBuyTotalCount(String userkey);
    int getBuyCount(Map<String, Object> get_map);
    List<PostVO> getBuylistByMap(Map<String, Object> get_map);

    // cellList
    int getCellTotalCount(String userkey);
    int getCellPartCount(String userkey, int poststatus);
    int getCellCount(Map<String, Object> get_map);
    List<PostVO> getCelllistByMap(Map<String, Object> get_map);

}