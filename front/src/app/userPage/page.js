'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react";
import "/public/css/myPage.css";
import "/public/css/buylist.css";
// import "/public/css/paging.css";
import "/public/css/popcatelist.css";
import axios from "axios";
import { useSearchParams } from "next/navigation";

import Manner from "@/component/user/myPage/Manner";
import Review from "@/component/user/myPage/Review";
import { Box, Typography, LinearProgress, Grid, Button } from '@mui/material';
import UserCellList2 from "@/component/user/post/detail/UserCellList2";
import FHRBMenu from "@/component/user/userPage/FHRBMenu";
import Cookies from "js-cookie";


export default function page() {
  const API_URL = "/user/api/getUser";

  const [selectedTab, setSelectedTab] = useState('');
  const [whatNow, setWhatNow] = useState('badge');
  const [status, setStatus] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [isNosee, setIsNosee] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [reviewCount, setReviewCount] = useState(0);
  const [mannerCount, setMannerCount] = useState(0);
  const [mannerTemp, setMannerTemp] = useState(36.5);
  const [vo, setVo] = useState({});
  const [cellList, setCellList] = useState([]);

  const params = useSearchParams();
  const userkey = params.get("userkey");

  const categoryList = ['cell','manner','review'];
  
 

  const handleReviewCount = (count) => {
    setReviewCount(count);
  };

  const handleMannerCount = (count) => {
    setMannerCount(count);
  };

  function updateList(category){
      setWhatNow(category);
      setStatus(categoryList.indexOf(category)+1);
  
      if (category == 'cell') {
      setSelectedTab('1');
      } else if (category == 'manner') {
      setSelectedTab('2');
      } else if (category == 'review') {
      setSelectedTab('3');
      }
  }

  function getData() {
    axios.get(
      API_URL, {
        params: { userkey: userkey }
      }
    ).then((res) => {
      console.log(res.data.uvo);
      setVo(res.data.uvo);
      setCellList(res.data.uvo.cell_list);
    });
  }

  useEffect(() => {
    const me = Cookies.get("userkey");
    const you = userkey;
    if(me!=undefined){
        if(me == you){
            window.location.replace("/myPage");
        }
    }
    axios.get("/user/api/FHRBCheck", {
      params: {
        me: me,
        you: you,
    }
    }).then((res) => {
        setIsLiked(res.data.isLiked);
        setIsNosee(res.data.isNosee);
        setIsBlocked(res.data.isBlocked);
    });
    updateList('cell');
    axios.get("/user/manner/getManner", {
      params: { userkey: userkey }
    }).then((res) => {
      const totalCount = (res.data.m_ar || []).reduce((sum, item) => sum + item.count, 0);
      setMannerCount(totalCount);
      const goodTemps = (res.data.m_ar || []).filter(item => item.preference == 1 || item.preference == 2)
      .reduce((sum, item) => sum + item.count, 0);
      const badTemps = (res.data.m_ar || []).filter(item => item.preference == 0)
      .reduce((sum, item) => sum + item.count, 0);
      const updatedTemp = 36.5 + goodTemps * 0.5 - badTemps * 0.5;
      setMannerTemp(updatedTemp);
    });
    Promise.all([
      axios.get("/user/buyingReview", { params: { userkey: userkey} }),
      axios.get("/user/sellingReview", { params: { userkey: userkey} })
    ]).then(([res1, res2]) => {
        setReviewCount([...(res1.data.buying_ar || []), ...(res2.data.selling_ar || [])].length);
    });
    getData();
  }, []);

  function getTemperatureEmoji(temp) {
    if (temp <= 15) {
      return '😟';
    } else if (temp <= 30) {
      return '😞';
    } else if (temp <= 45) {
      return '🙂'; 
    } else if (temp <= 60) {
      return '😊';
    } else if (temp <= 80) {
      return '😁';
    } else {
      return '😆';
    }
  }

  function getProgressColor(temp) {
    if (temp <= 15) {
      return '#555555';
    } else if (temp <= 30) {
      return '#2E64FE';
    } else if (temp <= 45) {
      return 'skyblue';
    } else if (temp <= 60) {
      return '#01DF3A';
    } else if (temp <= 80) {
      return '#F2F5A9';
    } else {
      return 'orange';
    }
  }

  function LinearProgressWithLabel({ temp }) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative', marginTop: '20px' }}>
        <Box sx={{ position: 'absolute', left: 0, top: -35, display: 'flex', alignItems: 'center' }}>
          <h3>매너 온도</h3>
        </Box>
        <Box sx={{ position: 'absolute', right: 0, top: -25, display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>{`${temp}℃`}</Typography>
          <Typography variant="body2" sx={{ marginLeft: 0.2, fontSize: '1.2rem' }}>{getTemperatureEmoji(temp)}</Typography>
        </Box>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" value={temp} 
                          sx={{ '& .MuiLinearProgress-bar': { backgroundColor: getProgressColor(temp) }, '&.MuiLinearProgress-root': { backgroundColor: '#e0e0e0' } }}/>
        </Box>
      </Box>
    );
  }
  
  return (
    <>
      <article className="_1h4pbgy7wg _1h4pbgy7wz">
        <div className="_6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
          <section style={{ borderBottom: "1px solid #ebebeb" }} className="">
            <div className="_588sy41z _588sy421 _588sy42q _588sy415q _588sy417e">
              <nav className="iq86zf0">
                <ol className="iq86zf1 _588sy42q _588sy415q">
                  <li>
                    <Link href="/">
                      <span className="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf3 iq86zf2 _588sy41n">
                        <font style={{ verticalAlign: "inherit" }}>홈</font>
                      </span>
                    </Link>
                    <span className="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf4 _588sy4ze _588sy4w8">
                      <font style={{ verticalAlign: "inherit" }}> &gt;</font>
                    </span>
                  </li>
                </ol>
              </nav>
              <Link href="/myPage">
                <div className="_588sy41z _588sy421 _588sy42q _588sy415q">
                  <span className="_588sy4192 _588sy41x _588sy41b2 _588sy43">
                    <font style={{ verticalAlign: "inherit" }}>
                      유저 페이지
                    </font>
                  </span>
                </div>
              </Link>
            </div>
          </section>
        </div>
        <div className="my_home container my md _6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
          <section className="_1h4pbgy9ug _1h4pbgy8zc _1h4pbgy92j _1h4pbgy7y8 _1h4pbgy83s _1h4pbgy843 _1h4pbgy84k">
            {/* <!-- 여기서부터 콘텐츠 --> */}
            <div data-v-0a67d0b5="" data-v-0adb81cc="" className="content_area my-page-content" style={{minWidth:600}}>
              <div data-v-0a67d0b5="" className="my_purchase">
                <div data-v-6b53f901="" data-v-0a67d0b5="" className="content_title">
                  <div data-v-6b53f901="" className="title">
                    <h3 data-v-6b53f901="">프로필</h3>
                  </div>
                </div>
                <div data-v-ed683452="" data-v-7b7d73d2="" className="user_membership UserPageShip">
                    <div className="UserProfileGrid">
                            <div data-v-ed683452="" className="user_detail UserPageDetail">
                                <div data-v-ed683452="" className="user_thumb">
                                    <img data-v-ed683452=""
                                        src={vo.imgurl}
                                        alt="사용자 이미지" className="thumb_img"/>
                                </div>
                                <div data-v-ed683452="" className="user_info">
                                    <div data-v-ed683452="" className="info_box" style={{width:'fit-content'}}>
                                        <strong data-v-ed683452="" className="name" style={{width:'fit-content'}}>
                                        {vo.nickname}
                                        </strong>
                                        <p data-v-ed683452="" className="email" style={{width:'fit-content'}}>
                                        {vo.id} [ {vo.email} ]
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="BtnPart">
                                <div className="PraiseOrNot">
                                    <Button className="PraiseBtn" variant="contained">매너 평가</Button>
                                    <Button className="DisapproveBtn" variant="contained">비매너 평가</Button>
                                </div>
                                <FHRBMenu you={userkey} isLiked={isLiked} isNosee={isNosee} isBlocked={isBlocked}/>
                            </div>
                            <div className="mannerTemp">
                                <LinearProgressWithLabel temp={ mannerTemp } />
                            </div>
                    </div>
                </div>
                <div data-v-2cbb289b="" data-v-0a67d0b5="" className="purchase_list_tab sell detail_tab" >
                  <div data-v-2cbb289b="" onClick={()=>updateList('cell')} className={`tab_item ${status == 1 ? 'tab_on' : ''}`}>
                    <Link data-v-2cbb289b="" href="#" className="tab_link">
                      <dl data-v-2cbb289b="" className="tab_box">
                        <dt data-v-2cbb289b="" className="title">
                          {cellList.length}
                        </dt>
                        <dd data-v-2cbb289b="" className="count">
                          판매 목록
                        </dd>
                      </dl>
                    </Link>
                  </div>
                  <div data-v-2cbb289b="" onClick={()=>updateList('manner')} className={`tab_item ${status == 2 ? 'tab_on' : ''}`}>
                    <Link data-v-2cbb289b="" href="#" className="tab_link">
                      <dl data-v-2cbb289b="" className="tab_box">
                        <dt data-v-2cbb289b="" className="title">
                            {mannerCount}
                        </dt>
                        <dd data-v-2cbb289b="" className="count">
                            받은 매너 평가
                        </dd>
                      </dl>
                    </Link>
                  </div>
                  <div data-v-2cbb289b="" onClick={()=>updateList('review')} className={`tab_item ${status == 3 ? 'tab_on' : ''}`}>
                    <Link data-v-2cbb289b="" href="#" className="tab_link">
                      <dl data-v-2cbb289b="" className="tab_box">
                        <dt data-v-2cbb289b="" className="title">
                            {reviewCount}
                        </dt>
                        <dd data-v-2cbb289b="" className="count">
                            받은 거래 후기
                        </dd>
                      </dl>
                    </Link>
                  </div>
                </div>
                <div data-v-eff62a72="" data-v-0a67d0b5="" className="purchase_list bidding ask">
                    <div data-v-24868902="" data-v-eff62a72="" className={`empty_area ${selectedTab == '1' ? 'userPage' : ''}`} style={{paddingTop: '50px'}}>
                        {selectedTab == '1' && (
                            <p data-v-24868902="" className="desc">
                                <div className="UserPageGrid" >
                                {cellList.length > 0
                                ? cellList.map((clvo, index) => {
                                    return <UserCellList2 key={index} pvo={clvo} />;
                                }) : ""}
                                </div>
                            </p>
                        )}
                        {selectedTab == '2' && ( <p data-v-24868902="" className="desc"><Manner userKey={userkey} onMannerCountChange={handleMannerCount} /></p>)}
                        {selectedTab == '3' && ( <p data-v-24868902="" className="desc"><Review userKey={userkey} onReviewCountChange={handleReviewCount}/></p>)}
                    </div>
                </div>
              </div>
            </div>
            {/* <!-- 여기까지 컨텐츠 --> */}
          </section>
        </div>
      </article>
    </>
  );
}
