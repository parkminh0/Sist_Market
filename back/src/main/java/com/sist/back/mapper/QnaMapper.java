package com.sist.back.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.sist.back.vo.QnaVO;

@Mapper
public interface QnaMapper {
    int emptyAdd(QnaVO qvo);

    int question(QnaVO qvo);

    int deleteLatest(String userkey);

    int answer(QnaVO qvo);

    int delete(String qnakey);

    List<QnaVO> all(Map<String, Object> q_map);

    int count();

    QnaVO getQuestion(String qnakey);

}

