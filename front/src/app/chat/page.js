import Link from "next/link";
import React from "react";
import "/public/css/chat.css";

export default function Page() {
  function showNotRead() {}

  return (
    <>
      <article className="_1h4pbgy7wg _1h4pbgy7wy _1h4pbgy7xv _1h4pbgy7xh">
        <div
          style={{
            overflowX: "hidden",
            height: "70%",
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
          className="css-143d18r _6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462"
        >
          <div
            style={{
              borderTop: ".5px solid var(--seed-scale-color-gray-200)",
              borderBottom: ".5px solid var(--seed-scale-color-gray-200)",
            }}
            className="css-so5s0"
          >
            <nav className="sidebar">
              <Link className="anchor" href="chat">
                <img
                  className="selected profile-image"
                  src="https://dnvefa72aowie.cloudfront.net/origin/profile/profile_default.png"
                  alt="당근은carrot"
                />
              </Link>
            </nav>
            <nav className="css-dcpzrh">
              <div className="css-fycla4">
                <div className="nickname-area">사용자 nickname 넣기</div>
              </div>
              <div className="css-iyc8t">
                <label
                  onClick={showNotRead()}
                  className="unread-label common-bg-hover"
                >
                  <span className="unread-description">
                    안읽은 메시지만 보기
                  </span>
                  <input className="checkbox" type="checkbox" />
                  <svg
                    id="no-read-message"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4687 6.37459C13.6756 6.11573 13.6334 5.73818 13.3746 5.5313C13.1157 5.32442 12.7382 5.36655 12.5313 5.62541L7.72681 11.637L5.39354 9.60959C5.14341 9.39225 4.76444 9.41883 4.5471 9.66896C4.32975 9.91909 4.35633 10.2981 4.60646 10.5154L7.41166 12.9529C7.53501 13.0601 7.69673 13.1123 7.85947 13.0975C8.02221 13.0828 8.17188 13.0022 8.2739 12.8746L13.4687 6.37459Z"
                      fill="#ADB1BA"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM16.8 9C16.8 13.3078 13.3078 16.8 9 16.8C4.69218 16.8 1.2 13.3078 1.2 9C1.2 4.69218 4.69218 1.2 9 1.2C13.3078 1.2 16.8 4.69218 16.8 9Z"
                      fill="#ADB1BA"
                    ></path>
                  </svg>
                </label>
              </div>
              <ul
                tabIndex="0"
                role="list"
                aria-label="내 채널 리스트"
                className="css-8lfz6g"
              >
                <li className="css-v2yhcd">
                  <Link
                    className="selected   css-y6c1l4"
                    href="/room/UMTA1ODgtMjUyNTc0Mjk="
                  >
                    <div className="profile-wrapper">
                      <img
                        className="profile-image"
                        src="https://dnvefa72aowie.cloudfront.net/origin/user/202308/d58512c05b9677d82b6b1f3be5ddff9cbedfa010bcc2ef1ac49f8d7d00ccd211.png"
                        alt="profile"
                      />
                    </div>
                    <div className="css-qv4ssb">
                      <div className="preview-title-wrap">
                        <span className="preview-nickname">당근</span>
                        <span className="badge-wrapper">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.49875 2.96157C6.99096 2.08939 7.92611 1.5 9 1.5C10.0739 1.5 11.009 2.08936 11.5012 2.96143C12.466 2.69285 13.544 2.93744 14.3032 3.69666C15.0626 4.45603 15.307 5.53399 15.0384 6.49875C15.9106 6.99096 16.5 7.92611 16.5 9C16.5 10.0739 15.9106 11.009 15.0386 11.5012C15.3072 12.466 15.0626 13.544 14.3033 14.3032C13.544 15.0626 12.466 15.307 11.5012 15.0384C11.009 15.9106 10.0739 16.5 9 16.5C7.92614 16.5 6.991 15.9106 6.49878 15.0386C5.53405 15.3072 4.45602 15.0626 3.6968 14.3033C2.93743 13.544 2.69296 12.466 2.96157 11.5013C2.08939 11.009 1.5 10.0739 1.5 9C1.5 7.92614 2.08936 6.991 2.96143 6.49878C2.69285 5.53404 2.93744 4.45602 3.69666 3.6968C4.45603 2.93743 5.53399 2.69296 6.49875 2.96157ZM11.7341 6.49602C11.4472 6.28914 11.0469 6.354 10.84 6.6409L8.41363 10.0057L7.11178 8.59068C6.87229 8.33037 6.46714 8.31349 6.20683 8.55297C5.94653 8.79245 5.92964 9.19761 6.16913 9.45791L8.00255 11.4508C8.13284 11.5924 8.31988 11.6679 8.51196 11.6565C8.70405 11.645 8.88081 11.5478 8.99335 11.3917L11.879 7.39009C12.0859 7.10319 12.021 6.70291 11.7341 6.49602Z"
                              fill="#00B493"
                            ></path>
                          </svg>
                        </span>
                        <div className="sub-text">
                          <span>오후 06:05</span>
                        </div>
                      </div>
                      <div className="preview-description">
                        <span className="description-text">
                          내 컴퓨터에서 로그인했어요. 본인이 아니라면
                          로그아웃해주세요.
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="common-bg-hover only-hover css-q6qzi5">
                    <span className="option-controller">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M192 512c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m255.99999999 0c0 35.2 28.8 64 64.00000001 64.00000001s64-28.8 64.00000001-64.00000001-28.8-64-64.00000001-64.00000001-64 28.8-64.00000001 64.00000001z m256.00000001 0c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="css-v2yhcd">
                  <Link
                    className="   css-y6c1l4"
                    href="/room/QMjUyNTc0MjktMzA2NjgwMTYtRkxFQS03NjczNDMyMDE="
                  >
                    <div className="profile-wrapper">
                      <img
                        className="profile-image"
                        src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_256-b36669d6dfa36e7f58fc53d9fdfe689e324263d3cb8f5e079cec249a70bf61fe.png"
                        alt="profile"
                      />
                    </div>
                    <div className="css-qv4ssb">
                      <div className="preview-title-wrap">
                        <span className="preview-nickname">옷짱정리</span>
                        <div className="sub-text">
                          <span>서현2동</span>
                          <span> · </span>
                          <span>6일 전</span>
                        </div>
                      </div>
                      <div className="preview-description">
                        <span className="description-text">
                          옷짱정리님이 약속을 삭제했어요.
                        </span>
                      </div>
                    </div>
                    <img
                      src="https://dnvefa72aowie.cloudfront.net/origin/article/202405/44c4d1de2c7a97943ef605ed991aa6f187cfc0df1d83b01fd9d3cf90517c3065.jpg?f=webp&amp;q=95&amp;s=300x300&amp;t=inside"
                      className="preview-image"
                      alt="쿠에른 런던 로퍼 240"
                    />
                  </Link>
                  <div className="common-bg-hover only-hover css-q6qzi5">
                    <span className="option-controller">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M192 512c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m255.99999999 0c0 35.2 28.8 64 64.00000001 64.00000001s64-28.8 64.00000001-64.00000001-28.8-64-64.00000001-64.00000001-64 28.8-64.00000001 64.00000001z m256.00000001 0c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="css-v2yhcd">
                  <Link
                    className="   css-y6c1l4"
                    href="/room/QMjUyNTc0MjktMzA2NjgwMTYtRkxFQS04MDA5MTIxNjU="
                  >
                    <div className="profile-wrapper">
                      <img
                        className="profile-image"
                        src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_256-b36669d6dfa36e7f58fc53d9fdfe689e324263d3cb8f5e079cec249a70bf61fe.png"
                        alt="profile"
                      />
                    </div>
                    <div className="css-qv4ssb">
                      <div className="preview-title-wrap">
                        <span className="preview-nickname">옷짱정리</span>
                        <div className="sub-text">
                          <span>서현2동</span>
                          <span> · </span>
                          <span>6일 전</span>
                        </div>
                      </div>
                      <div className="preview-description">
                        <span className="description-text">사랑해</span>
                      </div>
                    </div>
                  </Link>
                  <div className="common-bg-hover only-hover css-q6qzi5">
                    <span className="option-controller">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M192 512c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m255.99999999 0c0 35.2 28.8 64 64.00000001 64.00000001s64-28.8 64.00000001-64.00000001-28.8-64-64.00000001-64.00000001-64 28.8-64.00000001 64.00000001z m256.00000001 0c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="css-v2yhcd">
                  <Link
                    className="   css-y6c1l4"
                    href="/room/PMjUyNTc0MjktNDg4NjcxNjQ="
                  >
                    <div className="profile-wrapper">
                      <img
                        className="profile-image"
                        src="https://dnvefa72aowie.cloudfront.net/origin/profile/202308/db650a62a280238862d623668146c128f61790d509250eb65a79cea6aedc653b.jpg?q=82&amp;s=80x80&amp;t=crop"
                        alt="profile"
                      />
                    </div>
                    <div className="css-qv4ssb">
                      <div className="preview-title-wrap">
                        <span className="preview-nickname">당근동네생활팀</span>
                        <span className="badge-wrapper">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.49875 2.96157C6.99096 2.08939 7.92611 1.5 9 1.5C10.0739 1.5 11.009 2.08936 11.5012 2.96143C12.466 2.69285 13.544 2.93744 14.3032 3.69666C15.0626 4.45603 15.307 5.53399 15.0384 6.49875C15.9106 6.99096 16.5 7.92611 16.5 9C16.5 10.0739 15.9106 11.009 15.0386 11.5012C15.3072 12.466 15.0626 13.544 14.3033 14.3032C13.544 15.0626 12.466 15.307 11.5012 15.0384C11.009 15.9106 10.0739 16.5 9 16.5C7.92614 16.5 6.991 15.9106 6.49878 15.0386C5.53405 15.3072 4.45602 15.0626 3.6968 14.3033C2.93743 13.544 2.69296 12.466 2.96157 11.5013C2.08939 11.009 1.5 10.0739 1.5 9C1.5 7.92614 2.08936 6.991 2.96143 6.49878C2.69285 5.53404 2.93744 4.45602 3.69666 3.6968C4.45603 2.93743 5.53399 2.69296 6.49875 2.96157ZM11.7341 6.49602C11.4472 6.28914 11.0469 6.354 10.84 6.6409L8.41363 10.0057L7.11178 8.59068C6.87229 8.33037 6.46714 8.31349 6.20683 8.55297C5.94653 8.79245 5.92964 9.19761 6.16913 9.45791L8.00255 11.4508C8.13284 11.5924 8.31988 11.6679 8.51196 11.6565C8.70405 11.645 8.88081 11.5478 8.99335 11.3917L11.879 7.39009C12.0859 7.10319 12.021 6.70291 11.7341 6.49602Z"
                              fill="#00B493"
                            ></path>
                          </svg>
                        </span>
                        <div className="sub-text">
                          <span>6일 전</span>
                        </div>
                      </div>
                      <div className="preview-description">
                        <span className="description-text">
                          당근은carrot님의 따뜻한 공감 고마워요. 다양한 이웃들이
                          있는 동네생활에서 당근은carrot님의 따뜻함을 보여주세요
                          :)
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="common-bg-hover only-hover css-q6qzi5">
                    <span className="option-controller">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M192 512c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m255.99999999 0c0 35.2 28.8 64 64.00000001 64.00000001s64-28.8 64.00000001-64.00000001-28.8-64-64.00000001-64.00000001-64 28.8-64.00000001 64.00000001z m256.00000001 0c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="css-v2yhcd">
                  <Link
                    className="   css-y6c1l4"
                    href="/room/QMjUyNTc0MjktMzIwODM2MTgtRkxFQS03Mjk5NzExMzg="
                  >
                    <div className="profile-wrapper">
                      <img
                        className="profile-image"
                        src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_256-b36669d6dfa36e7f58fc53d9fdfe689e324263d3cb8f5e079cec249a70bf61fe.png"
                        alt="profile"
                      />
                    </div>
                    <div className="css-qv4ssb">
                      <div className="preview-title-wrap">
                        <span className="preview-nickname">비나래</span>
                        <div className="sub-text">
                          <span>양재동</span>
                          <span> · </span>
                          <span>4달 전</span>
                        </div>
                      </div>
                      <div className="preview-description">
                        <span className="description-text">
                          네 감사합니다🙂
                        </span>
                      </div>
                    </div>
                    <img
                      src="https://dnvefa72aowie.cloudfront.net/origin/article/202403/014a4db00db0551657247f0fc2900e02ba0fe91bf1de82a5803a851da12fb4a1_0.webp?f=webp&amp;q=95&amp;s=300x300&amp;t=inside"
                      className="preview-image"
                      alt="에버랜드 자유이용권 1매 (~ 3.31)"
                    />
                  </Link>
                  <div className="common-bg-hover only-hover css-q6qzi5">
                    <span className="option-controller">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M192 512c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m255.99999999 0c0 35.2 28.8 64 64.00000001 64.00000001s64-28.8 64.00000001-64.00000001-28.8-64-64.00000001-64.00000001-64 28.8-64.00000001 64.00000001z m256.00000001 0c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="css-v2yhcd">
                  <Link
                    className="   css-y6c1l4"
                    href="/room/QMjUyNTc0MjktMjk3MjcxOTQtRkxFQS03MzI0Nzg3MDg="
                  >
                    <div className="profile-wrapper">
                      <img
                        className="profile-image"
                        src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_256-b36669d6dfa36e7f58fc53d9fdfe689e324263d3cb8f5e079cec249a70bf61fe.png"
                        alt="profile"
                      />
                    </div>
                    <div className="css-qv4ssb">
                      <div className="preview-title-wrap">
                        <span className="preview-nickname">바람의검심</span>
                        <div className="sub-text">
                          <span>역삼동</span>
                          <span> · </span>
                          <span>4달 전</span>
                        </div>
                      </div>
                      <div className="preview-description">
                        <span className="description-text">감사합니다</span>
                      </div>
                    </div>
                    <img
                      src="https://dnvefa72aowie.cloudfront.net/origin/article/202403/13ab025ac15c85a14d6a16c73c3c5792ce5cc5a46e982cfe256ebc84d42cef23.jpg?f=webp&amp;q=95&amp;s=300x300&amp;t=inside"
                      className="preview-image"
                      alt="스타벅스 교환권 10만원(9.2)/2만원(1.8) 판매합니다"
                    />
                  </Link>
                  <div className="common-bg-hover only-hover css-q6qzi5">
                    <span className="option-controller">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M192 512c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m255.99999999 0c0 35.2 28.8 64 64.00000001 64.00000001s64-28.8 64.00000001-64.00000001-28.8-64-64.00000001-64.00000001-64 28.8-64.00000001 64.00000001z m256.00000001 0c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="css-v2yhcd">
                  <Link
                    className="   css-y6c1l4"
                    href="/room/COTQwODA2LTI1MjU3NDI5LUZMRUEtNzMyNDc4NzA4"
                  >
                    <div className="profile-wrapper">
                      <img
                        className="profile-image"
                        src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_256-b36669d6dfa36e7f58fc53d9fdfe689e324263d3cb8f5e079cec249a70bf61fe.png"
                        alt="profile"
                      />
                    </div>
                    <div className="css-qv4ssb">
                      <div className="preview-title-wrap">
                        <span className="preview-nickname">로하맘</span>
                        <div className="sub-text">
                          <span>개포1동</span>
                          <span> · </span>
                          <span>4달 전</span>
                        </div>
                      </div>
                      <div className="preview-description">
                        <span className="description-text">
                          이모티콘을 보냈어요.
                        </span>
                      </div>
                    </div>
                    <img
                      src="https://dnvefa72aowie.cloudfront.net/origin/article/202403/13ab025ac15c85a14d6a16c73c3c5792ce5cc5a46e982cfe256ebc84d42cef23.jpg?f=webp&amp;q=95&amp;s=300x300&amp;t=inside"
                      className="preview-image"
                      alt="스타벅스 교환권 10만원(9.2)/2만원(1.8) 판매합니다"
                    />
                  </Link>
                  <div className="common-bg-hover only-hover css-q6qzi5">
                    <span className="option-controller">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M192 512c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m255.99999999 0c0 35.2 28.8 64 64.00000001 64.00000001s64-28.8 64.00000001-64.00000001-28.8-64-64.00000001-64.00000001-64 28.8-64.00000001 64.00000001z m256.00000001 0c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="css-v2yhcd">
                  <Link
                    className="   css-y6c1l4"
                    href="/room/QMTM1MzQ1MTQtMjUyNTc0MjktRkxFQS03MzI0Nzg3MDg="
                  >
                    <div className="profile-wrapper">
                      <img
                        className="profile-image"
                        src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_256-b36669d6dfa36e7f58fc53d9fdfe689e324263d3cb8f5e079cec249a70bf61fe.png"
                        alt="profile"
                      />
                    </div>
                    <div className="css-qv4ssb">
                      <div className="preview-title-wrap">
                        <span className="preview-nickname">죠이</span>
                        <div className="sub-text">
                          <span>삼성동</span>
                          <span> · </span>
                          <span>4달 전</span>
                        </div>
                      </div>
                      <div className="preview-description">
                        <span className="description-text">넵</span>
                      </div>
                    </div>
                    <img
                      src="https://dnvefa72aowie.cloudfront.net/origin/article/202403/13ab025ac15c85a14d6a16c73c3c5792ce5cc5a46e982cfe256ebc84d42cef23.jpg?f=webp&amp;q=95&amp;s=300x300&amp;t=inside"
                      className="preview-image"
                      alt="스타벅스 교환권 10만원(9.2)/2만원(1.8) 판매합니다"
                    />
                  </Link>
                  <div className="common-bg-hover only-hover css-q6qzi5">
                    <span className="option-controller">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M192 512c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m255.99999999 0c0 35.2 28.8 64 64.00000001 64.00000001s64-28.8 64.00000001-64.00000001-28.8-64-64.00000001-64.00000001-64 28.8-64.00000001 64.00000001z m256.00000001 0c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="css-v2yhcd">
                  <Link
                    className="   css-y6c1l4"
                    href="/room/QMjUyNTc0MjktNTIyMzE2OTEtRkxFQS03MzI0Nzg3MDg="
                  >
                    <div className="profile-wrapper">
                      <img
                        className="profile-image"
                        src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_256-b36669d6dfa36e7f58fc53d9fdfe689e324263d3cb8f5e079cec249a70bf61fe.png"
                        alt="profile"
                      />
                    </div>
                    <div className="css-qv4ssb">
                      <div className="preview-title-wrap">
                        <span className="preview-nickname">황씨</span>
                        <div className="sub-text">
                          <span>답십리제1동</span>
                          <span> · </span>
                          <span>4달 전</span>
                        </div>
                      </div>
                      <div className="preview-description">
                        <span className="description-text">
                          거래완료했습니다ㅠ
                        </span>
                      </div>
                    </div>
                    <img
                      src="https://dnvefa72aowie.cloudfront.net/origin/article/202403/13ab025ac15c85a14d6a16c73c3c5792ce5cc5a46e982cfe256ebc84d42cef23.jpg?f=webp&amp;q=95&amp;s=300x300&amp;t=inside"
                      className="preview-image"
                      alt="스타벅스 교환권 10만원(9.2)/2만원(1.8) 판매합니다"
                    />
                  </Link>
                  <div className="common-bg-hover only-hover css-q6qzi5">
                    <span className="option-controller">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M192 512c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m255.99999999 0c0 35.2 28.8 64 64.00000001 64.00000001s64-28.8 64.00000001-64.00000001-28.8-64-64.00000001-64.00000001-64 28.8-64.00000001 64.00000001z m256.00000001 0c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="css-v2yhcd">
                  <Link
                    className="   css-y6c1l4"
                    href="/room/QMjUyNTc0MjktMjkyODQ5NzAtRkxFQS03MzI0Nzg3MDg="
                  >
                    <div className="profile-wrapper">
                      <img
                        className="profile-image"
                        src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_256-b36669d6dfa36e7f58fc53d9fdfe689e324263d3cb8f5e079cec249a70bf61fe.png"
                        alt="profile"
                      />
                    </div>
                    <div className="css-qv4ssb">
                      <div className="preview-title-wrap">
                        <span className="preview-nickname">어썸혁</span>
                        <div className="sub-text">
                          <span>삼성동</span>
                          <span> · </span>
                          <span>4달 전</span>
                        </div>
                      </div>
                      <div className="preview-description">
                        <span className="description-text">
                          감사합니다. 잘 받았습니다🌈🌈🎄☃️
                        </span>
                      </div>
                    </div>
                    <img
                      src="https://dnvefa72aowie.cloudfront.net/origin/article/202403/13ab025ac15c85a14d6a16c73c3c5792ce5cc5a46e982cfe256ebc84d42cef23.jpg?f=webp&amp;q=95&amp;s=300x300&amp;t=inside"
                      className="preview-image"
                      alt="스타벅스 교환권 10만원(9.2)/2만원(1.8) 판매합니다"
                    />
                  </Link>
                  <div className="common-bg-hover only-hover css-q6qzi5">
                    <span className="option-controller">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M192 512c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m255.99999999 0c0 35.2 28.8 64 64.00000001 64.00000001s64-28.8 64.00000001-64.00000001-28.8-64-64.00000001-64.00000001-64 28.8-64.00000001 64.00000001z m256.00000001 0c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="css-v2yhcd">
                  <Link
                    className="   css-y6c1l4"
                    href="/room/QMjUyNTc0MjktMzA2NjgwMTYtRkxFQS00ODIwMjA1MjM="
                  >
                    <div className="profile-wrapper">
                      <img
                        className="profile-image"
                        src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_256-b36669d6dfa36e7f58fc53d9fdfe689e324263d3cb8f5e079cec249a70bf61fe.png"
                        alt="profile"
                      />
                    </div>
                    <div className="css-qv4ssb">
                      <div className="preview-title-wrap">
                        <span className="preview-nickname">옷짱정리</span>
                        <div className="sub-text">
                          <span>서현2동</span>
                          <span> · </span>
                          <span>2년 전</span>
                        </div>
                      </div>
                      <div className="preview-description">
                        <span className="description-text">먼가 간지나</span>
                      </div>
                    </div>
                  </Link>
                  <div className="common-bg-hover only-hover css-q6qzi5">
                    <span className="option-controller">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M192 512c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m255.99999999 0c0 35.2 28.8 64 64.00000001 64.00000001s64-28.8 64.00000001-64.00000001-28.8-64-64.00000001-64.00000001-64 28.8-64.00000001 64.00000001z m256.00000001 0c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="css-v2yhcd">
                  <Link
                    className="   css-y6c1l4"
                    href="/room/QMjUyNTc0MjktMzA2NjgwMTYtRkxFQS00NTI1NDY0ODU="
                  >
                    <div className="profile-wrapper">
                      <img
                        className="profile-image"
                        src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_256-b36669d6dfa36e7f58fc53d9fdfe689e324263d3cb8f5e079cec249a70bf61fe.png"
                        alt="profile"
                      />
                    </div>
                    <div className="css-qv4ssb">
                      <div className="preview-title-wrap">
                        <span className="preview-nickname">옷짱정리</span>
                        <div className="sub-text">
                          <span>서현2동</span>
                          <span> · </span>
                          <span>2년 전</span>
                        </div>
                      </div>
                      <div className="preview-description">
                        <span className="description-text">야후</span>
                      </div>
                    </div>
                    <img
                      src="https://dnvefa72aowie.cloudfront.net/origin/article/202208/5865F43F505322FEFD190ECED2DB27A792F110855471289568CDCD5B1BEEFC08.jpg?f=webp&amp;q=95&amp;s=300x300&amp;t=inside"
                      className="preview-image"
                      alt="러닝하이 볼레로 가디건"
                    />
                  </Link>
                  <div className="common-bg-hover only-hover css-q6qzi5">
                    <span className="option-controller">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M192 512c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m255.99999999 0c0 35.2 28.8 64 64.00000001 64.00000001s64-28.8 64.00000001-64.00000001-28.8-64-64.00000001-64.00000001-64 28.8-64.00000001 64.00000001z m256.00000001 0c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="css-v2yhcd">
                  <Link
                    className="   css-y6c1l4"
                    href="/room/QMjUyNTc0MjktMzA2NjgwMTYtRkxFQS00NTI1NDU4MDI="
                  >
                    <div className="profile-wrapper">
                      <img
                        className="profile-image"
                        src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_256-b36669d6dfa36e7f58fc53d9fdfe689e324263d3cb8f5e079cec249a70bf61fe.png"
                        alt="profile"
                      />
                    </div>
                    <div className="css-qv4ssb">
                      <div className="preview-title-wrap">
                        <span className="preview-nickname">옷짱정리</span>
                        <div className="sub-text">
                          <span>서현2동</span>
                          <span> · </span>
                          <span>2년 전</span>
                        </div>
                      </div>
                      <div className="preview-description">
                        <span className="description-text">네유</span>
                      </div>
                    </div>
                    <img
                      src="https://dnvefa72aowie.cloudfront.net/origin/article/202208/68A1272089213ED9DB19C2386EA586FFC84E60706BB2B8F55B15DE719D9E5BE4.jpg?f=webp&amp;q=95&amp;s=300x300&amp;t=inside"
                      className="preview-image"
                      alt="네스티팬시클럽 레이스 나시 가디건 코디 세트"
                    />
                  </Link>
                  <div className="common-bg-hover only-hover css-q6qzi5">
                    <span className="option-controller">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M192 512c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m255.99999999 0c0 35.2 28.8 64 64.00000001 64.00000001s64-28.8 64.00000001-64.00000001-28.8-64-64.00000001-64.00000001-64 28.8-64.00000001 64.00000001z m256.00000001 0c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="css-v2yhcd">
                  <Link
                    className="   css-y6c1l4"
                    href="/room/QMjUyNTc0MjktMzA2NjgwMTYtRkxFQS00ODIwMTg1MDc="
                  >
                    <div className="profile-wrapper">
                      <img
                        className="profile-image"
                        src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_256-b36669d6dfa36e7f58fc53d9fdfe689e324263d3cb8f5e079cec249a70bf61fe.png"
                        alt="profile"
                      />
                    </div>
                    <div className="css-qv4ssb">
                      <div className="preview-title-wrap">
                        <span className="preview-nickname">옷짱정리</span>
                        <div className="sub-text">
                          <span>서현2동</span>
                          <span> · </span>
                          <span>2년 전</span>
                        </div>
                      </div>
                      <div className="preview-description">
                        <span className="description-text">와우!</span>
                      </div>
                    </div>
                    <img
                      src="https://dnvefa72aowie.cloudfront.net/origin/article/202210/6409DCA8DA936C30958E5B17D71345BEB2974221A162F8039E1849C7F5BEFF98.jpg?f=webp&amp;q=95&amp;s=300x300&amp;t=inside"
                      className="preview-image"
                      alt="아이폰 12 PRO 골드 256GB 풀박"
                    />
                  </Link>
                  <div className="common-bg-hover only-hover css-q6qzi5">
                    <span className="option-controller">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M192 512c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m255.99999999 0c0 35.2 28.8 64 64.00000001 64.00000001s64-28.8 64.00000001-64.00000001-28.8-64-64.00000001-64.00000001-64 28.8-64.00000001 64.00000001z m256.00000001 0c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="css-v2yhcd">
                  <Link
                    className="   css-y6c1l4"
                    href="/room/QMTkxMzgxODctMjUyNTc0MjktRkxFQS0yOTQwMDE4NDI="
                  >
                    <div className="profile-wrapper">
                      <img
                        className="profile-image"
                        src="https://dnvefa72aowie.cloudfront.net/origin/profile/202101/4a7a7346172695d3c08e2d38167ba0c54be0ca3a7eba26c1a7778732e79c8a3b.webp?f=webp&amp;q=82&amp;s=80x80&amp;t=crop"
                        alt="profile"
                      />
                    </div>
                    <div className="css-qv4ssb">
                      <div className="preview-title-wrap">
                        <span className="preview-nickname">라니</span>
                        <div className="sub-text">
                          <span>논현동</span>
                          <span> · </span>
                          <span>3년 전</span>
                        </div>
                      </div>
                      <div className="preview-description">
                        <span className="description-text">
                          잘쓰겠습니다 감사합니다!
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="common-bg-hover only-hover css-q6qzi5">
                    <span className="option-controller">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M192 512c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m255.99999999 0c0 35.2 28.8 64 64.00000001 64.00000001s64-28.8 64.00000001-64.00000001-28.8-64-64.00000001-64.00000001-64 28.8-64.00000001 64.00000001z m256.00000001 0c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="css-v2yhcd">
                  <Link
                    className="   css-y6c1l4"
                    href="/room/QMjUxMTA0MjAtMjUyNTc0MjktRkxFQS0yOTMwNTMzMDc="
                  >
                    <div className="profile-wrapper">
                      <img
                        className="profile-image"
                        src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_256-b36669d6dfa36e7f58fc53d9fdfe689e324263d3cb8f5e079cec249a70bf61fe.png"
                        alt="profile"
                      />
                    </div>
                    <div className="css-qv4ssb">
                      <div className="preview-title-wrap">
                        <span className="preview-nickname">LoloZouai</span>
                        <div className="sub-text">
                          <span>대치동</span>
                          <span> · </span>
                          <span>3년 전</span>
                        </div>
                      </div>
                      <div className="preview-description">
                        <span className="description-text">
                          이미 예약중입니다ㅜ
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="common-bg-hover only-hover css-q6qzi5">
                    <span className="option-controller">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M192 512c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m255.99999999 0c0 35.2 28.8 64 64.00000001 64.00000001s64-28.8 64.00000001-64.00000001-28.8-64-64.00000001-64.00000001-64 28.8-64.00000001 64.00000001z m256.00000001 0c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="css-v2yhcd">
                  <Link
                    className="   css-y6c1l4"
                    href="/room/QMTA1NzQwMjUtMjUyNTc0MjktRkxFQS0yOTQ0MDEzNTc="
                  >
                    <div className="profile-wrapper">
                      <img
                        className="profile-image"
                        src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_256-b36669d6dfa36e7f58fc53d9fdfe689e324263d3cb8f5e079cec249a70bf61fe.png"
                        alt="profile"
                      />
                    </div>
                    <div className="css-qv4ssb">
                      <div className="preview-title-wrap">
                        <span className="preview-nickname">서울</span>
                        <div className="sub-text">
                          <span>역삼동</span>
                          <span> · </span>
                          <span>3년 전</span>
                        </div>
                      </div>
                      <div className="preview-description">
                        <span className="description-text">넵!</span>
                      </div>
                    </div>
                  </Link>
                  <div className="common-bg-hover only-hover css-q6qzi5">
                    <span className="option-controller">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M192 512c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m255.99999999 0c0 35.2 28.8 64 64.00000001 64.00000001s64-28.8 64.00000001-64.00000001-28.8-64-64.00000001-64.00000001-64 28.8-64.00000001 64.00000001z m256.00000001 0c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="css-v2yhcd">
                  <Link
                    className="   css-y6c1l4"
                    href="/room/QMTk2MTU3NzYtMjUyNTc0MjktRkxFQS0yODcwODQ4ODc="
                  >
                    <div className="profile-wrapper">
                      <img
                        className="profile-image"
                        src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_256-b36669d6dfa36e7f58fc53d9fdfe689e324263d3cb8f5e079cec249a70bf61fe.png"
                        alt="profile"
                      />
                    </div>
                    <div className="css-qv4ssb">
                      <div className="preview-title-wrap">
                        <span className="preview-nickname">조앙</span>
                        <div className="sub-text">
                          <span>반포동</span>
                          <span> · </span>
                          <span>3년 전</span>
                        </div>
                      </div>
                      <div className="preview-description">
                        <span className="description-text">아 2020 11월요</span>
                      </div>
                    </div>
                    <img
                      src="https://dnvefa72aowie.cloudfront.net/origin/article/202109/E078FB896CFA2567BFDB5BB5960C9BF78116B45AC2BFE4A3A2AE3B4CB647AF13.jpg?f=webp&amp;q=95&amp;s=300x300&amp;t=inside"
                      className="preview-image"
                      alt="에어팟 프로 미개봉 제품입니다"
                    />
                  </Link>
                  <div className="common-bg-hover only-hover css-q6qzi5">
                    <span className="option-controller">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M192 512c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m255.99999999 0c0 35.2 28.8 64 64.00000001 64.00000001s64-28.8 64.00000001-64.00000001-28.8-64-64.00000001-64.00000001-64 28.8-64.00000001 64.00000001z m256.00000001 0c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="css-v2yhcd">
                  <Link
                    className=" destroyed  css-y6c1l4"
                    href="/room/QMTE0NDQxNTMtMjUyNTc0MjktRkxFQS0yOTE3MzQzMzc="
                  >
                    <div className="profile-wrapper">
                      <img
                        className="profile-image"
                        src="https://dnvefa72aowie.cloudfront.net/rocket-chat/assets/profile_default.png"
                        alt="profile"
                      />
                    </div>
                    <div className="css-qv4ssb">
                      <div className="preview-title-wrap">
                        <span className="preview-nickname">
                          싸게팔아요 (탈퇴)
                        </span>
                        <div className="sub-text">
                          <span>역삼2동</span>
                          <span> · </span>
                          <span>3년 전</span>
                        </div>
                      </div>
                      <div className="preview-description">
                        <span className="description-text">
                          이 전화번호는 싸게팔아요님이 당근마켓에 가입한
                          전화번호와 다른 번호입니다.
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="common-bg-hover only-hover css-q6qzi5">
                    <span className="option-controller">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M192 512c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m255.99999999 0c0 35.2 28.8 64 64.00000001 64.00000001s64-28.8 64.00000001-64.00000001-28.8-64-64.00000001-64.00000001-64 28.8-64.00000001 64.00000001z m256.00000001 0c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="css-v2yhcd">
                  <Link
                    className="   css-y6c1l4"
                    href="/room/QMjUyNTc0MjktNDQ3OTUwMjctRkxFQS0yOTMwNjI5MzA="
                  >
                    <div className="profile-wrapper">
                      <img
                        className="profile-image"
                        src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_256-b36669d6dfa36e7f58fc53d9fdfe689e324263d3cb8f5e079cec249a70bf61fe.png"
                        alt="profile"
                      />
                    </div>
                    <div className="css-qv4ssb">
                      <div className="preview-title-wrap">
                        <span className="preview-nickname">닉네임</span>
                        <div className="sub-text">
                          <span>금곡동</span>
                          <span> · </span>
                          <span>3년 전</span>
                        </div>
                      </div>
                      <div className="preview-description">
                        <span className="description-text">알겠습니다!</span>
                      </div>
                    </div>
                  </Link>
                  <div className="common-bg-hover only-hover css-q6qzi5">
                    <span className="option-controller">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M192 512c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m255.99999999 0c0 35.2 28.8 64 64.00000001 64.00000001s64-28.8 64.00000001-64.00000001-28.8-64-64.00000001-64.00000001-64 28.8-64.00000001 64.00000001z m256.00000001 0c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="css-v2yhcd">
                  <Link
                    className="   css-y6c1l4"
                    href="/room/QMTQ2NTY2OTYtMjUyNTc0MjktRkxFQS0yODQ3NjAwMjg="
                  >
                    <div className="profile-wrapper">
                      <img
                        className="profile-image"
                        src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_256-b36669d6dfa36e7f58fc53d9fdfe689e324263d3cb8f5e079cec249a70bf61fe.png"
                        alt="profile"
                      />
                    </div>
                    <div className="css-qv4ssb">
                      <div className="preview-title-wrap">
                        <span className="preview-nickname">모리</span>
                        <div className="sub-text">
                          <span>백현동</span>
                          <span> · </span>
                          <span>3년 전</span>
                        </div>
                      </div>
                      <div className="preview-description">
                        <span className="description-text">넵 알겠습니당</span>
                      </div>
                    </div>
                  </Link>
                  <div className="common-bg-hover only-hover css-q6qzi5">
                    <span className="option-controller">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M192 512c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m255.99999999 0c0 35.2 28.8 64 64.00000001 64.00000001s64-28.8 64.00000001-64.00000001-28.8-64-64.00000001-64.00000001-64 28.8-64.00000001 64.00000001z m256.00000001 0c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="css-v2yhcd">
                  <Link
                    className="   css-y6c1l4"
                    href="/room/JMTUxMDQ3Ni0yNTI1NzQyOS1GTEVBLTE0MTkxNjUyOQ=="
                  >
                    <div className="profile-wrapper">
                      <img
                        className="profile-image"
                        src="https://dnvefa72aowie.cloudfront.net/origin/profile/202207/211BD70EBDA409FFCDEE0411F744DA4B31EE8ECA96565CA190CB211DD138D762.jpg?f=webp&amp;q=82&amp;s=80x80&amp;t=crop"
                        alt="profile"
                      />
                    </div>
                    <div className="css-qv4ssb">
                      <div className="preview-title-wrap">
                        <span className="preview-nickname">하은맘</span>
                        <div className="sub-text">
                          <span>동천동</span>
                          <span> · </span>
                          <span>4년 전</span>
                        </div>
                      </div>
                      <div className="preview-description">
                        <span className="description-text">
                          집 앞까지 갈게요오....
                        </span>
                      </div>
                    </div>
                    <img
                      src="https://dnvefa72aowie.cloudfront.net/origin/article/202010/0B6489773E4E4A0B9B5BD1D1AE01EC232524C4F6757960D646937780D0726CD1.jpg?f=webp&amp;q=95&amp;s=300x300&amp;t=inside"
                      className="preview-image"
                      alt="메종키츠네 여성 xs"
                    />
                  </Link>
                  <div className="common-bg-hover only-hover css-q6qzi5">
                    <span className="option-controller">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M192 512c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m255.99999999 0c0 35.2 28.8 64 64.00000001 64.00000001s64-28.8 64.00000001-64.00000001-28.8-64-64.00000001-64.00000001-64 28.8-64.00000001 64.00000001z m256.00000001 0c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </li>
                <button className="css-y4ss06">더보기</button>
              </ul>
              <div className="faq-container">
                <Link
                  className="faq-content common-bg-hover"
                  href="https://www.daangn.com/wv/faqs?kind=karrotchat"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="faq-test">자주묻는 질문</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="9" cy="9" r="8.5" stroke="#868B94"></circle>
                    <path
                      d="M8.25586 11.0977C8.26367 10.6328 8.31641 10.2656 8.41406 9.99609C8.51172 9.72656 8.71094 9.42773 9.01172 9.09961L9.7793 8.30859C10.1074 7.9375 10.2715 7.53906 10.2715 7.11328C10.2715 6.70312 10.1641 6.38281 9.94922 6.15234C9.73438 5.91797 9.42188 5.80078 9.01172 5.80078C8.61328 5.80078 8.29297 5.90625 8.05078 6.11719C7.80859 6.32812 7.6875 6.61133 7.6875 6.9668H6.60352C6.61133 6.33398 6.83594 5.82422 7.27734 5.4375C7.72266 5.04688 8.30078 4.85156 9.01172 4.85156C9.75 4.85156 10.3242 5.05078 10.7344 5.44922C11.1484 5.84375 11.3555 6.38672 11.3555 7.07812C11.3555 7.76172 11.0391 8.43555 10.4062 9.09961L9.76758 9.73242C9.48242 10.0488 9.33984 10.5039 9.33984 11.0977H8.25586ZM8.20898 12.9551C8.20898 12.7793 8.26172 12.6328 8.36719 12.5156C8.47656 12.3945 8.63672 12.334 8.84766 12.334C9.05859 12.334 9.21875 12.3945 9.32812 12.5156C9.4375 12.6328 9.49219 12.7793 9.49219 12.9551C9.49219 13.1309 9.4375 13.2773 9.32812 13.3945C9.21875 13.5078 9.05859 13.5645 8.84766 13.5645C8.63672 13.5645 8.47656 13.5078 8.36719 13.3945C8.26172 13.2773 8.20898 13.1309 8.20898 12.9551Z"
                      fill="#868B94"
                    ></path>
                  </svg>
                </Link>
              </div>
            </nav>
          </div>
          <section
            style={{
              borderTop: ".5px solid var(--seed-scale-color-gray-200)",
              borderBottom: ".5px solid var(--seed-scale-color-gray-200)",
            }}
            className="css-am8mw7"
          >
            <div className="css-voabwl">
              <div className="css-1c3oejv">
                <div className="chat-header-profile">
                  <img
                    className="chat-header-image"
                    src="https://dnvefa72aowie.cloudfront.net/origin/user/202308/d58512c05b9677d82b6b1f3be5ddff9cbedfa010bcc2ef1ac49f8d7d00ccd211.png"
                    alt="당근"
                  />
                  <div className="main-title">
                    <span>당근</span>
                    <span className="official-badge-wrapper">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.49875 2.96157C6.99096 2.08939 7.92611 1.5 9 1.5C10.0739 1.5 11.009 2.08936 11.5012 2.96143C12.466 2.69285 13.544 2.93744 14.3032 3.69666C15.0626 4.45603 15.307 5.53399 15.0384 6.49875C15.9106 6.99096 16.5 7.92611 16.5 9C16.5 10.0739 15.9106 11.009 15.0386 11.5012C15.3072 12.466 15.0626 13.544 14.3033 14.3032C13.544 15.0626 12.466 15.307 11.5012 15.0384C11.009 15.9106 10.0739 16.5 9 16.5C7.92614 16.5 6.991 15.9106 6.49878 15.0386C5.53405 15.3072 4.45602 15.0626 3.6968 14.3033C2.93743 13.544 2.69296 12.466 2.96157 11.5013C2.08939 11.009 1.5 10.0739 1.5 9C1.5 7.92614 2.08936 6.991 2.96143 6.49878C2.69285 5.53404 2.93744 4.45602 3.69666 3.6968C4.45603 2.93743 5.53399 2.69296 6.49875 2.96157ZM11.7341 6.49602C11.4472 6.28914 11.0469 6.354 10.84 6.6409L8.41363 10.0057L7.11178 8.59068C6.87229 8.33037 6.46714 8.31349 6.20683 8.55297C5.94653 8.79245 5.92964 9.19761 6.16913 9.45791L8.00255 11.4508C8.13284 11.5924 8.31988 11.6679 8.51196 11.6565C8.70405 11.645 8.88081 11.5478 8.99335 11.3917L11.879 7.39009C12.0859 7.10319 12.021 6.70291 11.7341 6.49602Z"
                          fill="#00B493"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="css-1idbtsb">
                  <div className="more-button-wrapper common-bg-hover ">
                    <svg
                      width="4"
                      height="16"
                      viewBox="0 0 4 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.0002 3.19998C2.7152 3.19998 3.3002 2.61498 3.3002 1.89998C3.3002 1.18498 2.7152 0.599976 2.0002 0.599976C1.2852 0.599976 0.700195 1.18498 0.700195 1.89998C0.700195 2.61498 1.2852 3.19998 2.0002 3.19998Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.0002 6.70001C1.2852 6.70001 0.700195 7.28501 0.700195 8.00001C0.700195 8.71501 1.2852 9.30001 2.0002 9.30001C2.7152 9.30001 3.3002 8.71501 3.3002 8.00001C3.3002 7.28501 2.7152 6.70001 2.0002 6.70001Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.0002 12.8C1.2852 12.8 0.700195 13.385 0.700195 14.1C0.700195 14.815 1.2852 15.4 2.0002 15.4C2.7152 15.4 3.3002 14.815 3.3002 14.1C3.3002 13.385 2.7152 12.8 2.0002 12.8Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                tabIndex="0"
                role="region"
                aria-label="메시지 리스트"
                className="css-13cllyv"
              >
                <div className="day-divider">
                  <div className="date-text">2020년 10월17일</div>
                </div>
                <div id="for-scroll-1" className="for-containment left">
                  <div className=" template-message css-7rih9z">
                    <div className=" css-17oljzs">
                      <img
                        className="profile-image"
                        src="https://dnvefa72aowie.cloudfront.net/origin/user/202308/d58512c05b9677d82b6b1f3be5ddff9cbedfa010bcc2ef1ac49f8d7d00ccd211.png"
                        alt="당근"
                      />
                    </div>
                    <div className="message-wrapper">
                      <div className="css-87inxw">
                        <img
                          className="temp-image "
                          src="https://dnvefa72aowie.cloudfront.net/hoian/guides/first_guide.png"
                          alt="xarkxinxo님, 반갑습니당! 동네 이웃과 거래하기 전, 첫 가이드를 꼭 읽어보세요:)"
                        />
                        <div className="temp-message-wrap">
                          <div className="thumbnail-wrap">
                            <div className="content-wrapper">
                              <div className="content-text">
                                <div className="css-1o46l5b">
                                  <span>
                                    xarkxinxo님, 반갑습니당! 동네 이웃과
                                    거래하기 전, 첫 가이드를 꼭 읽어보세요:)
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="temp-button">
                              모바일에서 확인해주세요.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="css-lty8rs">
                      <div className="message-date">오후 8:41</div>
                    </div>
                  </div>
                </div>
                <div className="day-divider">
                  <div className="date-text">2021년 10월4일</div>
                </div>
                <div id="for-scroll-2" className="for-containment left">
                  <div className=" template-message css-7rih9z">
                    <div className=" css-17oljzs">
                      <img
                        className="profile-image"
                        src="https://dnvefa72aowie.cloudfront.net/origin/user/202308/d58512c05b9677d82b6b1f3be5ddff9cbedfa010bcc2ef1ac49f8d7d00ccd211.png"
                        alt="당근"
                      />
                    </div>
                    <div className="message-wrapper">
                      <div className="css-87inxw">
                        <img
                          className="temp-image "
                          src="https://dnvefa72aowie.cloudfront.net/hoian/guides/prohibition_guide.png"
                          alt="우와! xarkxinxo님, 첫 판매를 환영합니당:) 당근마켓에서는 판매할 수 없는 품목도 있어요. 함께 알아볼까요?"
                        />
                        <div className="temp-message-wrap">
                          <div className="thumbnail-wrap">
                            <div className="content-wrapper">
                              <div className="content-text">
                                <div className="css-1o46l5b">
                                  <span>
                                    우와! xarkxinxo님, 첫 판매를 환영합니당:)
                                    당근마켓에서는 판매할 수 없는 품목도 있어요.
                                    함께 알아볼까요?
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="temp-button">
                              모바일에서 확인해주세요.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="css-lty8rs">
                      <div className="message-date">오전 3:34</div>
                    </div>
                  </div>
                </div>
                <div className="day-divider">
                  <div className="date-text">2024년 7월14일</div>
                </div>
                <div id="for-scroll-3" className="for-containment left">
                  <div className=" template-message css-7rih9z">
                    <div className=" css-17oljzs">
                      <img
                        className="profile-image"
                        src="https://dnvefa72aowie.cloudfront.net/origin/user/202308/d58512c05b9677d82b6b1f3be5ddff9cbedfa010bcc2ef1ac49f8d7d00ccd211.png"
                        alt="당근"
                      />
                    </div>
                    <div className="message-wrapper">
                      <div className="css-87inxw">
                        <img
                          className="temp-image "
                          src="https://dnvefa72aowie.cloudfront.net/hoian/guides/meeting_tip_guide.png"
                          alt="당근은carrot님, 7월 14일에 거래 약속이 있나요? 따뜻한 거래를 위한 팁을 알려드릴게요! 😊"
                        />
                        <div className="temp-message-wrap">
                          <div className="thumbnail-wrap">
                            <div className="content-wrapper">
                              <div className="content-text">
                                <div className="css-1o46l5b">
                                  <span>
                                    당근은carrot님, 7월 14일에 거래 약속이
                                    있나요? 따뜻한 거래를 위한 팁을
                                    알려드릴게요! 😊
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="temp-button">
                              모바일에서 확인해주세요.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="css-lty8rs">
                      <div className="message-date">오후 4:29</div>
                    </div>
                  </div>
                </div>
                <div className="day-divider">
                  <div className="date-text">2024년 7월20일</div>
                </div>
                <div id="for-scroll-4" className="for-containment left">
                  <div className=" template-message css-7rih9z">
                    <div className=" css-17oljzs">
                      <img
                        className="profile-image"
                        src="https://dnvefa72aowie.cloudfront.net/origin/user/202308/d58512c05b9677d82b6b1f3be5ddff9cbedfa010bcc2ef1ac49f8d7d00ccd211.png"
                        alt="당근"
                      />
                    </div>
                    <div className="message-wrapper">
                      <div className="css-87inxw">
                        <div className="temp-message-wrap">
                          <div className="thumbnail-wrap">
                            <div className="content-wrapper">
                              <div className="content-title">
                                내 컴퓨터에서 로그인했어요.
                              </div>
                              <div className="content-text">
                                <div className="css-1o46l5b">
                                  <span>본인이 아니라면 로그아웃해주세요.</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="temp-button">
                              모바일에서 확인해주세요.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="css-lty8rs">
                      <div className="message-date">오후 6:05</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="css-h6e9fd">
              <Link
                href="https://www.daangn.com/wv/faqs?kind=karrotchat"
                target="_blank"
                rel="noreferrer"
              >
                <button className="qna-button">자주 묻는 질문 보기</button>
              </Link>
            </div>
          </section>

          <div className="css-1oteowz"></div>
        </div>
      </article>
    </>
  );
}
