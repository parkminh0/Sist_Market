package com.sist.back.controller;

import java.util.Map;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sist.back.service.ReportService;
import com.sist.back.vo.ReportListVO;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
@RequestMapping("/user/report")
public class ReportController {
    @Autowired
    private ReportService r_service;

    @RequestMapping("/getReportList")
    @ResponseBody
    public Map<String, Object> getReportList(String ispost, String sequence) {
        Map<String, Object> map = new HashMap<>();
        ReportListVO[] r_ar = r_service.getReportList(ispost, sequence);
        map.put("r_ar", r_ar);
        return map;
    }

    @RequestMapping("/reportPost")
    @ResponseBody
    public Map<String, Object> reportPost(String reportlistkey, String postkey, String reportuserkey, String content) {
        Map<String, Object> map = new HashMap<>();
        int cnt = r_service.reportPost(reportlistkey, postkey, reportuserkey, content);
        map.put("cnt", cnt);
        return map;
    }

    @RequestMapping("/reportUser")
    @ResponseBody
    public Map<String, Object> reportUser(String reportlistkey, String userkey, String reportuserkey, String content) {
        Map<String, Object> map = new HashMap<>();
        int cnt = r_service.reportUser(reportlistkey, userkey, reportuserkey, content);
        map.put("cnt", cnt);
        return map;
    }

    @RequestMapping("/noseeUser")
    @ResponseBody
    public Map<String, Object> noseeUser(String userkey, String noseeuserkey) {
        Map<String, Object> map = new HashMap<>();

        int exist = r_service.chkNosee(noseeuserkey);
        if (exist > 0) {
            map.put("msg", "exist");
            return map;
        } else {
            int cnt = r_service.noseeUser(userkey, noseeuserkey);
            map.put("msg", "new");
            map.put("cnt", cnt);
            return map;
        }
    }

}
