package com.sist.back.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sist.back.mapper.AddressMapper;
import com.sist.back.vo.AddressVO;

@Service
public class AddressService {

    @Autowired
    AddressMapper addressMapper;

    // userkey로 Address 목록 가져오기
    public AddressVO[] getAddressByUserkey(String userkey) {
        AddressVO[] ar = null;
        List<AddressVO> list = addressMapper.getAddressByUserkey(userkey);
        if (list != null && list.size() > 0) {
            ar = new AddressVO[list.size()];
            list.toArray(ar);
        }

        return ar;
    }
}
