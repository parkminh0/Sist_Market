package com.sist.back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sist.back.mapper.DealreviewMapper;
import com.sist.back.vo.PostVO;
import com.sist.back.vo.ReviewListVO;
import java.util.List;

@Service
public class DealreviewService {
    @Autowired
    private DealreviewMapper d_mapper;

    public PostVO[] buyingReview(String userkey) {
        List<PostVO> d_list = d_mapper.buyingReview(userkey);
        PostVO[] d_ar = null;
        if (d_list != null && d_list.size() > 0) {
            d_ar = new PostVO[d_list.size()];
            d_list.toArray(d_ar);
        }
        return d_ar;
    }

    public PostVO[] sellingReview(String userkey) {
        List<PostVO> d_list = d_mapper.sellingReview(userkey);
        PostVO[] d_ar = null;
        if (d_list != null && d_list.size() > 0) {
            d_ar = new PostVO[d_list.size()];
            d_list.toArray(d_ar);
        }
        return d_ar;
    }

    public ReviewListVO[] reviewList(String preference) {
        List<ReviewListVO> r_list = d_mapper.reviewList(preference);
        ReviewListVO[] r_ar = null;
        if (r_list != null && r_list.size() > 0) {
            r_ar = new ReviewListVO[r_list.size()];
            r_list.toArray(r_ar);
        }
        return r_ar;
    }

    public int sellerReview(String reviewlistkey, String postkey) {
        return d_mapper.sellerReview(reviewlistkey, postkey);
    }

    public int buyerReview(String reviewlistkey, String postkey) {
        return d_mapper.buyerReview(reviewlistkey, postkey);
    }

}
