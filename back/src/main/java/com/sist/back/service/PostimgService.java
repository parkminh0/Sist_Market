package com.sist.back.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sist.back.mapper.PostimgMapper;
import com.sist.back.vo.postimgVO;

@Service
public class PostimgService {

    @Autowired
    PostimgMapper mapper;


    public postimgVO[] all(){
        return mapper.all();
    }
    
}
