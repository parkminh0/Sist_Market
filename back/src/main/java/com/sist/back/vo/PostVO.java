package com.sist.back.vo;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostVO {
    private int postkey, userkey, townkey, categorykey, method, price,
                lastprice, range, canbargain, viewqty, dealuserkey,
                poststatus, isdeleted, iscellvisible, isbuyvisible;
                ;
    private String  title, content, hope_place, hope_lati, hope_long,
                    create_dtm, update_dtm, delete_dtm, remind_dtm,
                    deal_dtm, userreview, userreviewimg,userreview_dtm,
                    dealuserreview, dealuserreviewimg, dealuserreview_dtm
                    ;

    private List<PostImgVO> pImg_list;
    private List<PostInfoVO> pInfo_list;
    private userVO uvo;
    private userVO duvo;
    private categoryVO cvo;






}
