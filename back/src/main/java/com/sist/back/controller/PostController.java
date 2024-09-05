package com.sist.back.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sist.back.service.PostService;
import com.sist.back.vo.PostVO;
import com.sist.back.vo.userVO;

import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/adpost")
public class PostController {

    @Autowired
    PostService p_service;

    @RequestMapping("/all")
    public Map<String, Object> all() {
        Map<String, Object> res = new HashMap<>();
        res.put("post_list", p_service.all());
        return res;
    }

    // POST 요청을 처리하기 위해 @PostMapping 사용
    @PostMapping("/searchpost")
    public Map<String, Object> searchpost(@RequestBody Map<String, Object> searchParams) {
        // 요청 파라미터 확인 (디버깅용)
        System.out.println("Received search parameters: " + searchParams);

        // 결과를 담을 Map 객체 생성
        Map<String, Object> res = new HashMap<>();
        res.put("post_list", p_service.searchpost(searchParams));
        // 결과를 JSON 형태로 반환
        return res;
    }

    @RequestMapping("/detail")
    public Map<String, Object> findById(int postkey) {
        Map<String, Object> e_map = new HashMap<>();
        e_map.put("pvo", p_service.getPostByPostKey(postkey));
        e_map.put("tvo", p_service.getTownByPostKey(postkey));
        e_map.put("o_list", p_service.getOfferByPostKey(postkey));
        e_map.put("cr_list", p_service.getChatroomByPostKey(postkey));
        e_map.put("ur_list", p_service.getUserReviewByPostKey(postkey));
        return e_map;
    }

    @RequestMapping("/remind")
    @ResponseBody
    public Map<String, Object> remind(String postkey) {
        Map<String, Object> map = new HashMap<>();

        int rst_ins = p_service.remindInsert(postkey);
        int rst_udt = p_service.remindUpdate(postkey);
        map.put("result_insert", rst_ins);
        map.put("result_update", rst_udt);

        return map;
    }

    // 사용자 - 중고거래 글 올리기
    @PostMapping("/write")
    public Map<String, Object> write(@ModelAttribute PostVO vo, List<MultipartFile> post_img) {

        // userkey
        // townkey
        System.out.println("카테고리:" + vo.getCategorykey());
        System.out.println("제목:" + vo.getTitle());
        System.out.println("메소드:" + vo.getMethod());
        System.out.println("가격:" + vo.getPrice());
        // lastprice 변동 후 가격 = 가격
        vo.setLastprice(vo.getPrice());
        System.out.println("내용:" + vo.getContent());
        // range
        // hope_place
        // hope_lati
        // hope_long
        // canbargain 체크박스가 on/off로만 나와서 직접 0, 1로 넣어줌
        if (vo.getCanbargain().equals("on")) {
            vo.setCanbargain("1");
        } else {
            vo.setCanbargain("0");
        }
        System.out.println("바겐:" + vo.getCanbargain());
        // viewqty
        // create_dtm
        // update_dtm
        // delete_dtm
        // remind_dtm
        // dealuserkey

        // 파일 데이터 처리
        if (post_img != null) {
            for (MultipartFile file : post_img) {
                System.out.println("Uploaded file name: " + file.getOriginalFilename());
            }
        }

        Map<String, Object> res = new HashMap<>();
        res.put("savePostKey", p_service.writePost(vo));
        return res;
    }

    // 사용자 - 중고거래 글 수정하기
    @PostMapping("/edit")
    public Map<String, Object> edit(@ModelAttribute PostVO vo, List<MultipartFile> post_img) {

        // userkey
        // townkey
        System.out.println("카테고리:" + vo.getCategorykey());
        System.out.println("제목:" + vo.getTitle());
        System.out.println("메소드:" + vo.getMethod());
        System.out.println("가격:" + vo.getPrice());
        // lastprice 변동 후 가격 = 가격
        vo.setLastprice(vo.getPrice());
        System.out.println("내용:" + vo.getContent());
        // range
        // hope_place
        // hope_lati
        // hope_long
        // canbargain 체크박스가 on/off로만 나와서 직접 0, 1로 넣어줌
        if (vo.getCanbargain().equals("on")) {
            vo.setCanbargain("1");
        } else {
            vo.setCanbargain("0");
        }
        System.out.println("바겐:" + vo.getCanbargain());
        // viewqty
        // create_dtm
        // update_dtm
        // delete_dtm
        // remind_dtm
        // dealuserkey

        // 파일 데이터 처리
        if (post_img != null) {
            for (MultipartFile file : post_img) {
                System.out.println("Uploaded file name: " + file.getOriginalFilename());
            }
        }

        Map<String, Object> res = new HashMap<>();
        p_service.editPost(vo);
        res.put("savePostKey", vo.getPostkey());
        return res;
    }

    // 사용자 - 중고거래 글 목록
    @GetMapping("/search")
    public Map<String, Object> search(String sort, String category, String minPrice, String maxPrice) {

        Map<String, Object> res = new HashMap<>();
        res.put("res_search", p_service.search(sort, category, minPrice, maxPrice));
        return res;
    }

}