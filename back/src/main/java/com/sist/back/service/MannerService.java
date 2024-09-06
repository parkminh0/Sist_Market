package com.sist.back.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sist.back.mapper.MannerMapper;
import com.sist.back.vo.ReviewListVO;

@Service
public class MannerService {
    @Autowired
    private MannerMapper m_mapper;

    public ReviewListVO[] getManner(String userkey) {
        List<ReviewListVO> m_list = m_mapper.getManner(userkey);
        ReviewListVO[] m_ar = null;
        if (m_list != null && m_list.size() > 0) {
            m_ar = new ReviewListVO[m_list.size()];
            m_list.toArray(m_ar);
        }
        return m_ar;
    }

}
