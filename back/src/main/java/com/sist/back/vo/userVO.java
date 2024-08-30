package com.sist.back.vo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;


@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class userVO {

	private List<PostVO> p_list;
	private List<MannerVO> m_list;
	private List<LikeUserVO> l_list;
	private List<UserBadgeVO> ub_list;
	private List<BlockedVO> b_list;
	private List<NoseeVO> n_list;
	private List<AddressVO> a_list;
	private List<SetAlarmVO> s_list;
	private List<KeywordVO> k_list;
	private List<WishlistVO> w_list;

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