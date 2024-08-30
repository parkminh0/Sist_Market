package com.sist.back.vo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class postVO {
    String postkey,
            userkey,
            townkey,
            categorykey,
            title,
            method,
            price,
            lastprice,
            content,
            range,
            hope_place,
            hope_lati,
            hope_long,
            canbargain,
            viewqty,
            create_dtm,
            update_dtm,
            delete_dtm,
            remind_dtm,
            dealuserkey,
            deal_dtm,
            userreview,
            userreviewimg,
            userreview_dtm,
            dealuserreview,
            dealuserreviewimg,
            dealuserreview_dtm,
            poststatus,
            isdeleted,
            iscellvisible,
            isbuyvisible;
}
