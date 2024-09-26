package com.sist.back.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sist.back.service.AdminService;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/ad")
public class AdminController {

    @Autowired
    AdminService adminService;

    @GetMapping("/getTotal")
    public Map<String, Object> getTotal() {
        Map<String, Object> res = new HashMap<>();
        res.put("res_getTotal", adminService.getTotal());
        return res;
    }

}
