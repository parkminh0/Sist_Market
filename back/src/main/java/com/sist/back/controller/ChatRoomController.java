package com.sist.back.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sist.back.repository.ChatRoomRepository;
import com.sist.back.service.ChatRoomService;
import com.sist.back.vo.ChatRoomVO;
import com.sist.back.vo.ChattingVO;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class ChatRoomController {

    @Autowired
    private final ChatRoomRepository chatRoomRepository;

    @Autowired
    private ChatRoomService cr_service;

    @GetMapping("/chat/rooms-all")
    public String getAllRooms() {
        return "/chat/home";
    }

    @RequestMapping("/chat/rooms")
    @ResponseBody
    public List<ChatRoomVO> getRooms(String userkey) {
        List<ChatRoomVO> list = chatRoomRepository.findAll(userkey); 
        return list;
    }

    @RequestMapping("/chat/createroom")
    public ChatRoomVO createRoom(ChatRoomVO cvo) {
        cr_service.createRoom(cvo);
        return cvo;
    }

    @GetMapping("/chat/room/{chatroomkey}")
    @ResponseBody // PathVariable로 {chatroomkey}에 해당하는 값을 String chatroomkey에 바인딩
    public List<ChattingVO> getRoom(@PathVariable String chatroomkey) {
        return chatRoomRepository.findById(chatroomkey);
    }
}