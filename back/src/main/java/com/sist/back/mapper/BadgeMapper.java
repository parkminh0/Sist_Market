package com.sist.back.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

import com.sist.back.vo.BadgeVO;

@Mapper
public interface BadgeMapper {
    List<BadgeVO> getAllBadge();

    List<BadgeVO> getBadge(String userkey);

    int representBadge(String userkey, String badgekey);

    int cancelRep(String userkey, String badgekey);
}
