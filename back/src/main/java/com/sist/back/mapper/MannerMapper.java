package com.sist.back.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

import com.sist.back.vo.ReviewListVO;

@Mapper
public interface MannerMapper {
    List<ReviewListVO> getManner(String userkey);

}