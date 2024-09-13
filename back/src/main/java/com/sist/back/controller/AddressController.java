package com.sist.back.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sist.back.service.AddressService;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/address")
public class AddressController {

    @Autowired
    AddressService addressService;

    @PostMapping("/getAddress")
    public Map<String, Object> getAddress(@RequestParam String userkey) {
        Map<String, Object> res = new HashMap<>();
        res.put("getAddress", addressService.getAddressByUserkey(userkey));
        return res;
    }

}
