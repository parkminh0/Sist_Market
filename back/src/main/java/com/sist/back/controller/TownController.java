package com.sist.back.controller;

import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sist.back.service.TownService;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/town")
public class TownController {

    @Autowired
    TownService townService;

    @GetMapping("/postside")
    public Map<String, Object> getMethodName(String key, String value,
            String[] now) {
        Map<String, Object> pMap = new HashMap<>();
        // 수동으로 디코딩
        String decodedValue = URLDecoder.decode(value, StandardCharsets.UTF_8);
        String[] decodedNow = Arrays.stream(now)
                .map(n -> URLDecoder.decode(n, StandardCharsets.UTF_8))
                .toArray(String[]::new);

        pMap.put("key", key);
        pMap.put("value", decodedValue);
        pMap.put("now", decodedNow);

        // 디버그 로그 출력
        System.out.println("박민호 브랜치");
        System.out.println("키: " + key);
        System.out.println("값(디코딩 후): " + decodedValue);
        System.out.println("나우(디코딩 후): " + Arrays.toString(decodedNow));

        Map<String, Object> res = new HashMap<>();
        res.put("res_list", townService.searchTownByRegion(pMap));
        return res;
    }

    @GetMapping("/getNearTown")
    public Map<String, Object> getNearTown(@RequestParam String region1, @RequestParam String region2) {
        Map<String, Object> res = new HashMap<>();
        res.put("getNearTown", townService.getNearTown(region1, region2));
        return res;
    }

    @GetMapping("/getAllRegion1")
    public Map<String, Object> getAllRegion1() {
        Map<String, Object> res = new HashMap<>();
        res.put("getAllRegion1", townService.getAllRegion1());
        return res;
    }

    @GetMapping("/getAllRegion2")
    public Map<String, Object> getAllRegion2(String region1) {
        Map<String, Object> res = new HashMap<>();
        res.put("getAllRegion2", townService.getAllRegion2(region1));
        return res;
    }

    @GetMapping("/getAllRegion3")
    public Map<String, Object> getAllRegion3(String region2) {
        Map<String, Object> res = new HashMap<>();
        res.put("getAllRegion3", townService.getAllRegion3(region2));
        return res;
    }
}
