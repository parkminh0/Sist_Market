package com.sist.back.vo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class userVO {

	String userkey,
	id,
	pw,
	name,
	nickname,
	phone,
	email,
	imgurl,
	login_dtm,
	isdisturb,
	disturb_start,
	disturb_end,
	isauthorized,
	create_dtm,
	update_dtm,
	delete_dtm,
	isdeleted;

}