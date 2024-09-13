'use client'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function FHRBMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isLiked, setIsLiked] = useState();
  const [isNosee, setIsNosee] = useState();
  const [isBlocked, setIsBlocked] = useState();
  const me = Cookies.get("userkey");
  const you = props.you;

  useEffect(()=>{
    setIsLiked(props.isLiked);
    setIsNosee(props.isNosee);
    setIsBlocked(props.isBlocked);
  },[])

  function likeItOrNot(){
    axios.get("/user/api/likeIoN", {
      params: {
        me: me,
        you: you,
        isLiked: isLiked,
    }
    }).then((res) => {
        setIsLiked(!isLiked);
    });
  }
  function noseeItOrNot(){

    axios.get("/user/api/noseeIoN", {
      params: {
        me: me,
        you: you,
        isNosee: isNosee,
    }
    }).then((res) => {
        setIsNosee(!isNosee);
    });
  }
  function blockItOrNot(){
    axios.get("/user/api/blockIoN", {
      params: {
        me: me,
        you: you,
        isBlocked: isBlocked,
    }
    }).then((res) => {
        setIsBlocked(!isBlocked);
    });
  }

  return (
    <div>
      <Button
        className="MenuBtn"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>{likeItOrNot()}}>모아보기 {isLiked ? "해제" : "등록"}</MenuItem>
        <MenuItem onClick={()=>{noseeItOrNot()}}>게시글 미노출 {isNosee ? "해제" : "등록"}</MenuItem>
        <MenuItem onClick={()=>{alert("신고")}}>사용자 신고</MenuItem>
        <MenuItem onClick={()=>{blockItOrNot()}}>사용자 차단 {isBlocked ? "해제" : ""}</MenuItem>
      </Menu>
    </div>
  );
}