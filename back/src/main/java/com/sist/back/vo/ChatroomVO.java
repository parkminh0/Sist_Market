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
public class ChatroomVO {
    private int chatroomkey, postkey, offerkey, chatuserkey,
                appointedstatus, appointingstatus, isalarm,
                istop, isoffer, isdeleted;

    private String 
            appointdate, appointplace, appintlati, appointlong,
            appointcreate_dtm, appointupdate_dtm, create_dtm, 
            update_dtm, delete_dtm;

    
    private userVO cuvo;

    private List<ChattingVO> c_list;


}
