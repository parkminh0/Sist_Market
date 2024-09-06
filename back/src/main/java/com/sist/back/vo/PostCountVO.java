package com.sist.back.vo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PostCountVO {
    private int all_posts;
    private int sale_posts;
    private int unsale_posts;
    private int saleing_posts;
    private int hide_posts;
    private int saled_posts;
    private int deleted_posts;
}
