"use client"
import React, { useState, useEffect, useRef } from "react";
import SockJS from "sockjs-client";
import axios from "axios";
import { Stomp } from "@stomp/stompjs";
import dayjs from 'dayjs'
import { Octokit } from "octokit";
import { Alert, Pagination } from "@mui/material";
import Link from "next/link";
import "/public/css/chat.css";
import Cookies from "js-cookie";

const ChatApp = () => {
  const [chatRooms, setChatRooms] = useState([]);
  const [currentchatroomkey, setCurrentchatroomkey] = useState("");
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [sender, setSender] = useState("");
  const [another, setAnother] = useState("");
  const [subscription, setSubscription] = useState(null);
  const [beforeChat, setBeforeChat] = useState([]);
  const [isMultiContentInputVisible, setIsMultiContentInputVisible] = useState(false);
  const [emojis, setEmojis] = useState({});
  const [currentEmojiPage, setCurrentEmojiPage] = useState(1);
  const [emojiTotalPage, setEmojiTotalPage] = useState(5);
  const [emoticons, setEmoticons] = useState([]);
  const [currentEmoticonPage, setCurrentEmoticonPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const oneTime = useRef(false);
  const socket = useRef(null);
  const ws = useRef(null);
  const userkey = Cookies.get("userkey");
  // 이모지 관련 선언
  const emojisPerPage = 64;
  const indexOfLastEmoji = currentEmojiPage * emojisPerPage;
  const indexOfFirstEmoji = indexOfLastEmoji - emojisPerPage;
  const tempEntries = Object.entries(emojis);
  const emojiEntries = tempEntries.filter(([name, url]) => url.includes('unicode/') && !url.includes('-'));
  const currentEmojis = emojiEntries.slice(indexOfFirstEmoji, indexOfLastEmoji);
  const emojiRows = 8;
  const emojiColumns = 8;

  // 이모티콘 관련 선언
  const emoticonPerPage = 4;
  const emoticonTotal = 16;
  const indexOfLastEmoticon = currentEmoticonPage * emoticonPerPage;
  const indexOfFirstEmoticon = indexOfLastEmoticon - emoticonPerPage;
  const emoticonTotalPage = Math.ceil(emoticonTotal / emoticonPerPage);
  const currentEmoticon = useRef(null);
  const currentEmoticonkey = useRef(0);

  // 내 정보
  const myImageUrl = useRef(null);
  const myName = useRef(null);

  // 판매글 정보
  const postTitle = useRef(null);
  const postImg_Url = useRef(null);

  const fileInputRef = useRef(null);
  const chatScrollRef = useRef(null);

  useEffect(() => {
    if (oneTime.current) {
      return;
    }
    axios.get(`/chat/rooms?userkey=${userkey}`).then(response => {
      const res = response.data;
      myImageUrl.current = res.my_info.imgurl;
      myName.current = res.my_info.nickname;
      setChatRooms(res.chatRooms.map((item, index) => ({
        chatroomkey: item.chatroomkey,
        name: item.postkey,
        user_img_url: res.user_list[index].imgurl,
        anotherName: res.user_list[index].nickname,
      })));
    });
    const octokit = new Octokit({
      auth: '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'
    });

    octokit.request('GET /emojis', {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    }).then(res => {
      setEmojis(res.data);
    });
    setSender(userkey);
    oneTime.current = true;
  }, []);

  const addMessage = (recv) => {
    if (!Array.isArray(recv)) {
      recv = [recv];
    }
    recv.map((item, index) => {
      let result;

      if (item.content === "7KCI64yA7LmY7KeA66eI7ZmY7JiB7ZWp64uI64uk7ZmY7JiB7ZW07JqU7ZmY7JiB7ZW07ZmY7JiB7KCI64yA7LmY7KeA66eI") {
        result = (
          <div className="css-87inxw">
            <img
              className="temp-image"
              src="https://dnvefa72aowie.cloudfront.net/hoian/guides/prohibition_guide.png"
              alt="우와!"
            />
            <div className="temp-message-wrap">
              <div className="thumbnail-wrap">
                <div className="content-wrapper">
                  <div className="content-text">
                    <div className="css-1o46l5b">
                      <span>
                        우와! 거래를 환영합니당:
                        당근마켓에서는 판매할 수 없는 품목도 있어요.
                        함께 알아볼까요?
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="temp-button">바로가기</div>
              </div>
            </div>
          </div>
        );
      } else {
        // 일반 메시지 로직
        const isFirstReceived = item.userkey1 !== sender && (index === 0 || recv[index - 1]?.userkey1 === sender);
        if (item.userkey1 == sender) {
          result = (
            <div className="message-container sent">
              <div className="message">
                {item.chattingimg_url ? (
                  <img src={item.chattingimg_url} style={{ width: '196px', height: '196px' }} />
                ) : item.img_url ? (
                  <img src={item.img_url} style={{ width: '196px', height: '196px' }} />
                ) : (
                  <p>{item.content}</p>
                )}
                <span className="timestamp">{dayjs(item.create_dtm).format('hh:mm A')}</span>
              </div>
            </div>
          );
        } else {
          result = (
            <div className="message-container received">
              {isFirstReceived && (
                <div className="profile-wrapper">
                  <img
                    className="profile-image"
                    src={chatRooms[currentUserIndex].user_img_url}
                    alt="profile"
                  />
                </div>
              )}
              <div className="message">
                {item.chattingimg_url ? (
                  <img src={item.chattingimg_url} style={{ width: '196px', height: '196px' }} />
                ) : item.img_url ? (
                  <img src={item.img_url} style={{ width: '196px', height: '196px' }} />
                ) : (
                  <p>{item.content}</p>
                )}
                <span className="timestamp">{dayjs(item.create_dtm).format('hh:mm A')}</span>
              </div>
            </div>
          );
        }
      }
      setChatLog((prevChatLog) => [...prevChatLog, result]);
    });
  };

  useEffect(() => {
    const connect = () => {
      disconnect();
      if (ws.connect != null) {
        return;
      }
      socket.current = new SockJS("/ws-stomp");
      ws.current = Stomp.over(socket.current);
      let reconnect = 0;
      ws.current.connect(
        {},
        (frame) => {
          setSubscription(ws.current.subscribe("/sub/chat/room/" + currentchatroomkey, (message) => {
            let recv = JSON.parse(message.body);
            recvMessage(recv);
          }));
        },
        (error) => {
          if (reconnect++ <= 5) {
            setTimeout(() => {
              socket.current = new SockJS("/ws-stomp");
              ws.current = Stomp.over(socket.current);
              connect();
            }, 10 * 100);
          }
        }
      );
    };
    // 채팅 기록 가져옴
    const savedChats = async () => {
      if (currentchatroomkey == "" || currentchatroomkey == null) {
        return;
      }
      await axios.get(`/chat/room/${currentchatroomkey}`).then(response => {
        const res = response.data;
        postTitle.current = res.pvo.title;
        postImg_Url.current = res.pvo.imgurl;
        setBeforeChat(res.chattingList.map(item => ({
          content: item.content,
          userkey1: item.userkey1,
          userkey2: item.userkey2,
          create_dtm: item.create_dtm,
          img_url: item.img_url,
          chattingimg_url: item.chattingimg_url,
        })))
      });
    }
    connect();
    savedChats();
    setMessage("");
  }, [currentchatroomkey]);

  // 이전 채팅 가져오면서 상대방 키 저장
  useEffect(() => {
    if (beforeChat.length > 0) {
      addMessage(beforeChat);
      if (beforeChat[0].userkey2 == sender) {
        setAnother(beforeChat[0].userkey1);
      } else {
        setAnother(beforeChat[0].userkey2);
      }
    }
  }, [beforeChat]);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [chatLog]);

  // 이모티콘 페이지 변경 시 가져옴
  useEffect(() => {
    getEmoticon();
  }, [currentEmoticonPage])

  useEffect(() => {
    if (imageUrl != null && imageUrl != "") {
      sendMessage();
    }
  }, [imageUrl]);

  useEffect(() => {
    console.log(chatRooms);
  }, [chatRooms])

  const connectRoom = (chatroomkey, index) => {
    if (chatroomkey != currentchatroomkey) {
      setCurrentchatroomkey(chatroomkey);
      setCurrentUserIndex(index);
    }
  };

  const recvMessage = (recv) => {
    addMessage(recv);
  };

  const sendMessage = () => {
    if (!ws.current || !ws.current.connected) {
      console.error('아직 연결되지 않음');
      return;
    }
    let chattingEmojikey = currentEmoticonkey.current;
    let chattingEmoticon = currentEmoticon.current;
    let currentTime = dayjs();
    ws.current.send(
      "/pub/chat/message",
      {},
      JSON.stringify({
        chatroomkey: currentchatroomkey,
        userkey1: sender,
        userkey2: another,
        content: message,
        create_dtm: currentTime,
        chattingimg_url: imageUrl,
        ...(chattingEmojikey !== 0 && { chattingemojikey: chattingEmojikey }),
        ...(chattingEmoticon !== 0 && { img_url: chattingEmoticon })
      })
    );
    setImageUrl(null);
    setMessage("");
  };

  const disconnect = () => {
    if (ws.current) {
      // 모든 구독을 해제
      if (subscription) {
        subscription.unsubscribe();
      }
      setSubscription(null); // 구독 목록 초기화
      // WebSocket 연결 종료
      ws.current.disconnect(() => {
        setChatLog([]);
      });
      ws.current = null;
    }
  };

  // 토글
  const toggleEmojiInput = () => {
    setSelectedOption("emoji");
  };

  // 플러스 버튼 클릭 시 컨텐트 영역과 선택된 옵션 모두 초기화
  const toggleContent = () => {
    setIsMultiContentInputVisible((prevState) => !prevState); // 컨텐트 토글
    setSelectedOption(null); // 선택된 옵션 초기화
  };

  const toggleEmoticonInput = () => {
    getEmoticon();
    setSelectedOption("emoticon");
  };

  // 페이지 이동
  const nextPage = () => {
    if (currentEmojiPage < emojiTotalPage) {
      setCurrentEmojiPage(prev => prev + 1);
    }
  };

  const previousPage = () => {
    if (currentEmojiPage > 1) {
      setCurrentEmojiPage(prev => prev - 1);
    }
  }

  // 페이지 이동 핸들러
  const emojiPageChange = (event, newPage) => {
    setCurrentEmojiPage(newPage);
  };

  const emoticonPageChange = (event, newPage) => {
    setCurrentEmoticonPage(newPage);
  };

  // 이모지박스
  const emojiBox = Array.from({ length: emojiRows }, (_, rowIndex) => (
    currentEmojis.slice(rowIndex * emojiColumns, rowIndex * emojiColumns + emojiColumns)
  ));

  // 이모지핸들러
  const addEmoji = (src) => {
    const regex = "(?<=emoji\/)(.*?)(?=\.png)";
    const match = src.match(regex);
    if (match && match[0]) {
      let temp = match[0];
      temp = temp.replace("unicode/", "");
      const emoji = String.fromCodePoint(parseInt(temp, 16));
      setMessage(prevState => prevState + emoji);
    }
  }

  // 이모티콘박스
  const getEmoticon = () => {
    axios.get('/chat/emoticon', {
      params: {
        cPage: currentEmoticonPage,
      }
    }).then(response => {
      const res = response.data.emoticons;
      setEmoticons(res.map(item => ({
        chattingemojikey: item.chattingemojikey,
        img_url: item.img_url
      })));
    });
  }

  // 이모티콘 핸들
  const addEmoticon = (e) => {
    currentEmoticonkey.current = e.alt;
    currentEmoticon.current = e.src;
    sendMessage();
    currentEmoticonkey.current = 0;
    currentEmoticon.current = null;
  }

  // 파일핸들러
  const handleImageButton = () => {
    fileInputRef.current.click();
  }

  const handleImageChange = (e) => {
    const reader = new FileReader();
    let file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageUrl(reader.result);
    };
  }
  return (
    <>
      <article className="article">
        <nav className="sidebar">
          <Link className="anchor" href="chat">
            <img className="selected profile-image" src={myImageUrl.current} alt="당근은carrot" />
          </Link>
          <div className="nickname-area">{myName.current}님의 채팅방</div>

          <ul tabIndex="0" role="list" aria-label="내 채널 리스트">
            <li>
              {chatRooms.map((chatRoom, index) => (
                <div className="css-y6c1l4" key={index} onClick={() => connectRoom(chatRoom.chatroomkey, index)}>
                  <div className="profile-wrapper">
                    <img className="profile-image" src={chatRoom.user_img_url} alt="profile" />
                  </div>
                  <div className="preview-title-wrap">
                    <span className="preview-nickname">{chatRoom.anotherName}</span>
                    <span className="badge-wrapper"></span>
                    <div className="sub-text">
                      <span className="timestamp">오후 2:30</span>
                    </div>
                  </div>
                </div>
              ))}
            </li>
          </ul>
        </nav>

        <section className="css-voabwl">
          <div className="chat-header-profile">
            <img className="chat-header-image" src={postImg_Url.current} alt="당근" />
            <div className="main-title">
              <span>{postTitle.current}</span>
              <button
                id="logout"
                style={{ backgroundColor: "#ff6f0f24", color: "#ff6f0f" }}
                className="seed-box-button"
                data-scope="button"
                data-part="root"
                type="button"
                data-gtm="gnb_app_download"
                data-size="xsmall"
                data-variant="primaryLow"
              >
                <span className="seed-semantic-typography-label4-bold">
                  <font>로그아웃</font>
                </span>
              </button>
            </div>
          </div>

          <div tabIndex="0" role="region" aria-label="메시지 리스트" className="css-13cllyv">
            {chatLog.map((log, index) => (<React.Fragment key={index}>{log}</React.Fragment>))}
            <div className="message-wrapper">
            </div>
            <div ref={chatScrollRef} />
          </div>

          <div className="message-input">
            <input type="text" placeholder="메시지 보내기" onChange={(e) => setMessage(e.target.value)} className="chat-input" value={message} onKeyUp={(e) => e.key === "Enter" && sendMessage()} readOnly={currentchatroomkey === ""} />
            <button className="toggle-button" onClick={toggleContent}>+</button>
          </div>

          {isMultiContentInputVisible && (
            <div className="multi-content-container">
              <div className="attachment-option">
                <div className="icon photo" onClick={handleImageButton}></div>
                <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" style={{ display: "none" }} />
                <span>사진</span>
              </div>
              <div className="attachment-option">
                <div className="icon payment" onClick={toggleEmojiInput}></div>
                <span>이모지</span>
              </div>
              <div className="attachment-option">
                <div className="icon emoticon" onClick={toggleEmoticonInput}></div>
                <span>이모티콘</span>
              </div>
              <div className="attachment-option">
                <div className="icon schedule"></div>
                <span>약속</span>
              </div>
            </div>
          )}

          {selectedOption === 'photo' && (
            <div className="multi-content-container">
              <div className="attachment-option">
                <div className="icon photo"></div>
                <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" style={{ display: "none" }} />
                <span>사진</span>
              </div>
            </div>
          )}

          {selectedOption === 'emoji' && (
            <div className="emoji-table">
              <div className="pagination-container">
                <Pagination count={emojiTotalPage} defaultPage={1} siblingCount={0} onChange={emojiPageChange} />
              </div>
              <table>
                <tbody>
                  {emojiBox.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map(([name, url], index) => (
                        <td key={index}><img src={url} alt={name} width="32" height="32" className="emoji-cell" onClick={(e) => (addEmoji(e.target.src))} /></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {selectedOption === 'emoticon' && (
            <>
              <div className="pagination-container">
                <Pagination count={emoticonTotalPage} defaultPage={1} siblingCount={0} onChange={emoticonPageChange} />
              </div>
              <div className="emoticon-table">
                {emoticons.map((item) => (
                  <img src={item.img_url} alt={item.chattingemojikey} key={item.chattingemojikey} style={{ width: '128px', height: '128px' }} onClick={(e) => (addEmoticon(e.target))} />
                ))}
              </div>
            </>
          )}
        </section>
      </article>
    </>
  );
}



export default ChatApp;