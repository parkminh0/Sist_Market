package com.sist.back.vo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ChattingVO {
    private int chattingkey, chatroomkey, chattingemozikey,
                isappoint, iscellerread, isbuyerread, isdeleted;

    private String content, create_dtm, update_dtm, delete_dtm;

    private List<ChatImgVO> ci_list;
    private ChattingEmoziVO cevo;

}
