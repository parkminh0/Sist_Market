'use client'

import { useEffect, useState } from "react";
import "/public/css/admin/post.css";
import "/public/css/admin/post/detail.css";
import axios from "axios";
import PostInfo from "@/component/admin/post/detail/PostInfo";
import CategoryInfo from "@/component/admin/post/detail/CategoryInfo";
import UserreviewInfo from "@/component/admin/post/detail/UserreviewInfo";
import ChatroomInfo from "@/component/admin/post/detail/ChatroomInfo";
import UserInfo from "@/component/admin/post/detail/UserInfo";
import TownInfo from "@/component/admin/post/detail/TownInfo";
import OfferInfo from "@/component/admin/post/detail/OfferInfo";
import { Grid } from "@mui/material";
import ImageModal from "@/component/admin/post/detail/ImageModal";

export default function Page(props) {
  const [postkey, setPostkey] = useState('');
  const [pvo, setPvo] = useState({});
  const [tvo, setTvo] = useState({});
  const [o_list, setO_list] = useState([]);
  const [cr_list, setCr_list] = useState([]);
  const [ur_list, setUr_list] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const [open, setOpen] = useState(false);
  const [imgurl, setImgurl] = useState('');
  function handleOpen(imgurl){
    setImgurl(imgurl);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const API_URL = "/post/detail";
  
  function getPostDetail(p_key) {
    // axios({
    //   url: API_URL,
    //   method: "post",
    //   params: {"postkey":p_key},
    //   withCredentials: true,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((res) => {
    //   console.log("응답:"+response)
    //   setPvo(response.data.pvo);
    //   setTvo(response.data.tvo);
    //   setO_list(response.data.o_list);
    //   setCr_list(response.data.cr_list);
    //   setUr_list(response.data.ur_list);
    //   setLoaded(true);
    // });
    axios
      .get(
        API_URL
        ,{params: {"postkey":p_key}}
      )
      .then((response) => {
        console.log("응답:"+response)
        setPvo(response.data.pvo);
        setTvo(response.data.tvo);
        setO_list(response.data.o_list);
        setCr_list(response.data.cr_list);
        setUr_list(response.data.ur_list);
        setLoaded(true);

      });
  }

  useEffect(() => {
    setPostkey(props.params.postkey);
    getPostDetail(props.params.postkey);
  }, []);

  
  return (
    <>
      <div className="MuiStack-root css-tfkmr0">
        <div className="MuiGrid-root MuiGrid-container css-v3z1wi">
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-md-6 css-196gsvj">
            <div className="MuiStack-root css-1x4jos1">
              <div className="MuiStack-root css-lmzl00">
                <span className="MuiTypography-root MuiTypography-base.h5B css-avyusg">
                  게시글 상세
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
        {
          loaded
          ?
          <>
            <Grid container sx={{width: "70vw"}} spacing={2}>
              <Grid item xs={12}>
                <PostInfo pvo={pvo} handleOpen={handleOpen}/>
              </Grid>
              <Grid item xs={12}>
                <CategoryInfo cvo={pvo.cvo}/>
              </Grid>
              <Grid item xs={8}>
                <UserInfo uvo={pvo.uvo} handleOpen={handleOpen}/>
              </Grid>
              <Grid item xs={4}>
                <TownInfo tvo={tvo}/>
              </Grid>
              <Grid item xs={6}>
                <OfferInfo o_list={o_list}/>
              </Grid>
              <Grid item xs={6}>
                <UserreviewInfo ur_list={ur_list}/>
              </Grid>
              <Grid item xs={12}>
                <ChatroomInfo cr_list={cr_list}/>
              </Grid>
            </Grid>
            <ImageModal open={open} handleClose={handleClose} imgurl={imgurl} />
          </>
          :
          <p>로딩 중입니다...</p>
        }
    </>  
  );
}
