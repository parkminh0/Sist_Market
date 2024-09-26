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
        String rnum;

        String postkey, userkey, townkey, categorykey, method, price,
                        lastprice, range, canbargain, viewqty, dealuserkey,
                        poststatus, isdeleted, iscellvisible, isbuyvisible;
        String title, content, hope_place, hope_lati, hope_long,
                        create_dtm, update_dtm, delete_dtm, remind_dtm,
                        deal_dtm, userreview, userreviewimg, userreview_dtm,
                        dealuserreview, dealuserreviewimg, dealuserreview_dtm;

        List<PostImgVO> pImg_list;
        List<PostInfoVO> pInfo_list;
        userVO uvo;
        userVO duvo;
        categoryVO cvo;
        TownVO townVO;

        String nickname, imgurl, region1, region2, region3, reviewType;

        String isPostPage;

        // 관심받은 횟수
        int likedqty;
        // 채팅방 갯수
        int chatroomqty;
}