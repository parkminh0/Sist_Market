package com.sist.back.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.sist.back.service.QnaImgService;
import com.sist.back.service.QnaService;
import com.sist.back.util.FileRenameUtil;
import com.sist.back.util.Paging;
import com.sist.back.vo.BoardVO;
import com.sist.back.vo.QnaVO;

import jakarta.servlet.http.HttpServletRequest;

import java.io.File;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
@RequestMapping("/qna")
public class QnaController {
    
    @Value("${server.upload.qna.image}")
    private String upload;

    @Autowired
    private QnaService q_service;

    @Autowired
    private QnaImgService qi_service;

    @Autowired
    private HttpServletRequest request;

    @RequestMapping("/empty")
    @ResponseBody
    public Map<String, Object> emptyAdd(QnaVO qvo) {
        Map<String, Object> map = new HashMap<>();
        int qnakey = q_service.emptyAdd(qvo);
        map.put("qnakey", qnakey);
        map.put("chk", 1);
        return map;
    }
    
    @RequestMapping("/question")
    @ResponseBody
    public Map<String, Object> question(QnaVO qvo) {
        Map<String, Object> map = new HashMap<>();
        int chk = q_service.question(qvo);

        List<String> list = new ArrayList<>();
        String regex = "<img[^>]+src=\"([^\"]+)\"";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(qvo.getContent());
        while (matcher.find()) {
            list.add(matcher.group(1));
        }
        qi_service.questionImgDelete(list, qvo.getQnakey());
        map.put("chk", chk);
        return map;
    }

    @RequestMapping("/addImage")
    @ResponseBody
    public Map<String, Object> addImage(MultipartFile file, HttpServletRequest request, String qnakey) {
        Map<String, Object> map = new HashMap<>();
        try {
            MultipartFile f = file;

            String fname = FileRenameUtil.checkSameFileName(f.getOriginalFilename(), upload);
            String webPath = "http://localhost:3000/img/qna/";
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

            int chk = qi_service.questionImgSave(qnakey, fname, imgWebPath);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return map;
    }

    @RequestMapping("/deleteLatest")
    @ResponseBody
    public Map<String, Object> deleteLatest(@RequestBody String userkey) {
        Map<String, Object> map = new HashMap<>();
        int chk = q_service.deleteLatest(userkey);
        map.put("chk", chk);
        return map;
    }
    
    @RequestMapping("/delete")
    @ResponseBody
    public Map<String, Object> delete(String qnakey) {
        Map<String, Object> map = new HashMap<>();
        map.put("cnt", q_service.delete(qnakey));
        return map;
    }
    
    @RequestMapping("/answer")
    @ResponseBody
    public Map<String, Object> answer(QnaVO qvo) {
        Map<String, Object> map = new HashMap<>();
 
        List<String> list = new ArrayList<>();
        String regex = "<img[^>]+src=\"([^\"]+)\"";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(qvo.getContent());
        while (matcher.find()) {
            list.add(matcher.group(1));
        }
        qi_service.questionImgDelete(list, qvo.getQnakey());

        int cnt = q_service.answer(qvo);
    
        if (qvo.getContent() != null) {
            matcher = pattern.matcher(qvo.getContent());
            List<String> newImgList = new ArrayList<>();
            while (matcher.find()) {
                String imgUrl = matcher.group(1);
                newImgList.add(imgUrl);
                String fname = imgUrl.substring(imgUrl.lastIndexOf("/") + 1);
                qi_service.questionImgSave(qvo.getQnakey(), fname, imgUrl);
            }
        }
        if (cnt > 0) {
            map.put("chk", 1);
        } else {
            map.put("chk", 0);
        }
        map.put("cnt", cnt);
        return map;
    }

    @RequestMapping("/all")
    @ResponseBody
    public Map<String, Object> all(String cPage) {
        Map<String, Object> b_map = new HashMap<>();
        
        int totalRecord = q_service.count();
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

        QnaVO[] q_ar = q_service.all(b_map);

        Map<String, Object> map = new HashMap<>();
        map.put("q_ar", q_ar);
        map.put("page", page);
        map.put("nowPage", nowPage);
        return map;
    }

    @RequestMapping("/getQuestion")
    @ResponseBody
    public Map<String, Object> getQuestion(@RequestParam String qnakey) {
        Map<String, Object> map = new HashMap<>();
        QnaVO qvo = q_service.getQuestion(qnakey);
        map.put("qvo", qvo);
        return map;
    }
}

