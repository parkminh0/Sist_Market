package com.sist.back.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.sist.back.vo.postimgVO;

@Mapper
public interface PostimgMapper {
    
    postimgVO[] all();
}