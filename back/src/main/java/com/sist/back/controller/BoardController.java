package com.sist.back.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import com.sist.back.service.BoardService;
import com.sist.back.util.FileRenameUtil;
import com.sist.back.util.Paging;
import com.sist.back.vo.BoardImgVO;
import com.sist.back.vo.BoardVO;
import com.sist.back.vo.KeyTableVO;

import jakarta.servlet.ServletContext;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.RequestMethod;



@RestController
@RequestMapping("/api/admin/board")
public class BoardController {
    
    @Autowired
    private BoardService b_service;

    @Autowired
    private ServletContext application;

    @Autowired
    private HttpServletRequest request;

    @Autowired
    private HttpServletResponse response;

    @Autowired
    private HttpSession session;

    @RequestMapping("/list")
    @ResponseBody
    public Map<String, Object> list(String categorykey, String cPage, String searchType, String searchValue) {
        Map<String, Object> map = new HashMap<>();

        int nowPage = 1;

        if (cPage != null) {
            nowPage = Integer.parseInt(cPage);
        }

        //전체 게시물의 수
        int totalRecord = b_service.getCount(searchType, searchValue, categorykey);

        //위에서 전체 게시물의 수를 얻었으니 페이징 기법에 사용하는 객체를 생성할 수 있다.
        Paging page = new Paging(nowPage, totalRecord, 7, 5, categorykey); //numPerPage와 pagePerBlock도 upload처럼 properties에 변수 선언하면 유지보수가 더 수월하다.

        nowPage = page.getNowPage();

        //페이징 기법에 HTML코드를 얻어내자.
        String pageCode = page.getSb().toString();

        //뷰페이지에서 표현할 목록 가져오기
        int begin = page.getBegin();
        int end = page.getEnd();
        BoardVO[] b_ar = b_service.getList(searchType, searchValue, categorykey, begin, end);

        map.put("b_ar", b_ar);
        map.put("categorykey", categorykey);
        map.put("nowPage", nowPage);
        map.put("totalPage", page.getTotalPage());
        map.put("numPerPage", page.getNumPerPage());
        map.put("totalRecord", page.getTotalRecord());

        return map;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/write")
    @ResponseBody
    public Map<String, Object> write(@RequestParam("s_files") MultipartFile[] s_files, BoardVO bvo) {
        Map<String, Object> map = new HashMap<>();

        //여기서 저장 후 다시 DB에서 가서 b_idx값을 받아오면 그 사이에 다른 글이 작성되었을 수 있으므로 bbs.xml에 속성을 추가해주자.
        int cnt = b_service.add(bvo); 

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

                        b_service.saveImg(bivo);
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

    // @RequestMapping("saveImg")
    // @ResponseBody
    // public Map<String, String> saveImg(MultipartFile s_file) { 
    //     //보내는 값이 문자열과 배열이 섞여 있으면 <String, Object>로 받지만 이번에는 경로만 보내면 되므로 <String, String>으로 받아도 된다.
        
    //     Map<String, String> map = new HashMap<String, String>();

    //     if (s_file.getSize() > 0) {
    //         //받은 파일을 저장할 editor_img를 절대경로화 시키자
    //         String realPath = application.getRealPath("/img/admin/board");

    //         //넘어온 파일명을 얻어내자
    //         String oname = s_file.getOriginalFilename();

    //         //이미 같은 이름의 파일이 있다면 파일명 변경하기
    //         String fname = FileRenameUtil.checkSameFileName(oname, realPath);
    //         try {
    //             s_file.transferTo(new File(realPath, fname)); //업로드
    //         } catch (Exception e) {
    //             e.printStackTrace();
    //         }
    //         //업로드된 파일의 경로를 반환하기 위해 현재 서버에 URL을 알아내자
    //         String url_path = request.getContextPath();

    //         //JSON으로 반환하기 위해 map구조에 저장하자
    //         map.put("url", url_path + "/img/admin/board/" +editor_img);
    //         map.put("fname", fname);
    //     }
    //     return map;
    // }

    @RequestMapping("/getBbs")
    @ResponseBody
    public Map<String, Object> getBbs(@RequestParam String boardkey) {
        Map<String, Object> map = new HashMap<>();
        BoardVO bvo = b_service.getBbs(boardkey);
        map.put("bvo", bvo);
        return map;
    }


    @RequestMapping("view")
    @ResponseBody
    public Map<String, Object> view(String boardkey, String categorykey, String cPage) {
        Map<String, Object> map = new HashMap<>();
		List<BoardVO> b_list = null;
		
		//세션에 r_list라는 이름으로 저장된 객체 얻기
		Object obj = session.getAttribute("r_list");
		
		if (obj != null) {
            b_list = (List<BoardVO>)obj;
		} else {
            b_list = new ArrayList<BoardVO>();
			session.setAttribute("r_list", b_list); //list의 주소가 r_list라는 이름으로 session에 저장
		}
		
        //사용자가 선택한 게시물의 기본 키를 b_list에서 인자로 받았으니 b_idx와 같은 값을 가진 BbsVO를 얻자. 
        BoardVO vo = b_service.getBbs(boardkey);
        
        //만약 있다면 hit를 증가하면 안된다. 이미 읽었던 게시물인지 확인
		boolean chk = false;
		for (BoardVO bvo : b_list) {
			if (bvo.getBoardkey().equals(boardkey)) {
				chk = true;
				break;
			}
		}

        //chk가 false를 유지한다면 한 번도 읽지 않은 게시물이므로 hit수를 증가
		if (!chk) {
            //화면에 즉각적으로 반영하기 위해 먼저 hit값을 얻어내어 다시 vo에 저장해 둬야 한다.
            int hit = Integer.parseInt(vo.getViewqty());
            vo.setViewqty(String.valueOf(hit+1));

            //DB에서 hit수 증가
			b_service.hit(vo.getBoardkey());

            //vo를 list에 저장
            b_list.add(vo);
		}
        map.put("vo", vo);	
		
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




    //게시판 카테고리
    @RequestMapping("/selectBc")
    @ResponseBody
    public Map<String, Object> selectBc(String key) {
        String category = b_service.selectBoardCategory(key);

        Map<String, Object> map = new HashMap<>();
        map.put("category", category);
        return map; //category='공지사항'으로 넘어온다
    }

    @ResponseBody
    @RequestMapping("/getAllBc")
    public Map<String, Object> getAllBc() {
        Map<String, Object> map = new HashMap<>();
        KeyTableVO[] bc_list = b_service.getAllBcList();
        map.put("bc_list", bc_list);
        return map;
    }
    
    @RequestMapping("/getBc")
    @ResponseBody
    public Map<String, Object> getBc(String categorykey) {
        Map<String, Object> map = new HashMap<>();
        KeyTableVO[] bc_list = b_service.getBoardCategoryList();

        for (KeyTableVO category : bc_list) {
            int count = b_service.countByBc(category.getKey());
            category.setCount(count);  // KeyTableVO에 count 필드를 추가해야 함
        }
        map.put("bc_list", bc_list);
        return map; //bc_list.key, value로 넘어온다
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