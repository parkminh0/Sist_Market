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
    private int all_posts; // 전체 게시글 수
    private int tem_save_posts; // 임시 저장 게시글 수
    private int sale_posts; // 판매중 게시글 수
    private int saleing_posts; // 예약중(거래중) 게시글 수
    private int saled_posts; // 거래완료 게시글 수
    private int hide_posts; // 숨김 게시글 수
}
