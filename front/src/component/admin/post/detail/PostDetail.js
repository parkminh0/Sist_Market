"use client";

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
import { Box, Grid, Modal } from "@mui/material";
import ImageModal from "@/component/admin/post/detail/ImageModal";

export default function PostDetail(props) {

  const closePostDetail = props.closePostDetail;
  const openPD = props.openPD;


  const [postkey, setPostkey] = useState("");
  const [pvo, setPvo] = useState({});
  const [tvo, setTvo] = useState({});
  const [o_list, setO_list] = useState([]);
  const [cr_list, setCr_list] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const [open, setOpen] = useState(false);
  const [imgurl, setImgurl] = useState("");
  function handleOpen(imgurl) {
    setImgurl(imgurl);
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  const API_URL = "/adpost/detail";

  function getPostDetail(p_key) {
    axios({
      url: API_URL,
      method: "post",
      params: { postkey: p_key },
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      setPvo(response.data.pvo);
      setTvo(response.data.tvo);
      setO_list(response.data.o_list);
      setCr_list(response.data.cr_list);
      setLoaded(response.data.pvo!=null);
    });
  }

  useEffect(() => {
    setPostkey(props.postkey);
    getPostDetail(props.postkey);
  }, [openPD]);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    minWidth: '500px',
    maxWidth: '800px',
    minHeight: '700px',
    maxHeight: '900px',
    overflowY: 'scroll',
    overflowX: 'hidden',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 5
  };

  return (
    <Modal
        className="ModalStyle"
        open={openPD}
        onClose={closePostDetail}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style} className="BoxStyle">
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
        {loaded ?
        <div>
            <Grid container spacing={1}>
            <Grid item xs={12} className="PostInfo">
                <p className="TableTitle">게시글 정보</p>
                <PostInfo pvo={pvo} handleOpen={handleOpen} />
            </Grid>
            <Grid item xs={4}>
                <CategoryInfo cvo={pvo.cvo} />
            </Grid>
            <Grid item xs={8}>
                <TownInfo tvo={tvo} />
            </Grid>
            <Grid item xs={12}>
                <p className="TableTitle">유저 정보</p>
                <UserInfo uvo={pvo.uvo} handleOpen={handleOpen} />
            </Grid>
            <Grid item xs={12}>
                <p className="TableTitle">기타 정보</p>
                <OfferInfo o_list={o_list} />
            </Grid>
            <Grid item xs={12}>
                <ChatroomInfo cr_list={cr_list} />
            </Grid>
            </Grid>
            <ImageModal open={open} handleClose={handleClose} imgurl={imgurl} />
        </div>
        :''}
        </Box>
    </Modal>
  );
}
