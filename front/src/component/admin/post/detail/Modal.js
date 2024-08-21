'use client'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Fragment, useEffect, useRef, useState } from 'react';

// https://mui.com/material-ui/react-dialog/#scrolling-long-content

export default function DetailModal(props) {
//   const [open, setOpen] = useState(false);
//   const [scroll, setScroll] = useState('paper');

//   const handleClickOpen = (scrollType) => () => {
//     setOpen(true);
//     setScroll(scrollType);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const descriptionElementRef = useRef(null);
//   useEffect(() => {
//     if (open) {
//       const { current: descriptionElement } = descriptionElementRef;
//       if (descriptionElement !== null) {
//         descriptionElement.focus();
//       }
//     }
//   }, [open]);

    const pdvo = props.prod_detail;
    const handleClose = props.handleClose;
    const descriptionElementRef = props.descriptionElementRef;
    const open = props.open;
    const scroll =  props.scroll;


  return (
    <Fragment>
      {/* <Button variant="contained" color='success' onClick={handleClickOpen('paper')}>scroll=paper</Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        sx={{ minWidth: 300 }}
      >
        <DialogTitle id="scroll-dialog-title">상품 상세</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
                <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableBody>
                      <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableRow>
                            <TableCell>상품번호</TableCell>
                            <TableCell>{pdvo.idx}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>상품명</TableCell>
                            <TableCell>{pdvo.name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>판매가</TableCell>
                            <TableCell>{pdvo.price}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>분류</TableCell>
                            <TableCell>{pdvo.category}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>판매자</TableCell>
                            <TableCell>{pdvo.seller}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>상품등록일</TableCell>
                            <TableCell>{pdvo.crtdtm}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>조회수</TableCell>
                            <TableCell>{pdvo.hit}</TableCell>
                        </TableRow>

                      </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>닫기</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}