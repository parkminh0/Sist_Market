package com.sist.back.service;

import java.util.List;
import java.util.Map;

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

    public int count(Map b_map){
        return b_mapper.count(b_map);
    }

    public BoardVO[] search(Map b_map){
        List<BoardVO> b_list = b_mapper.search(b_map);

        if (b_list != null && !b_list.isEmpty()) {
            BoardVO[] b_ar = new BoardVO[b_list.size()];
            b_list.toArray(b_ar);
            return b_ar;
        }
        return new BoardVO[0];
    }
    
    public int boardAdd(Map addMap) {
        return b_mapper.boardAdd(addMap);
    }

    
    // public BoardVO[] boardEdit(String boardkey){
    //     List<BoardVO> list = mapper.boardedit(boardkey);
    //     BoardVO[] ar = null;
    //     if(list != null & list.size() > 0){
    //         ar = new BoardVO[list.size()];
    //         list.toArray(ar);
    //     }
    //     return ar;
    // }


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
    public KeyTableVO[] getAllBcList() {
        List<KeyTableVO> bc_list = b_mapper.getAllBcList();
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

    public int delBoardCategory1(String value) {
        return b_mapper.delBoardCategory1(value);
    }

    public int delBoardCategory2(String value) {
        return b_mapper.delBoardCategory2(value);
    }
}
