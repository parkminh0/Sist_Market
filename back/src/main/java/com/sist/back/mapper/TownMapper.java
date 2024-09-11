package com.sist.back.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.sist.back.vo.TownVO;

@Mapper
public interface TownMapper {
    List<TownVO> all();

    TownVO searchKeyByRegion(TownVO tvo);

    int insertTown(TownVO vo);

    TownVO searchTownByKey(int key);
}
