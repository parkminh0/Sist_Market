package com.sist.back.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sist.back.mapper.BoardMapper;
import com.sist.back.vo.BoardImgVO;
import com.sist.back.vo.BoardVO;
import com.sist.back.vo.KeyTableVO;

@Service
public class BoardService {

    @Autowired
    private BoardMapper b_mapper;

    public int getCount(String searchType, String searchValue, String categorykey){
        return b_mapper.count(searchType, searchValue, categorykey);
    }

    public BoardVO[] getList(String searchType, String searchValue, String categorykey, int begin, int end){
        BoardVO[] b_ar = null;

        List<BoardVO> b_list = b_mapper.b_list(searchType, searchValue, categorykey, begin, end);
        if(b_list != null && b_list.size() > 0){
            b_ar = new BoardVO[b_list.size()];
            b_list.toArray(b_ar);
        }
        return b_ar;
    }

    public int add(BoardVO bvo) {
        return b_mapper.add(bvo);
    }

    public int saveImg(BoardImgVO bivo) {
        return b_mapper.saveImg(bivo);
    }

	public BoardVO getBbs(String boardkey) {
		return b_mapper.getBbs(boardkey);
	}
	
	public int edit(BoardVO bvo) {
		return b_mapper.edit(bvo);
	}
	
	public int del(String boardkey) {
		return b_mapper.del(boardkey);
	}

    public int hit(String boardkey) {
		return b_mapper.hit(boardkey);
	}


    //게시판 카테고리
    public String selectBoardCategory(String key) {
        return b_mapper.selectBoardCategory(key);
    }

    public KeyTableVO[] getAllBcList() {
        List<KeyTableVO> bc_list = b_mapper.getAllBcList();
        KeyTableVO[] bc_ar = null;
        if (bc_list != null && !bc_list.isEmpty()) {
            bc_ar = new KeyTableVO[bc_list.size()];
            bc_list.toArray(bc_ar);
        }
        
        return bc_ar;
    }

    public KeyTableVO[] getBoardCategoryList() {
        List<KeyTableVO> bc_list = b_mapper.boardCategoryList();
        KeyTableVO[] bc_ar = null;
        if (bc_list != null && !bc_list.isEmpty()) {
            bc_ar = new KeyTableVO[bc_list.size()];
            bc_list.toArray(bc_ar);
        }
        return bc_ar;
    }

    public int addBoardCategory(String value) {
        return b_mapper.addBoardCategory(value);
    }

    public int editBoardCategory(KeyTableVO kvo) {
        return b_mapper.editBoardCategory(kvo);
    }

    public int delBoardCategory(String value) {
        return b_mapper.delBoardCategory(value);
    }

    public int countByBc(String categorykey) {
        return b_mapper.countByBc(categorykey);
    }
}
