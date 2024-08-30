package com.sist.back.controller;

import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sist.back.service.CategoryEditService;
import com.sist.back.service.CategoryService;
import com.sist.back.vo.categoryVO;

import jakarta.servlet.ServletContext;
import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/admin/category")
public class CategoryEditController {

    @Autowired
    private HttpServletRequest request;

    @Autowired
    private ServletContext application;

    @Value("${server.upload.category.image}")
    private String upload;

    @Autowired
    CategoryService c_Service;

    @Autowired
    CategoryEditService ce_Service;
<<<<<<< HEAD
    
=======

>>>>>>> 45a02f36d05c53afdbd7c6701864f34c9b3cf576
    @RequestMapping("/deleted")
    @ResponseBody
    public Map<String, Object> deletedAll() {

        Map<String, Object> res = new HashMap<>();
        res.put("category_list", ce_Service.deletedAll());
        return res;
    }

    @RequestMapping("/list")
    @ResponseBody
    public Map<String, Object> all() {

        Map<String, Object> res = new HashMap<>();
        res.put("category_list", c_Service.all());
        return res;
    }
<<<<<<< HEAD
    
    @RequestMapping("/add")
    @ResponseBody
    public Map<String,Object> addCategory(categoryVO cvo) {
        Map<String,Object> map = new HashMap<>();
=======

    @RequestMapping("/add")
    @ResponseBody
    public Map<String, Object> addCategory(categoryVO cvo) {
        Map<String, Object> map = new HashMap<>();
>>>>>>> 45a02f36d05c53afdbd7c6701864f34c9b3cf576
        int cnt = 0;
        try {
            // 파일이 첨부된 상태인지 확인
            MultipartFile f = cvo.getFile();
            if (f != null && !f.isEmpty()) {
                String fname = f.getOriginalFilename();
                Path path = Paths.get(upload);
<<<<<<< HEAD
                if(path.toString().contains("back")){
                    String pathString = path.toString();
                    String changedPath = pathString.replace("back\\", "");
                    path = Paths.get(changedPath);
                }
=======
>>>>>>> 45a02f36d05c53afdbd7c6701864f34c9b3cf576
                String realPath = "/img/admin/category/";
                String filePath = path.resolve(fname).toString();
                cvo.setImg_url(realPath + fname);
                // 파일 업로드
                f.transferTo(new File(filePath));
                cnt = ce_Service.addCategory(cvo);
            } else {
                cnt = ce_Service.addCategoryDefault(cvo);
            }
            map.put("cnt", cnt);
        } catch (Exception e) {
            e.printStackTrace();
        }
<<<<<<< HEAD
    
=======

>>>>>>> 45a02f36d05c53afdbd7c6701864f34c9b3cf576
        return map;
    }

    @RequestMapping("/edit")
    @ResponseBody
<<<<<<< HEAD
    public Map<String,Object> editCategory(categoryVO cvo) {
        Map<String,Object> map = new HashMap<>();
=======
    public Map<String, Object> editCategory(categoryVO cvo) {
        Map<String, Object> map = new HashMap<>();
>>>>>>> 45a02f36d05c53afdbd7c6701864f34c9b3cf576
        int cnt = 0;
        try {
            MultipartFile f = cvo.getFile();
            if (f != null && !f.isEmpty()) {
                String fname = f.getOriginalFilename();
                Path path = Paths.get(upload);
<<<<<<< HEAD
                if(path.toString().contains("back")){
                    String pathString = path.toString();
                    String changedPath = pathString.replace("back\\", "");
                    path = Paths.get(changedPath);
                }
=======
>>>>>>> 45a02f36d05c53afdbd7c6701864f34c9b3cf576
                String realPath = "/img/admin/category/";
                String filePath = path.resolve(fname).toString();
                cvo.setImg_url(realPath + fname);
                // 파일 업로드
                f.transferTo(new File(filePath));
                cnt = ce_Service.editCategory(cvo);
            } else {
                cnt = ce_Service.editCategoryDefault(cvo);
            }
            map.put("cnt", cnt);
        } catch (Exception e) {
            e.printStackTrace();
        }
<<<<<<< HEAD
    
=======

>>>>>>> 45a02f36d05c53afdbd7c6701864f34c9b3cf576
        return map;
    }

    @RequestMapping("/delete")
    @ResponseBody
<<<<<<< HEAD
    public Map<String,Object> deleteCategory(@RequestBody List<String> list) {
=======
    public Map<String, Object> deleteCategory(@RequestBody List<String> list) {
>>>>>>> 45a02f36d05c53afdbd7c6701864f34c9b3cf576
        Map<String, Object> map = new HashMap<>();
        int cnt = 0;
        for (String categorykey : list) {
            cnt += ce_Service.deleteCategory(categorykey);
        }
        map.put("cnt", cnt);
        return map;
    }

<<<<<<< HEAD


=======
>>>>>>> 45a02f36d05c53afdbd7c6701864f34c9b3cf576
}
