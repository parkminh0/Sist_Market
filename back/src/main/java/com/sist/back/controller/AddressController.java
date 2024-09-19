package com.sist.back.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sist.back.service.AddressService;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;

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

    @GetMapping("/changeSelected")
    public Map<String, Object> changeSelected(@RequestParam String userkey) {
        Map<String, Object> res = new HashMap<>();
        res.put("issuccess", addressService.changeSelected(userkey));
        return res;
    }

    @GetMapping("/deleteAddress")
    public Map<String, Object> deleteAddress(@RequestParam String addresskey, String isselected, String userkey) {
        Map<String, Object> res = new HashMap<>();

        int issuccess = addressService.deleteAddress(addresskey);
        if (issuccess > 0) {
            if (isselected.equals("1")) {
                issuccess = addressService.changeSelected(userkey);
            }
        }
        res.put("issuccess", issuccess);
        return res;
    }

}
