package com.sist.back.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.sist.back.service.BoardService;
import com.sist.back.util.FileRenameUtil;
import com.sist.back.util.Paging;
import com.sist.back.vo.BoardImgVO;
import com.sist.back.vo.BoardVO;
import com.sist.back.vo.KeyTableVO;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RequestMapping("/api/admin/board")
public class BoardController {
    
    @Autowired
    private BoardService b_service;

    @Autowired
    private HttpServletRequest request;

    @Autowired
    private HttpSession session;

    @RequestMapping("/list")
    @ResponseBody
    public Map<String, Object> list(String title, String categoryName, String create_start_date, String create_end_date, String cPage) {
        Map<String, Object> b_map = new HashMap<>();
        b_map.put("title", title);
        b_map.put("categoryName", categoryName);
        b_map.put("create_start_date", create_start_date);
        b_map.put("create_end_date", create_end_date);

        int totalRecord = b_service.count(b_map);

        Paging page = new Paging(5, 3);
        page.setTotalRecord(totalRecord);

        int nowPage = 1;
        if (cPage != null) {
            page.setNowPage(Integer.parseInt(cPage));
        } else {
            page.setNowPage(1);
        }
        nowPage = page.getNowPage();

        int begin = page.getBegin();
        int end = page.getEnd();
        b_map.put("begin", begin);
        b_map.put("end", end);
        BoardVO[] b_ar = b_service.search(b_map);

        Map<String, Object> map = new HashMap<>();
        map.put("b_ar", b_ar);
        map.put("page", page);
        map.put("totalPage", page.getTotalPage());
        map.put("totalRecord", page.getTotalRecord());
        map.put("nowPage", nowPage);
        map.put("numPerPage", page.getNumPerPage());

        return map;
    }

    @RequestMapping("/add")
    @ResponseBody
    public Map<String, Object> add(String userkey, String title, String content,String categoryName, String boardkey, MultipartFile[] s_files) {
        Map<String, Object> addMap = new HashMap<>();
        addMap.put("userkey", userkey);
        addMap.put("title", title);
        addMap.put("content", content);
        addMap.put("categoryName", categoryName);

        //여기서 저장 후 다시 DB에서 가서 b_idx값을 받아오면 그 사이에 다른 글이 작성되었을 수 있으므로 bbs.xml에 속성을 추가해주자.
        int cnt = b_service.add(addMap); 

        Map<String, Object> map = new HashMap<>();
        BoardVO bvo = new BoardVO();
        bvo.setUserkey(userkey);
        bvo.setTitle(title);
        bvo.setContent(content);
        
        // 게시글이 성공적으로 저장된 경우에만 이미지 저장을 시도
        if (cnt == 1 && s_files != null && s_files.length > 0) {
            //현재 작업하고 있는 경로 받고 back 지워주고 front부터 경로 붙이기
            String rootPath = System.getProperty("user.dir").replace("\\back", "");
            String realPath = rootPath + "/front/public/img/admin/board";

            for (MultipartFile s_file : s_files) {
                if (!s_file.isEmpty()) {
                    // 파일 이름 생성 및 변경
                    String oname = s_file.getOriginalFilename();
                    String fname = FileRenameUtil.checkSameFileName(oname, realPath);

                    try {
                        s_file.transferTo(new File(realPath, fname));
                        String url_path = request.getContextPath() + "/img/admin/board/" + fname;

                        BoardImgVO bivo = new BoardImgVO();
                        bivo.setBoardkey(bvo.getBoardkey());
                        bivo.setImgurl(url_path);

                        b_service.addImage(bivo);
                        map.put("bivo", bivo);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            }
        }
        map.put("cnt", cnt); //next의 then에서 res.data.cnt로 찍어주고 '저장완료' 표시해주는 것도 괜찮
        map.put("bvo", bvo);
        
        return map;
    }
    
    @RequestMapping("/getBbs")
    @ResponseBody
    public Map<String, Object> getBbs(@RequestParam String boardkey) {
        Map<String, Object> map = new HashMap<>();
        BoardVO bvo = b_service.getBbs(boardkey);
        map.put("bvo", bvo);
        return map;
    }

    @RequestMapping("/edit")
    @ResponseBody
	public Map<String, Object> edit(BoardVO vo, String cPage) {
		Map<String, Object> map = new HashMap<>();
        map.put("cnt", b_service.edit(vo));
        return map;
	}

    @RequestMapping("del")
    @ResponseBody
	public Map<String, Object> del(String boardkey) {
        Map<String, Object> map = new HashMap<>();
        map.put("cnt", b_service.del(boardkey));
		return map;
	}

    @RequestMapping("/chkDel")
    @ResponseBody
    public Map<String, Object> chkDel(@RequestBody List<String> boardkeyList) {
        Map<String, Object> map = new HashMap<>();
        for (String boardkey : boardkeyList) {
            b_service.del(boardkey);
        }
        map.put("cnt", boardkeyList.size());
        return map;
    }


    //게시판 카테고리 관리
    @ResponseBody
    @RequestMapping("/getAllBc")
    public Map<String, Object> getAllBc() {
        Map<String, Object> map = new HashMap<>();
        KeyTableVO[] bc_list = b_service.getAllBcList();
        map.put("bc_list", bc_list);
        return map;
    }
    
    @RequestMapping("/addBc")
    @ResponseBody
    public Map<String, Object> addBc(String value) {
        Map<String, Object> map = new HashMap<>();
        map.put("value", b_service.addBoardCategory(value));
        return map;
    }

    @RequestMapping("/editBc")
    @ResponseBody
    public Map<String, Object> editBc(KeyTableVO kvo) {
        Map<String, Object> map = new HashMap<>();
        map.put("cnt", b_service.editBoardCategory(kvo));
        return map;
    }

    @RequestMapping("/chkDelBc")
    @ResponseBody
    public Map<String, Object> chkDelBc(@RequestBody List<String> valueList) {
        Map<String, Object> map = new HashMap<>();
        for (String value : valueList) {
            b_service.delBoardCategory(value);
        }
        map.put("cnt", valueList.size());
        return map;
    }

}