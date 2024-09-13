package com.sist.back.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.sist.back.vo.AddressVO;

@Mapper
public interface AddressMapper {

    public List<AddressVO> getAddressByUserkey(String userkey);
}
