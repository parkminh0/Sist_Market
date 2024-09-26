package com.sist.back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sist.back.mapper.AdminMapper;
import com.sist.back.vo.admin.TotalVO;

@Service
public class AdminService {

    @Autowired
    AdminMapper adminMapper;

    public TotalVO getTotal() {
        return adminMapper.getTotal();
    }
}
