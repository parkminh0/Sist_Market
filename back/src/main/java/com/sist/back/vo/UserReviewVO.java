package com.sist.back.vo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserReviewVO {
    private int userreviewkey, reviewlistkey, postkey, isbuyer;

    private ReviewListVO rlvo;
}
