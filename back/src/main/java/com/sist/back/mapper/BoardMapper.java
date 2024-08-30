package com.sist.back.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;

import com.sist.back.vo.BoardImgVO;
import com.sist.back.vo.BoardVO;
import com.sist.back.vo.KeyTableVO;

@Mapper
public interface BoardMapper {
    int count(String searchType, String searchValue, String categorykey);

    List<BoardVO> b_list(String searchType, String searchValue, String categorykey, int begin, int end);

    int add(BoardVO bvo);

    int saveImg(BoardImgVO bivo);

    BoardVO getBbs(String boardkey);

    int edit(BoardVO bvo);

    int del(String boardkey);

    int hit(String boardkey);


    //게시판 카테고리
    String selectBoardCategory(String key);

    List<KeyTableVO> getAllBcList();

    List<KeyTableVO> boardCategoryList();

    int addBoardCategory(String value);

    int editBoardCategory(KeyTableVO kvo);

    int delBoardCategory(String value);

    int countByBc(String categorykey);
}