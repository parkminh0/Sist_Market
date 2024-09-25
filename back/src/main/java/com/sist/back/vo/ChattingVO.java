package com.sist.back.vo;

import java.io.Serializable;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChattingVO implements Serializable {

    private String chattingkey, chatroomkey, chattingimgkey, chattingemojikey, appointkey, content, userkey1, userkey2, isbuyerread, issellerread, create_dtm, update_dtm, delete_dtm, isdeleted;

    private String userkey;
    private String img_url;

    private String chattingimg_url;

    private String newchat;
}
