package com.sist.back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sist.back.mapper.DealreviewMapper;
import com.sist.back.vo.PostVO;
import java.util.List;

@Service
public class DealreviewService {
    @Autowired
    private DealreviewMapper d_mapper;
    
    public PostVO[] dealReview(String userkey) {
        List<PostVO> d_list = d_mapper.dealReview(userkey);
        PostVO[] d_ar = null;
        if (d_list != null && d_list.size() > 0) {
            d_ar = new PostVO[d_list.size()];
            d_list.toArray(d_ar);
        }
        return d_ar;
    }
}
