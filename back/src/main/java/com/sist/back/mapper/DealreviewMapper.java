package com.sist.back.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.sist.back.vo.PostVO;

import java.util.List;

@Mapper
public interface DealreviewMapper {
        List<PostVO> buyingReview(String userkey);
}
