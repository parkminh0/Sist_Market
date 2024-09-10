package com.sist.back.controller;

import java.io.File;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;

import com.sist.back.service.BoardImgService;
import com.sist.back.service.BoardService;
import com.sist.back.util.FileRenameUtil;
import com.sist.back.util.Paging;
import com.sist.back.vo.BoardImgVO;
import com.sist.back.vo.BoardVO;
import com.sist.back.vo.KeyTableVO;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RequestMapping("/api/admin/board")
public class BoardController {
    
    @Value("${server.upload.admin.board.image}")
    private String upload;

    @Autowired
    private BoardService b_service;

    @Autowired
    private BoardImgService bi_service;

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

    // @RequestMapping("/add")
    // @ResponseBody
    // public Map<String, Object> boardAdd(String userkey, String title, String content, String categoryName, String boardkey) {
    //     Map<String, Object> addMap = new HashMap<>();
    //     addMap.put("userkey", userkey);
    //     addMap.put("title", title);
    //     addMap.put("content", content);
    //     addMap.put("categoryName", categoryName);

    //     //여기서 저장 후 다시 DB에서 가서 b_idx값을 받아오면 그 사이에 다른 글이 작성되었을 수 있으므로 bbs.xml에 속성을 추가해주자.
    //     int cnt = b_service.boardAdd(addMap);

    //     Map<String, Object> map = new HashMap<>();
    //     BoardVO bvo = new BoardVO();
    //     bvo.setUserkey(userkey);
    //     bvo.setTitle(title);
    //     bvo.setContent(content);
    //     bvo.setBoardkey(boardkey);

    //     List<String> list = new ArrayList<>();

    //     String regex = "<img[^>]+src=\"([^\"]+)\"";
    //     Pattern pattern = Pattern.compile(regex);
    //     Matcher matcher = pattern.matcher(bvo.getContent());
    //     while(matcher.find()){
    //         list.add(matcher.group(1));
    //     }
    //     bi_service.BoardImgDelete(list, bvo.getBoardkey());
    //     map.put("bvo", bvo);
    //     return map;
    // }
    
    // @RequestMapping("/addImage")
    // @ResponseBody
    // public Map<String, Object> add(MultipartFile file, HttpServletRequest request) {
    //     Map<String, Object> map = new HashMap<>();
    //     try{
    //         MultipartFile f = file;
    //         String fname = FileRenameUtil.checkSameFileName(f.getOriginalFilename(), upload);
    //         String webPath = "http://localhost:3000/img/admin/board/";
    //         String sendFname = java.net.URLEncoder.encode(fname, StandardCharsets.UTF_8.toString()).replace("+", "%20");
            
    //         StringBuffer sb = new StringBuffer();
    //         sb.append(upload); 
    //         sb.append("/");
    //         sb.append(fname);
    //         String imglocalPath = sb.toString();

    //         sb = new StringBuffer();
    //         sb.append(webPath);
    //         sb.append(sendFname);
    //         String imgWebPath = sb.toString();

    //         f.transferTo(new File(imglocalPath));

    //         map.put("chk",1);
    //         map.put("filePath",imgWebPath);
    //         bi_service.BoardImgSave("1",fname,imgWebPath);
    //     }catch(Exception e) {
    //         e.printStackTrace();
    //     }
    //     return map;
    // }


    @RequestMapping("/add")
    @ResponseBody
    public Map<String, Object> boardAdd(BoardVO bvo, String categoryname) {
        Map<String, Object> map = new HashMap<>();
        // 추후에 userkey, townkey 기입해줘야함
        bvo.setCategorykey("1");
        bvo.setTownkey("1");
        int chk = b_service.boardAdd(bvo);

        List<String> list = new ArrayList<>();

        String regex = "<img[^>]+src=\"([^\"]+)\"";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(bvo.getContent());
        while (matcher.find()) {
            list.add(matcher.group(1));
        }
        bi_service.BoardImgDelete(list, bvo.getBoardkey());
        map.put("chk", chk);
        return map;
    }

    @RequestMapping("/addImage")
    @ResponseBody
    public Map<String, Object> add(MultipartFile file, HttpServletRequest request,String boardkey) {
        Map<String, Object> map = new HashMap<>();
        try {
            MultipartFile f = file;
            String fname = FileRenameUtil.checkSameFileName(f.getOriginalFilename(), upload);
            String webPath = "http://localhost:3000/img/admin/board/";
            String sendFname = URLEncoder.encode(fname, StandardCharsets.UTF_8.toString()).replace("+", "%20");

            StringBuffer sb = new StringBuffer();
            sb.append(upload);
            sb.append("/");
            sb.append(fname);
            String imglocalPath = sb.toString();

            sb = new StringBuffer();
            sb.append(webPath);
            sb.append(sendFname);
            String imgWebPath = sb.toString();

            f.transferTo(new File(imglocalPath));

            map.put("chk", 1);
            map.put("filePath", imgWebPath);
            int chk = bi_service.BoardImgSave(boardkey, fname, imgWebPath);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return map;
    }

    @RequestMapping("")
    @ResponseBody
    public Map<String, Object> addEmpty(BoardVO bvo) {
        Map<String, Object> map = new HashMap<>();
        bvo.setTownkey("1");
        int boardkey = b_service.emptyAdd(bvo);
        map.put("boardkey", boardkey);
        map.put("chk", 1);
        return map;
    }
    
    @RequestMapping("/deleteLatest")
    @ResponseBody
    public Map<String, Object> deleteLatest(@RequestBody String userkey) {
        Map<String, Object> map = new HashMap<>();
        int chk = b_service.deleteLatest(userkey);
        map.put("chk", chk);
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

    // @RequestMapping("/edit")
    // @ResponseBody
    // public Map<String, Object> boardEdit(String boardkey) {
    //     Map<String, Object> map = new HashMap<>();
    //     // 추후에 userkey, townkey 기입해줘야함
    //     BoardVO[] ar = b_Service.boardEdit(boardkey);

    //     map.put("ar", ar);
    //     return map;
    // }

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
        int cnt = 0;
        for (String value : valueList) {
            int result1 = b_service.delBoardCategory1(value);
            int result2 = b_service.delBoardCategory2(value);
            if (result1 > 0 && result2 > 0) {
                cnt++;
            }
        }
        map.put("cnt", cnt);
        return map;
    }
    @RequestMapping("/userBbsList")
    @ResponseBody
    public Map<String, Object> userBbsList(String categorykey, String cPage) {
        Map<String, Object> map = new HashMap<>();

        int totalRecord = b_service.userBbsCount(categorykey);

        Paging p = new Paging(5, 3); // 페이징 객체 생성
        p.setTotalRecord(totalRecord);
        
        if (cPage != null) {
            p.setNowPage(Integer.parseInt(cPage));
        } else {
            p.setNowPage(1);
        }

        int nowPage = p.getNowPage();
        int begin = p.getBegin(); // 시작 레코드
        int numPerPage = p.getNumPerPage(); // 페이지당 게시물 수


        Map<String, Object> b_map = new HashMap<>();
        b_map.put("categorykey", categorykey);
        b_map.put("begin", begin);
        b_map.put("numPerPage", numPerPage);

        BoardVO[] ar = b_service.userBbsList(b_map);
        map.put("ar", ar);
        map.put("nowPage", nowPage);
        map.put("totalPage", p.getTotalPage());
        map.put("totalRecord", p.getTotalRecord());
        map.put("numPerPage", p.getNumPerPage());
        return map;
    }
}