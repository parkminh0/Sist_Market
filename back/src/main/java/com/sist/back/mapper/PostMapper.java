package com.sist.back.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.sist.back.vo.postVO;

@Mapper
public interface PostMapper {
    
    postVO[] all();
}