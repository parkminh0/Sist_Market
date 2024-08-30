package com.sist.back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sist.back.mapper.PostMapper;
import com.sist.back.vo.postVO;


@Service
public class PostService {
    
    @Autowired
    PostMapper mapper;

    public postVO[] all(){
        return mapper.all();
    }
}
