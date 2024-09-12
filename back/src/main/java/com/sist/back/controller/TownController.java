package com.sist.back.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sist.back.service.TownService;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/town")
public class TownController {

    @Autowired
    TownService townService;

    @GetMapping("/postside")
    public Map<String, Object> getMethodName(String key, String value, String[] now) {
        Map<String, Object> pMap = new HashMap<>();
        pMap.put("key", key);
        pMap.put("value", value);
        pMap.put("now", now);
        Map<String, Object> res = new HashMap<>();
        res.put("res_list", townService.searchTownByRegion(pMap));
        return res;
    }

}
