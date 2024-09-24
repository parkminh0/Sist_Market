import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Footer() {
  const bcUrl = "/admin/board/getAllBc";
  const [bclist, setBclist] = useState([]);
  //const [categorykey,setCategorykey] = useState(0);

  function getData() {  
    axios.get(bcUrl)
    .then((json) => {
        setBclist(json.data.bc_list);
        //setCategorykey(json.data.bc_list.key);
        
    })
    .catch((error) => {
        console.error("데이터 로딩 오류:", error);  
    });
  }

  useEffect(() => {
    getData();
    //console.log("@@@@@@@@@@@@@@@@@@@@@@@"+categorykey);
}, []);

  return (
    <>
      <div className="_6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
        <div className="dmu53n0 _1h4pbgy7g8 _1h4pbgy7kw _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy1u0 _1h4pbgy8g">
          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9vn">
            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy834 _1h4pbgy9w0">
              <div className="_1h4pbgy828">
               
                  <img
                    src="/img/Orange_logo_final.png"
                    alt="당근마켓 로고"
                    style={{ width: "100px", height: "auto" }}
                  />
                
              </div>
              <div className="_1h4pbgy9ug">
                <Link
                  data-gtm="footer_social"
                  className="_1h4pbgy8bk _1h4pbgy8g"
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5969 12.1465C22.5969 6.31998 17.7192 1.59967 11.6984 1.59967C5.67766 1.59967 0.800003 6.31998 0.800003 12.1465C0.800003 17.4106 4.78641 21.7747 9.99344 22.5669V15.1934H7.22282V12.1465H9.99344V9.82155C9.99344 7.1778 11.6209 5.71998 14.1106 5.71998C15.3022 5.71998 16.5519 5.92623 16.5519 5.92623V8.51842H15.1763C13.8248 8.51842 13.3986 9.32936 13.3986 10.1637V12.1419H16.4211L15.9367 15.1887H13.3986V22.5575C18.6105 21.77 22.5969 17.4106 22.5969 12.1465Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Link>
                <Link
                  data-gtm="footer_social"
                  className="_1h4pbgy8bk _1h4pbgy8g"
                  href="#"
                  aria-label="Karrot 인스타그램으로 이동"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6 3.4734C14.4837 3.4734 14.8253 3.48397 15.9641 3.534C17.0171 3.58028 17.5889 3.74971 17.9695 3.89209C18.4736 4.08075 18.8334 4.30616 19.2113 4.67007C19.5892 5.03397 19.8233 5.38046 20.0192 5.86586C20.1671 6.23237 20.343 6.78305 20.3911 7.79699C20.443 8.89367 20.454 9.22257 20.454 11.9995C20.454 14.7764 20.443 15.1053 20.3911 16.202C20.343 17.216 20.1671 17.7666 20.0192 18.1332C19.8233 18.6186 19.5892 18.965 19.2113 19.3289C18.8334 19.6929 18.4736 19.9183 17.9695 20.1069C17.5889 20.2493 17.0171 20.4187 15.9641 20.465C14.8254 20.515 14.4839 20.5256 11.6 20.5256C8.71607 20.5256 8.37452 20.515 7.23588 20.465C6.18289 20.4187 5.61103 20.2493 5.23047 20.1069C4.72636 19.9183 4.36654 19.6929 3.98864 19.3289C3.61073 18.965 3.37666 18.6186 3.18078 18.1332C3.03288 17.7666 2.85694 17.216 2.80888 16.202C2.75692 15.1053 2.74595 14.7764 2.74595 11.9995C2.74595 9.22257 2.75692 8.89367 2.80888 7.79704C2.85694 6.78305 3.03288 6.23237 3.18078 5.86586C3.37666 5.38046 3.61073 5.03397 3.98864 4.67007C4.36654 4.30616 4.72636 4.08075 5.23047 3.89209C5.61103 3.74971 6.18289 3.58028 7.23583 3.534C8.37469 3.48397 8.71624 3.4734 11.6 3.4734ZM11.6 1.59949C8.66686 1.59949 8.29911 1.61146 7.14718 1.66207C5.9976 1.7126 5.21255 1.88838 4.52555 2.14549C3.81535 2.41127 3.21306 2.76688 2.61266 3.34505C2.01226 3.92322 1.64297 4.5032 1.36697 5.18709C1.09997 5.84865 0.917426 6.60462 0.864952 7.71162C0.812393 8.82085 0.800003 9.17502 0.800003 11.9995C0.800003 14.824 0.812393 15.1782 0.864952 16.2874C0.917426 17.3944 1.09997 18.1504 1.36697 18.8119C1.64297 19.4958 2.01226 20.0758 2.61266 20.654C3.21306 21.2321 3.81535 21.5877 4.52555 21.8535C5.21255 22.1106 5.9976 22.2864 7.14718 22.3369C8.29911 22.3876 8.66686 22.3995 11.6 22.3995C14.5331 22.3995 14.9009 22.3876 16.0528 22.3369C17.2024 22.2864 17.9874 22.1106 18.6744 21.8535C19.3846 21.5877 19.9869 21.2321 20.5873 20.654C21.1877 20.0758 21.557 19.4958 21.833 18.8119C22.1 18.1504 22.2825 17.3944 22.335 16.2874C22.3876 15.1782 22.4 14.824 22.4 11.9995C22.4 9.17502 22.3876 8.82085 22.335 7.71162C22.2825 6.60462 22.1 5.84865 21.833 5.18709C21.557 4.5032 21.1877 3.92322 20.5873 3.34505C19.9869 2.76688 19.3846 2.41127 18.6744 2.14549C17.9874 1.88838 17.2024 1.7126 16.0528 1.66207C14.9009 1.61146 14.5331 1.59949 11.6 1.59949ZM11.6 6.65895C8.53704 6.65895 6.05402 9.05001 6.05402 11.9995C6.05402 14.949 8.53704 17.3401 11.6 17.3401C14.6629 17.3401 17.1459 14.949 17.1459 11.9995C17.1459 9.05001 14.6629 6.65895 11.6 6.65895ZM11.6 15.4662C9.61177 15.4662 7.99996 13.9141 7.99996 11.9995C7.99996 10.0849 9.61177 8.53282 11.6 8.53282C13.5882 8.53282 15.2 10.0849 15.2 11.9995C15.2 13.9141 13.5882 15.4662 11.6 15.4662ZM18.661 6.44795C18.661 7.13721 18.0808 7.69598 17.3651 7.69598C16.6493 7.69598 16.069 7.13721 16.069 6.44795C16.069 5.75869 16.6493 5.19997 17.3651 5.19997C18.0808 5.19997 18.661 5.75869 18.661 6.44795Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Link>
                <Link
                  data-gtm="footer_social"
                  className="_1h4pbgy8bk _1h4pbgy8g"
                  href="#"
                  aria-label="Karrot 유튜브로 가세요"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      rule="evenodd"
                      d="M12 0.999512C5.92487 0.999512 1 5.92438 1 11.9995C1 18.0746 5.92487 22.9995 12 22.9995C18.0751 22.9995 23 18.0746 23 11.9995C23 5.92438 18.0751 0.999512 12 0.999512ZM18.7054 7.75759C18.9341 7.97573 19.0999 8.24647 19.1868 8.54362C19.4039 9.68587 19.5085 10.845 19.4995 12.0058C19.5077 13.1622 19.403 14.3169 19.1868 15.4548C19.0999 15.752 18.9341 16.0227 18.7054 16.2409C18.4767 16.459 18.1929 16.6172 17.8814 16.7001C16.6997 16.9995 12.0067 16.9995 12.0067 16.9995C12.0067 16.9995 7.29993 16.9995 6.13199 16.7001C5.82048 16.6172 5.53666 16.459 5.30797 16.2409C5.07927 16.0227 4.91345 15.752 4.82651 15.4548C4.60573 14.3173 4.49646 13.1626 4.50013 12.0058C4.49561 10.8445 4.60487 9.68546 4.82651 8.54362C4.91345 8.24647 5.07927 7.97573 5.30797 7.75759C5.53666 7.53944 5.82048 7.38125 6.13199 7.29832C7.31306 6.99356 12.0067 6.99952 12.0067 6.99952C12.0067 6.99952 16.7122 6.99952 17.8814 7.29832C18.1929 7.38125 18.4767 7.53944 18.7054 7.75759ZM10.5049 9.85751V14.1475L14.4213 12.0058L10.5049 9.85751Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="dmu53n1 _1h4pbgy9vc _1h4pbgy91s">
              <div className="dmu53n2">
                <div className="_1h4pbgy780 _1h4pbgy7ag _1h4pbgy81k">
                  <font>
                    <font>오렌지마켙</font>
                  </font>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs">
                  <Link
                    data-gtm="footer_navigation"
                    className="dmu53n3 _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy8g _1h4pbgy76o _1h4pbgy81c _1h4pbgya28"
                    href="/about_us"
                  >
                    <font>
                      <font>회사 소개</font>
                    </font>
                  </Link>
                  <Link
                    data-gtm="footer_navigation"
                    className="dmu53n3 _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy8g _1h4pbgy76o _1h4pbgy81c _1h4pbgya28"
                    href="/team_introduce"
                  >
                    <font>
                      <font>개발자 소개</font>
                    </font>
                  </Link>
                </div>
              </div>

              <div className="dmu53n2">
              <div className="_1h4pbgy780 _1h4pbgy7ag _1h4pbgy81k">
                <font>오렌지소식</font>
              </div>
              <div className="_1h4pbgy9ug _1h4pbgy9vs">
                {bclist.length > 0 ? (
                  bclist.map((bc, index) => (
                    <Link
                      key={index}
                      className="dmu53n3 _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy8g _1h4pbgy76o _1h4pbgy81c _1h4pbgya28"
                      href={`/Board/list/${bc.key}`} // 각 카테고리의 링크를 설정
                      target="_self"
                    >
                      <font>{bc.value}</font> {/* 카테고리 이름 표시 */}
                    </Link>
                  ))
                ) : (
                  <font>게시판 목록이 없습니다.</font>
                )}
              </div>
            </div>

              
              <div className="dmu53n2">
                <div className="_1h4pbgy780 _1h4pbgy7ag _1h4pbgy81k">
                  <font>
                    <font>고객센터</font>
                  </font>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs">
                  <Link
                    data-gtm="footer_navigation"
                    className="dmu53n3 _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy8g _1h4pbgy76o _1h4pbgy81c _1h4pbgya28"
                    href="/customer"
                    rel="noreferrer noopener"
                  >
                    <font>
                      <font>자주 묻는 질문</font>
                    </font>
                  </Link>
                  <Link
                    data-gtm="footer_navigation"
                    className="dmu53n3 _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy8g _1h4pbgy76o _1h4pbgy81c _1h4pbgya28"
                    href="/customer/question"
                   
                    rel="noreferrer noopener"
                  >
                    <font>
                      <font>문의하기</font>
                    </font>
                  </Link>
                </div>
              </div>
              <div className="dmu53n2">
                <div className="_1h4pbgy780 _1h4pbgy7ag _1h4pbgy81k">
                  <font>
                    <font>약관 및 정책</font>
                  </font>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs">
                  <Link
                    data-gtm="footer_navigation"
                    className="dmu53n3 _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy8g _1h4pbgy76o _1h4pbgy81c _1h4pbgya28"
                    href="/Board/terms"
                    rel="noreferrer noopener"
                  >
                    <font>
                      <font>서비스 이용약관</font>
                    </font>
                  </Link>
                  <Link
                    href={{ pathname: '/Board/terms', query: { term: '개인정보 처리방침' } }}
                    data-gtm="footer_navigation"
                    className="dmu53n3 _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy8g _1h4pbgy76o _1h4pbgy81c _1h4pbgya28"
                    rel="noreferrer noopener"
                  >
                    <font>
                      <font>개인정보 처리방침</font>
                    </font>
                  </Link>
                  <Link
                    href={{ pathname: '/Board/terms', query: { term: '위치기반 서비스 이용약관' } }}
                    data-gtm="footer_navigation"
                    className="dmu53n3 _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy8g _1h4pbgy76o _1h4pbgy81c _1h4pbgya28"
                    rel="noreferrer noopener"
                  >
                    <font>
                      <font>위치기반서비스 이용약관</font>
                    </font>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="_1h4pbgy7y8 _1h4pbgy834 _1h4pbgy17k _1h4pbgy8pc"></div>
          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9vn _1h4pbgy9xs">
            <div className="_1h4pbgy82o _1h4pbgy803 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9vn">
              <div className="_1h4pbgy76o _1h4pbgy7ag _1h4pbgy7s _1h4pbgy80w _1h4pbgy8ao">
                <font>
                  <font>주식회사 오렌지마켙</font>
                </font>
              </div>
              <div className="_1h4pbgy76o _1h4pbgy7s"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
