package com.sist.back.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.sist.back.vo.BoardVO;
import com.sist.back.vo.KeyTableVO;

@Mapper
public interface BoardMapper {
    int count(Map<String, Object> b_map);

    List<BoardVO> search(Map<String, Object> b_map);

    int boardAdd(BoardVO bvo);

    List<BoardVO> edit(String boardkey);

    int emptyAdd(BoardVO bvo);

    int deleteLatest(String userkey);

    BoardVO getBbs(String boardkey);

    // int edit(BoardVO bvo);

    int del(String boardkey);

    int hit(String boardkey);

    // 게시판 카테고리
    List<KeyTableVO> getAllBcList();

    int addBoardCategory(String value);

    int editBoardCategory(KeyTableVO kvo);

    int delBoardCategory1(String value);

    int delBoardCategory2(String value);
}