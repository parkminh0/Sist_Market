'use client'

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useState } from "react";
import PostInfoModal from "@/component/admin/post/detail/PostInfoModal";

export default function PostInfo(props) {

  
  const [open_pi, setOpen_pi] = useState(false);

  const handleOpen_pi = () => setOpen_pi(true);
  const handleClose_pi = () => setOpen_pi(false);

  
  const pvo = props.pvo;
  const handleOpen = props.handleOpen;
  
  console.log(pvo.pinfo_list);
  
  var method = "판매";
  var poststatus = "임시저장";
  var canbargain = "불가";
  var range = "가까운 동네";

  var isdeleted = "X";
  var iscellvisible = "X";
  var isbuyvisible = "X";

  if(pvo.method == 1){
    method = "나눔";
  }

  if(pvo.canbargain == 1){
    canbargain = "가능";
  }

  switch(pvo.poststatus){
    case 1:
      poststatus = "판매중";
      break;
    case 2:
      poststatus = "예약중(거래중)";
      break;
    case 3:
      poststatus = "거래완료";
      break;
    case 4:
      poststatus = "숨김";
      break;
  }

  switch(pvo.range){
    case 1:
      range = "조금 가까운 동네";
      break;
    case 2:
      range = "조금 먼 동네";
      break;
    case 3:
      range = "먼 동네";
      break;
  }

  if(pvo.isdeleted == 1){
    isdeleted = "O";
  }

  if(pvo.iscellvisible == 1){
    iscellvisible = "O";
  }
  if(pvo.isbuyvisible == 1){
    isbuyvisible = "O";
  }

  return (
    <>
    <TableContainer className="infoPart" component={Paper}>
      <Table className="detailInfoTable">
        <TableBody>
          <TableRow>
            <TableCell className="th">게시글 번호</TableCell>
            <TableCell className="th" colSpan={2}>제목</TableCell>
            <TableCell className="th">조회수</TableCell>
            <TableCell className="th">거래방식</TableCell>
            <TableCell className="th">흥정가능여부</TableCell>
            <TableCell className="th">게시글 상태</TableCell>
            {pvo.poststatus==3 ?
              <>
                <TableCell className="th">거래완료자명</TableCell>
                <TableCell className="th">거래완료일자</TableCell>
              </>
             : ''}
          </TableRow>
            <TableRow>
              <TableCell className="td">{pvo.postkey}</TableCell>
              <TableCell className="td" colSpan={2}>{pvo.title}</TableCell>
              <TableCell className="td">{pvo.viewqty}</TableCell>
              <TableCell className="td">{method}</TableCell>
              <TableCell className="td">{canbargain}</TableCell>
              <TableCell className="td">{poststatus}</TableCell>
            {pvo.poststatus==3 ?
              <>
                <TableCell className="td">{pvo.duvo.nickname}</TableCell>
                <TableCell className="td">{pvo.deal_dtm}</TableCell>
              </>
             : ''}
            </TableRow>
        </TableBody>
      </Table>
      <Table className="detailInfoTable">
        <TableBody>
          <TableRow>
            <TableCell className="th">가격</TableCell>
            <TableCell className="th">변동 후 가격</TableCell>
            <TableCell className="th">거래범위</TableCell>
            <TableCell className="th" colSpan={2}>거래장소명</TableCell>
            <TableCell className="th">위도</TableCell>
            <TableCell className="th">경도</TableCell>
          </TableRow>
            <TableRow>
              <TableCell className="td">{pvo.price}원</TableCell>
              <TableCell className="td">{pvo.lastprice}원</TableCell>
              <TableCell className="td">{range}</TableCell>
              <TableCell className="td" colSpan={2}>{pvo.hope_place}</TableCell>
              <TableCell className="td">{pvo.hope_lati}</TableCell>
              <TableCell className="td">{pvo.hope_long}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
      <Table className="detailInfoTable">
        <TableBody>
          <TableRow>
            <TableCell className="th" colSpan={5}>내용</TableCell>
            <TableCell className="th">생성일자</TableCell>
            <TableCell className="th">수정일자</TableCell>
            <TableCell className="th">끌올일자</TableCell>
            <TableCell className="th">삭제여부</TableCell>
            {pvo.isdeleted==1 ?
              <TableCell className="th">삭제일자</TableCell>
             : ''}
            
          </TableRow>
            <TableRow>
              <TableCell className="td" colSpan={5}>{pvo.content}</TableCell>
              <TableCell className="td">{pvo.create_dtm}</TableCell>
              <TableCell className="td">{pvo.update_dtm}</TableCell>
              <TableCell className="td" onClick={()=>handleOpen_pi()} style={{cursor:"pointer"}}>{pvo.remind_dtm}</TableCell>
              <TableCell className="td">{isdeleted}</TableCell>
            {pvo.isdeleted==1 ?
              <TableCell className="td">{pvo.delete_dtm}</TableCell>
             : ''}
            </TableRow>
        </TableBody>
      </Table>
      {pvo.poststatus==3 ?
              
             
      <Table className="detailInfoTable">
        <TableBody>
          <TableRow>
            <TableCell className="th" colSpan={4}>판매자</TableCell>
            <TableCell className="th" colSpan={4}>구매자</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="th" colSpan={2}>후기</TableCell>
            <TableCell className="th">이미지</TableCell>
            <TableCell className="th">작성일자</TableCell>
            <TableCell className="th" colSpan={2}>후기</TableCell>
            <TableCell className="th">이미지</TableCell>
            <TableCell className="th">작성일자</TableCell>
            
          </TableRow>
            <TableRow>
              <TableCell className="td" colSpan={2}>{pvo.userreview}</TableCell>
              <TableCell className="td img" onClick={()=>handleOpen(`${pvo.userreviewimg}`)}> <img title="원본 이미지 보기" src={`${pvo.userreviewimg}`} /> </TableCell>
              <TableCell className="td">{pvo.userreview_dtm}</TableCell>
              <TableCell className="td" colSpan={2}>{pvo.dealuserreview}</TableCell>
              <TableCell className="td img" onClick={()=>handleOpen(`${pvo.dealuserreviewimg}`)}> <img title="원본 이미지 보기" src={`${pvo.dealuserreviewimg}`} /> </TableCell>
              <TableCell className="td">{pvo.dealuserreview_dtm}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
      : ''}
      <Table className="detailInfoTable">
        <TableBody>
          <TableRow>
            <TableCell className="th">판매내역보기여부</TableCell>
            <TableCell className="th">구매내역보기여부</TableCell>
          </TableRow>
            <TableRow>
              <TableCell className="td">{iscellvisible}</TableCell>
              <TableCell className="td">{isbuyvisible}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    
    <PostInfoModal open_pi={open_pi} handleClose_pi={handleClose_pi} postinfo={pvo.pinfo_list} />
    </>
  );
}
