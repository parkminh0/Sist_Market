package com.sist.back.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.sist.back.vo.TownVO;

@Mapper
public interface TownMapper {
    List<TownVO> all();

    TownVO searchKeyByRegion(TownVO tvo);

    int insertTown(TownVO vo);

    TownVO searchTownByKey(int key);

    List<String> searchTownByRegion(Map<String, Object> map);
}
