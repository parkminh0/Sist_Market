import Link from "next/link";
import HeaderItem from "./HeaderItem";

export default function Header(){
    return (
<>
<div class="_1a7kymo0"></div>
<div class="_1a7kymo3 _1h4pbgya14 _1h4pbgy98o _1h4pbgy8jc _1h4pbgy9ug _1h4pbgy9xc _1h4pbgy1u0 _1h4pbgya2w">
    <div class="_6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
        <div class="_1a7kymo5 _1h4pbgy7e8 _1h4pbgy7ej _1h4pbgy7iw _1h4pbgy7j7 _1h4pbgy1u0 _1h4pbgya0o _1h4pbgy98o _1h4pbgy9ug _1h4pbgy9xs">
            <div class="_1h4pbgy9ug _1h4pbgy9wo _1h4pbgy8rk">
                <Link data-gtm="gnb_logo" href="/" class="_1h4pbgy9ug _1h4pbgy9wo _1h4pbgy9yw">
                    <svg xmlns="http://www.w3.org/2000/svg" width="95" fill="none" viewBox="0 0 300 114">
                        <path fill="#FF6F0F" d="M149.339 86.474v-4.89l-.3-.115c-2.755 3.25-6.825 6-12.335 6-11.525 0-20.545-9.315-20.545-21.825s8.85-21.79 20.375-21.79a16.16 16.16 0 0 1 12.5 6l.3-.11v-4.92h10.965v41.65zm-21.84-20.84c0 6.365 4.715 11.93 11.29 11.93 6.41 0 11.085-5.35 11.085-11.93s-4.675-11.725-11.085-11.725c-6.6 0-11.29 5.36-11.29 11.725M272.468 65.634c0 12.555-9.555 21.825-22.54 21.825s-22.43-9.27-22.43-21.825 9.5-21.79 22.455-21.79 22.515 9.235 22.515 21.79m-33.5 0c0 6.94 4.66 12.385 11 12.385s11-5.445 11-12.385-4.66-12.365-11-12.365-11.02 5.425-11.02 12.365zM286.677 54.309v17.805c0 3.835 2.76 5.325 5.235 5.54a13.34 13.34 0 0 0 7.825-1.58l.26 9.63a24.5 24.5 0 0 1-10.47 1.735c-8.88-.5-14.105-4.725-14.105-14.07V37.054l11.255-3.685v11.455h12.105v9.5zM194.334 44.629l-.245 11.645a17.35 17.35 0 0 0-7.961-1.275c-4.45.355-8.365 2.265-8.365 8.455v23.02h-11.33v-41.65h11v6.59l.33.08c1.785-3.56 5.085-7 10.91-7.605 1.919-.208 3.86.046 5.661.74M226.913 44.629l-.245 11.645a17.4 17.4 0 0 0-7.965-1.275c-4.445.355-8.36 2.265-8.36 8.455v23.02h-11.345v-41.65h11v6.59l.33.08c1.785-3.56 5.09-7 10.915-7.605a12.14 12.14 0 0 1 5.67.74"></path>
                        <path fill="#FF6F0F" d="M105.584 86.474h14.766L100.964 63.72c6.66-3.37 14.116-10.795 16.856-18.91h-13.416c-2.64 6.545-7.595 12.445-14.5 14.5l-.2-.13V27.474H78.5v59h11.2v-18.95h.29zM29.24 36.869C13.09 36.869 0 49.684 0 65.833c0 22.325 29.32 34.175 29.24 34.14S58.5 88.158 58.5 65.833c0-16.15-13.115-28.964-29.26-28.964m0 40.684a11.07 11.07 0 1 1-.01-22.138 11.07 11.07 0 0 1 .01 22.138"></path>
                        <path fill="#00A05B" d="M35.82-.026c-6.825 0-11.575 4.77-12.32 10.38-9.1-2.5-16.23 4.385-16.23 12 0 5.82 4 10.525 9.335 12.05 4.3 1.225 12.045.315 12.045.315-.04-1.885 1.69-3.95 4.365-5.83 7.595-5.345 13.54-7.86 14.46-15.15.96-7.605-4.7-13.765-11.655-13.765"></path>
                    </svg>
                </Link>
            </div>
            <div>
                <nav class="_1h4pbgy9u0 _1h4pbgy9uj _1h4pbgy9wo">
                    <HeaderItem/>
                    <button onclick="show_login_dialog('account');" id="show_login" style={{backgroundColor:"#ff6f0f24", color:"#ff6f0f"}} class="seed-box-button" data-scope="button" data-part="root" type="button" data-gtm="gnb_app_download" data-size="xsmall" data-variant="primaryLow">
                        <span class="seed-semantic-typography-label4-bold">
                            <font>로그인</font>
                            {/* <c:if test="${sessionScope.user_VO eq null }">
                                <font >로그인</font>				
                            </c:if>
                            <c:if test="${sessionScope.user_VO ne null }">
                                <font >로그아웃</font>				
                            </c:if> */}
                        </span>
                    </button>
                </nav>
            </div>
        </div>
        <div class="_1a7kymoh _1h4pbgy89k _1h4pbgy8eg _1h4pbgya0o _1h4pbgy9ug _1h4pbgy8jc _1a7kymog" data-expanded="true">
            <div class="_1h4pbgy9u0 _1h4pbgy9ub _1h4pbgy8bk">
                <button onclick="getLocation();" class="lrcwe20 _1h4pbgy8g _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy17c _1h4pbgy7ag _1h4pbgy9yw lrcwe22 _1h4pbgy7nk _1h4pbgy7s8 _1h4pbgy780" data-gtm="gnb_location">
                    <span style={{display:"inline-flex"}} class="_1h4pbgy8gg _1h4pbgy8qo _1h4pbgy8ao" data-seed-icon="icon_location_fill" data-seed-icon-version="0.2.1">
                        <svg id="icon_location_fill" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-karrot-ui-icon="true">
                            <g>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.19995 10.5798C2.19995 5.16739 6.58756 0.779785 12 0.779785C17.4123 0.779785 21.8 5.16739 21.8 10.5798C21.8 13.9799 19.5985 17.1391 17.4217 19.3764C16.3174 20.5113 15.1817 21.4481 14.2536 22.1055C13.7903 22.4337 13.3694 22.6988 13.0225 22.8857C12.8498 22.9788 12.6843 23.0584 12.5339 23.1169C12.4059 23.1666 12.2081 23.2342 12 23.2342C11.7918 23.2342 11.594 23.1666 11.466 23.1169C11.3156 23.0584 11.1501 22.9788 10.9774 22.8857C10.6305 22.6988 10.2096 22.4337 9.74627 22.1055C8.81823 21.4481 7.68247 20.5113 6.57819 19.3764C4.40138 17.1391 2.19995 13.9799 2.19995 10.5798ZM8.38442 10.1041C8.38442 8.10725 10.0031 6.48852 12 6.48852C13.9968 6.48852 15.6155 8.10725 15.6155 10.1041C15.6155 12.1009 13.9968 13.7196 12 13.7196C10.0031 13.7196 8.38442 12.1009 8.38442 10.1041Z" fill="currentColor"></path></g></svg></span><font ><font >맨해튼</font></font><span style={{display:"inline-flex"}} class="_1h4pbgy8g8 _1h4pbgy8qg _1h4pbgy85s" data-seed-icon="icon_expand_more_fill" data-seed-icon-version="0.2.1"><svg id="icon_expand_more_fill" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-karrot-ui-icon="true"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M2.79289 7.29289C3.18342 6.90237 3.81658 6.90237 4.20711 7.29289L12 15.0858L19.7929 7.29289C20.1834 6.90237 20.8166 6.90237 21.2071 7.29289C21.5976 7.68342 21.5976 8.31658 21.2071 8.70711L12.7071 17.2071C12.3166 17.5976 11.6834 17.5976 11.2929 17.2071L2.79289 8.70711C2.40237 8.31658 2.40237 7.68342 2.79289 7.29289Z" fill="currentColor"></path>
                            </g>
                        </svg>
                    </span>
                </button>
            </div>
            <div class="_1h4pbgy9w0 _1h4pbgy8jc _1h4pbgya2z">
                <form action="/us/buy-sell/all/">
                    <input type="hidden" aria-hidden="true" name="in" value="manhattan-7426"/>
                    <div class="_1h4pbgya0o">
                        <input class="_1wcdkwr0 _1wcdkwr1" type="search" aria-label="검색 입력" placeholder="무엇을 찾고 계신가요?" name="search" value=""/>
                        <button type="submit" aria-label="찾다" class="_1wcdkwr5 _1h4pbgy7cg _1h4pbgy7h4 _1h4pbgy7ls _1h4pbgy7qg _1h4pbgya0w _1h4pbgy9dc _1h4pbgy9ps _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy9xc _1h4pbgy1qe _1h4pbgy94o _1h4pbgy9yw">
                            <span style={{display:"inline-flex"}} class="_1h4pbgy8g _1h4pbgy8gg _1h4pbgy8qo" data-seed-icon="icon_search_fill" data-seed-icon-version="0.2.1">
                                <svg id="icon_search_fill" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-karrot-ui-icon="true">
                                    <g><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 2C5.80558 2 2 5.80558 2 10.5C2 15.1944 5.80558 19 10.5 19C12.4869 19 14.3145 18.3183 15.7618 17.176L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L17.176 15.7618C18.3183 14.3145 19 12.4869 19 10.5C19 5.80558 15.1944 2 10.5 2ZM4 10.5C4 6.91015 6.91015 4 10.5 4C14.0899 4 17 6.91015 17 10.5C17 14.0899 14.0899 17 10.5 17C6.91015 17 4 14.0899 4 10.5Z" fill="currentColor"></path></g>
                                </svg>
                            </span>
                        </button>
                    </div>
                </form>
                <div class="_1a7kymoo _9rcp1w1 _1h4pbgya0o">
                    <div class="_1n1zga84 _1n1zga80 _1h4pbgya0o">
                        <div class="_1n1zga85 _1h4pbgy9zk _1h4pbgy8jc">
                            <div class="_1a7kymoq _1h4pbgy7nk _1h4pbgy7o1 _1h4pbgy7oy _1h4pbgy7m3 _1h4pbgy7s8 _1h4pbgy7sp _1h4pbgy7tm _1h4pbgy7qr _1h4pbgy7e8 _1h4pbgy7e3 _1h4pbgy7iw _1h4pbgy7ir _1h4pbgy9uw _1h4pbgy9wo _1h4pbgya54 _1a7kymop _588sy4ph">
                                <div class="_1h4pbgy9u0 _1h4pbgy9ub _1h4pbgy76o _1h4pbgy8bk">
                                    <font >인기 검색어</font>
                                </div>
                                <ul class="_1h4pbgy9ug _1h4pbgy9wo">
                                    <li class="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf"><Link data-gtm="gnb_popular_keyword" class="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v" href="/buy-sell/all/?in=manhattan-7426&amp;search=bike"><font ><font >자전거</font></font></Link></li>
                                    <li class="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf"><Link data-gtm="gnb_popular_keyword" class="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v" href="/buy-sell/all/?in=manhattan-7426&amp;search=couch"><font ><font >침상</font></font></Link></li>
                                    <li class="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf"><Link data-gtm="gnb_popular_keyword" class="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v" href="/buy-sell/all/?in=manhattan-7426&amp;search=sofa"><font ><font >소파</font></font></Link></li>
                                    <li class="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf"><Link data-gtm="gnb_popular_keyword" class="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v" href="/buy-sell/all/?in=manhattan-7426&amp;search=dining+table"><font ><font >식탁</font></font></Link></li>
                                    <li class="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf"><Link data-gtm="gnb_popular_keyword" class="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v" href="/buy-sell/all/?in=manhattan-7426&amp;search=tv"><font ><font >TV</font></font></Link></li>
                                    <li class="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf"><Link data-gtm="gnb_popular_keyword" class="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v" href="/buy-sell/all/?in=manhattan-7426&amp;search=mirror"><font ><font >거울</font></font></Link></li>
                                    <li class="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf"><Link data-gtm="gnb_popular_keyword" class="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v" href="/buy-sell/all/?in=manhattan-7426&amp;search=portable+air+conditioner"><font ><font >휴대용 에어컨</font></font></Link></li>
                                    <li class="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf"><Link data-gtm="gnb_popular_keyword" class="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v" href="/buy-sell/all/?in=manhattan-7426&amp;search=desk"><font ><font >책상</font></font></Link></li>
                                    <li class="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf"><Link data-gtm="gnb_popular_keyword" class="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v" href="/buy-sell/all/?in=manhattan-7426&amp;search=iphone"><font ><font >아이폰</font></font></Link></li>
                                    <li class="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf"><Link data-gtm="gnb_popular_keyword" class="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v" href="/buy-sell/all/?in=manhattan-7426&amp;search=stroller"><font ><font >유모차</font></font></Link></li>
                                    <li class="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf"><Link data-gtm="gnb_popular_keyword" class="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v" href="/buy-sell/all/?in=manhattan-7426&amp;search=bed"><font ><font >침대</font></font></Link></li>
                                    <li class="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf"><Link data-gtm="gnb_popular_keyword" class="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v" href="/buy-sell/all/?in=manhattan-7426&amp;search=ikea"><font ><font >이케아</font></font></Link></li>
                                    <li class="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf"><Link data-gtm="gnb_popular_keyword" class="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v" href="/buy-sell/all/?in=manhattan-7426&amp;search=tv+stand"><font ><font >TV 스탠드</font></font></Link></li>
                                    <li class="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf"><Link data-gtm="gnb_popular_keyword" class="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v" href="/buy-sell/all/?in=manhattan-7426&amp;search=cars+for+sale"><font ><font >판매용 자동차</font></font></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="_1n1zga86 _1h4pbgya0w _1h4pbgy98o _1h4pbgy8tk _1h4pbgy8gg _1h4pbgy9u0 _1h4pbgy9ub _1n1zga87 _1n1zga89"></div>
                        <div class="_1n1zga86 _1h4pbgya0w _1h4pbgy98o _1h4pbgy8tk _1h4pbgy8gg _1h4pbgy9u0 _1h4pbgy9ub _1n1zga88"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{/* 모달 오버레이 */}
<div class="modal-overlay"></div>

{/* 로그인 모달 */}
<div style={{pointerEvents: "auto", display:"none"}} id="login_dialog" role="dialog" aria-describedby="radix-:R24pH2:" aria-labelledby="radix-:R24pH1:" data-state="open" class="sboh910 sboh912 sboh915" tabindex="-1">
<div class="sboh91e">
    <h2 id="radix-:R24pH1:" class="sboh91f">쌍용마켙</h2>
</div>
<div class="_588sy4i8 _588sy4ew _588sy4ne _588sy4k8 _588sy41z _588sy421">
    <div class="_588sy41z _588sy421 _588sy42q _588sy4172 _588sy415q _588sy413q _588sy418e _588sy4gw">
    <h2 class="_588sy419q _588sy41y _588sy41ak" level="2">로그인</h2>
    <form id="login_form" onsubmit="login(event, this)">
        <input type="hidden" name="pageName" value="<%=pageName%>"/>
        <input type="text" id="id" name="id" placeholder="ID" required/>
        <input type="password" id="pw" name="pw" placeholder="Password" required/>
        <button class = "login_btn" type="submit">Log in</button>
        <a href='https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=2d3b46aa6f749ca133dedfb1664a1da7&redirect_uri=http://localhost:8080/login/kakao'>
        <img src="/resources/img/kakao_login_large_wide.png" width="222" alt="카카오 로그인 버튼" />
        </a>
    </form>
    <div class="options _588sy41z _588sy421 _588sy42q _588sy412w _588sy4168 _588sy415q">
        <Link href="#">아이디 찾기</Link>
        <Link href="#">비밀번호 찾기</Link>
        <Link href="#">회원가입</Link>
    </div>
    </div>
    <button type="button" class="sboh91h">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-seed-icon="true" data-seed-icon-version="0.4.0-beta.2" width="24" height="24" style={{width: "100%", height: "100%"}}><g><path fill-rule="evenodd" clip-rule="evenodd" d="M3.72633 3.72633C4.0281 3.42456 4.51736 3.42456 4.81913 3.72633L12 10.9072L19.1809 3.72633C19.4826 3.42456 19.9719 3.42456 20.2737 3.72633C20.5754 4.0281 20.5754 4.51736 20.2737 4.81913L13.0928 12L20.2737 19.1809C20.5754 19.4826 20.5754 19.9719 20.2737 20.2737C19.9719 20.5754 19.4826 20.5754 19.1809 20.2737L12 13.0928L4.81913 20.2737C4.51736 20.5754 4.0281 20.5754 3.72633 20.2737C3.42456 19.9719 3.42456 19.4826 3.72633 19.1809L10.9072 12L3.72633 4.81913C3.42456 4.51736 3.42456 4.0281 3.72633 3.72633Z" fill="currentColor"></path></g></svg><span class="ar0rax0">Close</span>
    </button>
</div>
</div>
</>
    )
}