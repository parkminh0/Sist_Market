import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, IconButton, ImageList, ImageListItem, InputAdornment, MenuItem, OutlinedInput, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { Fragment, useEffect, useRef, useState } from "react";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import Cookies from "js-cookie";

export default function EditPostModal(props) {
    
    const open = props.open;
    const handleClose = props.handleClose;
    const fileInputRef = useRef(null);
    const [previewImages, setPreviewImages] = useState([]);
    
    const [category_list, setCategory_list] = useState([]);
    
    const [pvo, setPvo] = useState({});
    const [title, setTitle] = useState();
    const [category, setCategory] = useState();
    const [method, setMethod] = useState();
    const [isFree, setIsFree] = useState();
    const [price, setPrice] = useState();
    const [canBargain, setCanBargain] = useState();
    const [content, setContent] = useState();
    const [savePostKey, setSavePostKey] = useState();

    function getPrevImages(){
      const formData = new FormData();

      // 이미지 파일 FormData에 추가
      previewImages.forEach((image, index) => {
        console.log("!!!!!![IMAGE]!!!!!!!");
        console.log(image.imgurl);
        const imgurlList = image.imgurl.split("/");
        console.log(imgurlList);
        const fileName = imgurlList[imgurlList.length-1];
        console.log(fileName);
        formData.append("post_img", fileName);
        axios
        .post(
            "/adpost/imageFile",
            formData,
            {
              headers: {
                  "Content-Type": "multipart/form-data",
              },
            }
        )
        .then((response) => {
          console.log("response");
          console.log(response);
        });
    });
    }

    function getCategory() {
        axios({
          url: "/category/all",
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          setCategory_list(res.data.category_list);
        });
      }
    
    // 파일 업로드 버튼 클릭 시 파일 입력 요소 클릭 이벤트 발생
    const uploadImg = (e) => {
        fileInputRef.current.click();
    };
    
    // 파일 입력 요소의 값이 변경되면 호출되는 함수
    const handleChange = (e) => {
        // 선택한 파일들을 배열로 가져옴
        let files = Array.from(e.target.files);
        
        if (previewImages.length + files.length > 10) {
            alert("10개를 초과할 수 없습니다.");
            return; // 10개를 초과할 경우 추가하지 않고 함수 종료
        }
        
        const newPreviewImages = [];
     previewImages   
        // 파일들을 미리보기 이미지로 변환하여 저장
        files.forEach((file, index) => {
            let fileReader = new FileReader();
            fileReader.onload = function () {
                newPreviewImages.push({ id: index, imgurl: fileReader.result, file });
                if (newPreviewImages.length === files.length) {
                    setPreviewImages((prevImages) => [
                        ...prevImages,
                        ...newPreviewImages,
                    ]);
                }
            };
            fileReader.readAsDataURL(file);
        });
    };
    
    const handleDelete = (index) => {
        setPreviewImages(previewImages.filter((_, i) => i !== index));
    };
    
    // 내 물건 팔기(작성)
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.currentTarget);
        
        // 유저 토큰 확인
        let tmpUserKey = Cookies.get('userkey');
        if (tmpUserKey == null || tmpUserKey == ''){
            alert("로그인 후 이용해주세요.");
            return;
        }
        formData.append("userkey", tmpUserKey);
        
        // 이미지 파일 FormData에 추가
        previewImages.forEach((image, index) => {
            if(image.file != undefined){
                const fileName = image.file.name;
                formData.append("post_img", image.file, `${tmpUserKey}-${fileName}`);
            } else {
                const imgurlList = image.imgurl.split("/");
                const fileName = imgurlList[imgurlList.length-1];
                formData.append("post_img", `${tmpUserKey}-${fileName}`);
            }
        });

        
        // 1: 수정
        const mode = event.currentTarget.dataset.mode;
        formData.append("poststatus", pvo.poststatus);
        
        // price가 공백("")이면 null 또는 0으로 변환
        formData.set("price", price === "" ? 0 : price);
        
        // 임시저장 후 작성완료 누를 경우 수정해야 함
        formData.append("postkey", pvo.postkey);
        
        formData.set("canBargain", canBargain);
        formData.append("isPostPage", 1);
        axios
        .post(
            "/adpost/edit",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        )
        .then((response) => {
            setSavePostKey(response.data.savePostKey);
            alert("게시글이 수정되었습니다.")
            window.location.reload();
        })
        .catch((error) => {
            console.error("게시글 작성 오류", error);
        });
    };


    useEffect(() => {
        getCategory();
        // console.log(props.pvo);
        var pvo = props.pvo;
        setPvo(props.pvo);
        setTitle(pvo.title);
        setCategory(pvo.cvo?pvo.cvo.categorykey:1);
        setMethod(pvo.method);
        setIsFree(pvo.method=="1");
        setPrice(pvo.price);
        setCanBargain(pvo.canbargain);
        setContent(pvo.content);
        setPreviewImages(pvo.pimg_list?pvo.pimg_list:[]);
        // console.log(previewImages);
        // getPrevImages();
    },[open]);


    return (
    <Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: handleSubmit,
          }}
        >
          <DialogTitle
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            내 물건 팔기
          </DialogTitle>
          <DialogContent>
            <FormControl fullWidth margin="dense">
              <ImageList cols={11} gap={8}>
                <ImageListItem
                  style={{
                    width: 100,
                    height: 100,
                    position: "relative",
                  }}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    name="file"
                    onChange={handleChange}
                    style={{ display: "none" }}
                    multiple
                  />
                  <AddPhotoAlternateIcon
                    color="primary"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      cursor: "pointer",
                    }}
                    onClick={uploadImg}
                  />
                  <Typography
                    variant="caption"
                    style={{
                      position: "absolute",
                      bottom: 5, // 아이콘 아래에 배치
                      left: 0,
                      right: 0,
                      textAlign: "center",
                      color: "black",
                      backgroundColor: "rgba(255, 255, 255, 0.7)",
                      fontSize: "16px",
                    }}
                  >
                    {`${previewImages.length}/10`}
                  </Typography>
                </ImageListItem>
                {previewImages.map((img, i) => {
                    return(
                  <ImageListItem
                    key={i}
                    style={{
                      width: 100,
                      height: 100,
                      border: "2px solid #ccc", // 이미지에 보더 추가
                      position: "relative",
                    }}
                  >
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDelete(i)}
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                        padding: 2,
                        zIndex: 10,
                      }}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                    <img
                      src={img.imgurl}
                      alt={`Uploaded Preview ${i}`}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                    {i === 0 && (
                      <Typography
                        variant="caption"
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          textAlign: "center",
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          color: "white",
                          padding: "2px 0",
                        }}
                      >
                        대표 사진
                      </Typography>
                    )}
                  </ImageListItem>
                )})}
              </ImageList>
            </FormControl>
            <FormControl fullWidth margin="dense">
              <TextField
                autoFocus
                required
                margin="dense"
                id="title"
                name="title"
                label="제목"
                type="text"
                fullWidth
                size="small"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth margin="dense">
              <TextField
                autoFocus
                required
                margin="dense"
                id="categorykey"
                name="categorykey"
                label="카테고리"
                select
                fullWidth
                size="small"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {category_list.map((item) => (
                  <MenuItem key={item.categorykey} value={item.categorykey}>
                    {item.categoryname}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
            <FormControl fullWidth margin="dense">
              <FormLabel
                required
                id="demo-simple-row-radio-buttons-group-label"
              >
                거래 방식
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="method"
                value={method}
                onChange={(e) => {
                  setMethod(e.target.value);
                  setIsFree(e.target.value == 0 ? false : true);
                  setPrice(e.target.value == 0 ? "" : 0);
                }}
              >
                <FormControlLabel
                  value="0"
                  control={<Radio />}
                  label="판매하기"
                />
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="나눔하기"
                />
              </RadioGroup>
              <OutlinedInput
                size="small"
                id="price"
                name="price"
                placeholder="가격을 입력해주세요."
                disabled={isFree}
                value={isFree ? 0 : price}
                onChange={(e) => setPrice(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">원</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
              <FormControlLabel
                id="canbargain"
                name="canbargain"
                style={{ display: isFree ? "none" : "block" }}
                control={
                  <Checkbox
                    checked={canBargain === 1}
                    onChange={(e) => setCanBargain(e.target.checked ? 1 : 0)}
                  />
                }
                label="가격 제안 받기"
              />
            </FormControl>
            <FormControl fullWidth margin="dense">
              <TextField
                required
                id="content"
                name="content"
                label="자세한 설명"
                multiline
                rows={7}
                placeholder={`OO동에 올릴 게시글 내용을 작성해 주세요. (판매 금지 물품은 게시가 제한될 수 있어요.)\n\n신뢰할 수 있는 거래를 위해 자세히 적어주세요.`}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              onClick={(e) =>
                (e.currentTarget.closest("form").dataset.mode = "write")
              }
            >
              수정
            </Button>
            <Button onClick={handleClose}>취소</Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    )
}
