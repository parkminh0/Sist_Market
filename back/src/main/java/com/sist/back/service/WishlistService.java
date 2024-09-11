package com.sist.back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

import com.sist.back.mapper.WishlistMapper;

@Service
public class WishlistService {

    @Autowired
    WishlistMapper w_mapper;

    public int isLike(Map<String, Object> w_map) {
        return w_mapper.isLike(w_map);
    }

}