package com.sist.back.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sist.back.mapper.TownMapper;
import com.sist.back.vo.TownVO;

@Service
public class TownService {

    @Autowired
    TownMapper townMapper;

    public TownVO[] all() {
        TownVO[] ar = null;
        List<TownVO> list = townMapper.all();
        if (list != null && list.size() > 0) {
            ar = new TownVO[list.size()];
            list.toArray(ar);
        }
        return ar;
    }

    public TownVO searchKeyByRegion(TownVO tvo) {
        return townMapper.searchKeyByRegion(tvo);
    }

    public int insertTown(TownVO tvo) {
        townMapper.insertTown(tvo);
        return Integer.parseInt(tvo.getTownkey());
    }

    public TownVO searchTownByKey(int key) {
        return townMapper.searchTownByKey(key);
    }

    public String[] searchTownByRegion(Map<String, Object> map) {
        String[] ar = null;
        List<String> list = townMapper.searchTownByRegion(map);
        if (list != null && list.size() > 0) {
            ar = new String[list.size()];
            list.toArray(ar);
        }
        return ar;
    }
}
