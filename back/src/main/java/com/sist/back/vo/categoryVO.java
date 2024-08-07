package com.sist.back.vo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class categoryVO {
    String categorykey, upcategoryname, categoryname, img_url, create_dtm, update_dtm, delete_dtm, isdeleted;
}
