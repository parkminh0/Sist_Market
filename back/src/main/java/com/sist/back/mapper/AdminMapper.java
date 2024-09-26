package com.sist.back.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.sist.back.vo.admin.TotalVO;

@Mapper
public interface AdminMapper {
    TotalVO getTotal();
}
