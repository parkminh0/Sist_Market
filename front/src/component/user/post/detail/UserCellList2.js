import Link from "next/link";
import "/public/css/popcatelist.css";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import IconButton from "@mui/joy/IconButton";
import AspectRatio from "@mui/joy/AspectRatio";
import Typography from "@mui/joy/Typography";
import ImageNotSupportedRoundedIcon from "@mui/icons-material/ImageNotSupportedRounded";

export default function UcerCellList2(props) {
  function timeDifference(postTime) {
    const now = new Date(); // 현재 시간
    const postDate = new Date(postTime); // postVO.create_dtm 값을 Date 객체로 변환

    const timeDiff = now - postDate; // 두 시간의 차이를 밀리초로 계산
    const diffInSeconds = Math.floor(timeDiff / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYear = Math.floor(diffInDays / 365);

    // 차이에 따라 적절한 문자열을 반환
    if (diffInYear > 0) {
      return `${diffInYear}년 전`;
    } else if (diffInMonths > 0) {
      return `${diffInMonths}개월 전`;
    } else if (diffInDays > 0) {
      return `${diffInDays}일 전`;
    } else if (diffInHours > 0) {
      return `${diffInHours}시간 전`;
    } else if (diffInMinutes > 0) {
      return `${diffInMinutes}분 전`;
    } else {
      return "방금 전";
    }
  }
  const pvo = props.pvo;
  const price =
    pvo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
  return (
    <Link
      key={props.index}
      data-gtm="search_article"
      className="_1h4pbgy9ug"
      href={`/post/detail?postkey=${pvo.postkey}`}
      style={{ minwidth: "0", margin: "5px 10px" }}
    >
      <Card
        sx={{
          width: "200px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          minwidth: "0",
          padding: "5px",
          gap: "0.5rem",
          backgroundColor: "white",
        }}
      >
        <div style={{ width: "100%", minwidth: "0", marginLeft: "5px" }}>
          <Typography
            component="span"
            level="title-lg"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "100%", // 제목이 있는 부모 요소의 너비에 맞춰서 제한
              display: "block",
              minwidth: "0", // 텍스트가 줄어들지 않도록 설정
              marginTop: "5px",
            }}
          >
            {pvo.title}
          </Typography>
          <Typography level="body-sm">
            위치 · 동네 · {timeDifference(pvo.create_dtm)}
          </Typography>
        </div>
        <AspectRatio
          minHeight="200px"
          maxHeight="200px"
          minwidth="200px"
          maxwidth="200px"
          margin="0"
          padding="0"
        >
          {pvo.pimg_list && pvo.pimg_list.length > 0 ? (
            <span
              className=" lazy-load-image-background opacity lazy-load-image-loaded"
              style={{
                color: "transparent",
                display: "inlineBlock",
              }}
            >
              <img
                className="_1b153uwe _1h4pbgya3k"
                src={pvo.pimg_list[0].imgurl}
              />
            </span>
          ) : (
            <ImageNotSupportedRoundedIcon
              style={{
                width: "100%", // 아이콘의 너비를 100%로 설정
                height: "100%", // 아이콘의 높이를 100%로 설정
                zIndex: 1, // 필요하면 z-index로 가시성을 확보
              }}
            />
          )}
          {pvo.poststatus == 2 ? (
            <span className="_1b153uwj _1h4pbgy7ag _1h4pbgy788 _1b153uwl">
              예약중
            </span>
          ) : pvo.poststatus == 3 ? (
            <span className="_1b153uwj _1h4pbgy7ag _1h4pbgy788 _1b153uwm">
              거래완료
            </span>
          ) : (
            ""
          )}
        </AspectRatio>
        <CardContent
          orientation="horizontal"
          sx={{ display: "flex", alignItems: "center", marginBottom: "5px" }}
        >
          <Typography
            sx={{
              fontSize: "lg",
              fontWeight: "lg",
              flexGrow: 1,
              marginLeft: "5px",
            }}
          >
            {pvo.price == 0
              ? "나눔♥"
              : new Intl.NumberFormat("ko-KR").format(pvo.price) + "원"}
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: "0" }}
            >
              <RemoveRedEyeOutlinedIcon
                style={{ fontSize: "14px", marginRight: "15px" }}
              />
              <span style={{ fontSize: "12px", marginLeft: "auto" }}>
                {pvo.viewqty}
              </span>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: "0" }}
            >
              <ChatBubbleOutlineOutlinedIcon
                style={{ fontSize: "14px", marginRight: "15px" }}
              />
              <span style={{ fontSize: "12px", marginLeft: "auto" }}>
                {pvo.chatroomqty}
              </span>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: "0" }}
            >
              <FavoriteBorderOutlinedIcon
                style={{ fontSize: "14px", marginRight: "15px" }}
              />
              <span style={{ fontSize: "12px", marginLeft: "auto" }}>
                {pvo.likedqty}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
