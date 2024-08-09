import MyPageSide from '@/component/user/layout/MyPageSide'
import React from 'react'
import "/public/css/myPage.css";
import "/public/css/profile.css";
import Link from 'next/link';

export default function Page() {
  return (
<>
<article className="_1h4pbgy7wg _1h4pbgy7wz">
		<div className="_6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
			<section style={{borderBottom: '1px solid #ebebeb'}} className="">
				<div className="_588sy41z _588sy421 _588sy42q _588sy415q _588sy417e">
					<nav className="iq86zf0">
						<ol className="iq86zf1 _588sy42q _588sy415q">
							<li>
								<Link href="/">
									<span className="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf3 iq86zf2 _588sy41n">
										<font style={{verticalAlign: 'inherit'}}>홈</font>
									</span>
								</Link>
								<span className="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf4 _588sy4ze _588sy4w8">
									<font style={{verticalAlign: 'inherit'}}> &gt;</font>
								</span>
							</li>
						</ol>
					</nav>
					<Link href="/myPage">
						<div className="_588sy41z _588sy421 _588sy42q _588sy415q">
							<span className="_588sy4192 _588sy41x _588sy41b2 _588sy43">
								<font style={{verticalAlign: 'inherit'}}>마이 페이지</font>
							</span>
						</div>
					</Link>
				</div>
				<Link href="/myPage">
					<div className="_1h4pbgy7dk _1h4pbgy7j7 _1h4pbgy7j0 _1h4pbgy7il _1h4pbgy7w0">
						<h1 className="_1h4pbgy78o _1h4pbgy796 _1h4pbgy79g _1h4pbgy7ag _1h4pbgy7c8">
							<font style={{verticalAlign: 'inherit'}}>마이 페이지</font>
						</h1>
					</div>
				</Link>
			</section>
		</div>
		<div className="my_home container my md _6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
			<section className="_1h4pbgy9ug _1h4pbgy8zc _1h4pbgy92j _1h4pbgy7y8 _1h4pbgy83s _1h4pbgy843 _1h4pbgy84k">
				{/* <jsp:include page="/WEB-INF/views/user/myPageSub/myPageSide.jsp"/> */}
                <MyPageSide/>
				<div data-v-1ac01578="" data-v-0adb81cc="" className="content_area my-page-content">
					<div data-v-1ac01578="" className="my_profile">
						{/* 타이틀 */}
						<div data-v-6b53f901="" data-v-1ac01578="" className="content_title border">
							<div data-v-6b53f901="" className="title">
								<h3 data-v-6b53f901="">계정 관리</h3>
							</div>
						</div>
						{/* 프로필 이미지 */}
						<div data-v-5691f94f="" data-v-708ef468="" className="user_profile">
							<div data-v-5691f94f="" className="profile_thumb">
								<img data-v-5691f94f="" src="https://kream-phinf.pstatic.net/MjAyMDEyMTZfMjk2/MDAxNjA4MDk4NDc4NTU5.HC3x5Quc4dbD5BHHQyYMFNNb9Ak0bvnUCMFzgtHhpJkg.5Pg21oe9j3T-gwX6IUER0htw9IluFG7eFM56cyyPusYg.JPEG/p_7b98e208cbff4b758d6c35f2e41c50eb.jpeg?type=m" alt="사용자 이미지" className="thumb_img"/>
							</div>
							<div data-v-5691f94f="" className="profile_detail">
								<strong data-v-5691f94f="" className="name">사용자 nickname 넣기</strong>
								<div data-v-5691f94f="" className="profile_btn_box">
									<button data-v-420a5cda="" data-v-5691f94f="" type="button" className="btn outlinegrey small"> 이미지 변경 </button>
									<button data-v-420a5cda="" data-v-5691f94f="" type="button" className="btn outlinegrey small"> 삭제 </button>
								</div>
							</div>
						</div>
						{/* 프로필 정보 */}
						<div data-v-8b96a82e="" data-v-1ac01578="" className="profile_group">
							<h4 data-v-8b96a82e="" className="group_title">프로필 정보</h4>
							<div data-v-0c9f3f9e="" data-v-6d416020="" data-v-708ef468="" className="unit" data-v-8b96a82e="">
								<h5 data-v-0c9f3f9e="" className="title">프로필 이름</h5>
								<div data-v-0c9f3f9e="" className="unit_content">
									<p data-v-24a03828="" data-v-6d416020="" className="desc desc_modify" data-v-0c9f3f9e=""> 사용자 nickname 넣기 </p>
									<button data-v-420a5cda="" data-v-6d416020="" type="button" className="btn btn_modify outlinegrey small" data-v-0c9f3f9e=""> 변경 </button>
								</div>
							</div>
							<div data-v-0c9f3f9e="" data-v-6d416020="" data-v-708ef468="" className="unit" data-v-8b96a82e="">
								<h5 data-v-0c9f3f9e="" className="title">이름</h5>
								<div data-v-0c9f3f9e="" className="unit_content">
									<p data-v-24a03828="" data-v-6d416020="" className="desc desc_modify" data-v-0c9f3f9e=""> 사용자 name 넣기 </p>
									<button data-v-420a5cda="" data-v-6d416020="" type="button" className="btn btn_modify outlinegrey small" data-v-0c9f3f9e=""> 변경 </button>
								</div>
							</div>
							<div data-v-0c9f3f9e="" data-v-6d416020="" data-v-708ef468="" className="unit" data-v-8b96a82e="">
								<h5 data-v-0c9f3f9e="" className="title">소개</h5>
								<div data-v-0c9f3f9e="" className="unit_content">
									<p data-v-24a03828="" data-v-6d416020="" className="desc desc_modify placeholder" data-v-0c9f3f9e=""> 나를 소개하세요 </p>
									<button data-v-420a5cda="" data-v-6d416020="" type="button" className="btn btn_modify outlinegrey small" data-v-0c9f3f9e=""> 변경 </button>
								</div>
							</div>
						</div>
						{/* 계정 정보 */}
						<div data-v-8b96a82e="" data-v-1ac01578="" className="profile_group">
							<h4 data-v-8b96a82e="" className="group_title">내 계정</h4>
							<div data-v-0c9f3f9e="" data-v-1ac01578="" className="unit" data-v-8b96a82e="">
								<h5 data-v-0c9f3f9e="" className="title">이메일 주소</h5>
								<div data-v-0c9f3f9e="" className="unit_content">
									<p data-v-24a03828="" data-v-1ac01578="" className="desc email" data-v-0c9f3f9e="">사용자 이메일 넣기</p>
									<button data-v-420a5cda="" data-v-1ac01578="" type="button" className="btn btn_modify outlinegrey small" data-v-0c9f3f9e=""> 변경 </button>
								</div>
							</div>
							<div data-v-1ac01578="" data-v-8b96a82e="" className="modify" style={{display: 'none'}}>
								<div data-v-5ee806c3="" data-v-1ac01578="" className="input_box" data-v-8b96a82e="">
									<h6 data-v-1ac01578="" data-v-5ee806c3="" className="input_title">이메일 주소 변경</h6>
									<div data-v-5ee806c3="" className="input_item">
										<input data-v-5ee806c3="" type="email" autoComplete="off" className="input_txt" placeholder="사용자 이메일 넣기"/>
									</div>
									<p data-v-1ac01578="" data-v-5ee806c3="" className="input_error">  </p>
								</div>
								<div data-v-1ac01578="" data-v-8b96a82e="" className="modify_btn_box">
									<button data-v-420a5cda="" data-v-1ac01578="" type="button" className="btn outlinegrey medium" slot="button" data-v-8b96a82e=""> 취소 </button>
									<button data-v-420a5cda="" data-v-1ac01578="" disabled="disabled" type="button" className="btn solid medium disabled" slot="button" data-v-8b96a82e=""> 인증 메일 발송 </button>
								</div>
							</div>
							<div data-v-0c9f3f9e="" data-v-1ac01578="" className="unit" data-v-8b96a82e="">
								<h5 data-v-0c9f3f9e="" className="title">비밀번호</h5>
								<div data-v-0c9f3f9e="" className="unit_content">
									<p data-v-24a03828="" data-v-1ac01578="" className="desc password" data-v-0c9f3f9e="">●●●●●●●●●</p>
									<button data-v-420a5cda="" data-v-1ac01578="" type="button" className="btn btn_modify outlinegrey small" data-v-0c9f3f9e=""> 변경 </button>
								</div>
							</div>
							<div data-v-1ac01578="" data-v-8b96a82e="" className="modify" style={{display: 'none'}}>
								<h5 data-v-1ac01578="" data-v-8b96a82e="" className="title">비밀번호 변경</h5>
								<div data-v-5ee806c3="" data-v-1ac01578="" className="input_box" data-v-8b96a82e="">
									<h6 data-v-1ac01578="" data-v-5ee806c3="" className="input_title">이전 비밀번호</h6>
									<div data-v-5ee806c3="" className="input_item">
										<input data-v-5ee806c3="" type="password" placeholder="영문, 숫자, 특수문자 조합 8-16자" autoComplete="off" className="input_txt"/>
									</div>
									<p data-v-1ac01578="" data-v-5ee806c3="" className="input_error"> 영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자) </p>
								</div>
								<div data-v-5ee806c3="" data-v-1ac01578="" className="input_box" data-v-8b96a82e="">
									<h6 data-v-1ac01578="" data-v-5ee806c3="" className="input_title">새 비밀번호</h6>
									<div data-v-5ee806c3="" className="input_item">
										<input data-v-5ee806c3="" type="password" placeholder="영문, 숫자, 특수문자 조합 8-16자" autoComplete="off" className="input_txt"/>
									</div>
									<p data-v-1ac01578="" data-v-5ee806c3="" className="input_error"> 영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자) </p>
								</div>
								<div data-v-1ac01578="" data-v-8b96a82e="" className="modify_btn_box">
									<button data-v-420a5cda="" data-v-1ac01578="" type="button" className="btn outlinegrey medium" slot="button" data-v-8b96a82e=""> 취소 </button>
									<button data-v-420a5cda="" data-v-1ac01578="" disabled="disabled" type="button" className="btn solid medium disabled" slot="button" data-v-8b96a82e=""> 저장 </button>
								</div>
							</div>
						</div>
						{/* 개인 정보 */}
						<div data-v-8b96a82e="" data-v-1ac01578="" className="profile_group">
							<h4 data-v-8b96a82e="" className="group_title">개인 정보</h4>
							<div data-v-0c9f3f9e="" data-v-1ac01578="" className="unit" data-v-8b96a82e="">
								<h5 data-v-0c9f3f9e="" className="title">휴대폰 번호</h5>
								<div data-v-0c9f3f9e="" className="unit_content">
									<p data-v-24a03828="" data-v-1ac01578="" className="desc" data-v-0c9f3f9e="">사용자 phone 넣기</p>
									<button data-v-420a5cda="" data-v-1ac01578="" type="button" className="btn btn_modify outlinegrey small" data-v-0c9f3f9e=""> 변경 </button>
								</div>
							</div>
						</div>
						<Link data-v-1ac01578="" href="/my/withdrawal" className="btn_withdrawal">회원 탈퇴</Link>
					</div>		
				</div>
			</section>
		</div>
	</article>
    {/* 아래 광고 이미지 */}
<div className="_588sy4rk _588sy4rr _588sy4ry _588sy4s5"><div className="_1h4pbgy14w _1h4pbgy9ug _1h4pbgy9xc _1h4pbgya2w"><div className="a1nvr40 _1h4pbgy7nk _1h4pbgy7o1 _1h4pbgy7oy _1h4pbgy7pn _1h4pbgy7pw _1h4pbgy7qd _1h4pbgy7s8 _1h4pbgy7sp _1h4pbgy7tm _1h4pbgy7ub _1h4pbgy7uk _1h4pbgy7v1 _1h4pbgy14w _1h4pbgy8jc"><div className="a1nvr41"><div className="a1nvr42 _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy9wi _1h4pbgy9vs _1h4pbgya0o"><div className="a1nvr43 _1h4pbgy78g _1h4pbgy78p _1h4pbgy796 _1h4pbgy79n _1h4pbgy7ag _1h4pbgy7c8 _1h4pbgy7bk _1h4pbgy7az _1h4pbgy7b8 _1h4pbgy48 _1h4pbgya54 _1h4pbgya4i _19xafot0 _19xafot4 _19xafot5" style={{_19xafot2:"0ms", _19xafot1:"500ms",_19xafot3:"translateY(1rem)"}}><font><font>오늘 대단한 발견을 해보세요!</font></font></div><div className="a1nvr44 _1h4pbgy79c _1h4pbgy7a3 _1h4pbgy7ac _1h4pbgy7ag _1h4pbgy7c8 _1h4pbgy7bk _1h4pbgy7az _1h4pbgy7b8 _1h4pbgy8g _1h4pbgy81k _19xafot0 _19xafot4 _19xafot5" style={{_19xafot2:"0ms", _19xafot1:"500ms",_19xafot3:"translateY(1rem)"}}><font><font>앱을 받으세요</font></font></div>
<div className="a1nvr45 _1h4pbgy9vc _1h4pbgy90g _1h4pbgy90r"><Link href="#" className="_19xafot0 _19xafot4 _19xafot5" style={{_19xafot2:"0ms", _19xafot1:"500ms",_19xafot3:"translateY(1rem)"}} target="_blank" rel="noopener noreferrer">
  <img className="_1h4pbgy8rk _1h4pbgy8rv _1h4pbgy8s4" src="https://karrotmarket-com-sanity-cdn.krrt.io/production/49380c1c7e70e49f0f93baf0f790925eefc69082-120x40.svg" alt="앱스토어에서 다운로드"/>
</Link>
<Link href="#" className="_19xafot0 _19xafot4 _19xafot5" style={{_19xafot2:"0ms", _19xafot1:"500ms",_19xafot3:"translateY(1rem)"}} target="_blank" rel="noopener noreferrer">
<img className="_1h4pbgy8rk _1h4pbgy8rv _1h4pbgy8s4" src="https://karrotmarket-com-sanity-cdn.krrt.io/production/0d8f72b8e4cdb98af115a7c1f04c4abf19f5c419-180x53.svg" alt="Google Play에서 받으세요"/></Link></div></div><div className="a1nvr46">
  <img src="https://karrotmarket-com-sanity-cdn.krrt.io/production/bff14eb869318da13eeb329ac060450dfe1ecadf-750x1624.png" className="a1nvr49 a1nvr48 _1h4pbgy95k _1h4pbgya0o _19xafot0 _19xafot4 _19xafot5" alt="홈 피드 화면의 스크린샷" style={{_19xafot2: "0ms", _19xafot1: "1000ms", _19xafot3: "translateY(1rem)"}}/>
  <img src="https://karrotmarket-com-sanity-cdn.krrt.io/production/5cfdb708e8491051b4765819e796ca373e58fc44-753x1637.png" className="a1nvr4a a1nvr48 _1h4pbgy95k _1h4pbgya0o _19xafot0 _19xafot4 _19xafot5" alt="상세 페이지의 스크린샷" style={{_19xafot2: "0ms", _19xafot1: "1000ms", _19xafot3: "translateY(-1rem)"}}/>
<img src="https://karrotmarket-com-sanity-cdn.krrt.io/production/1da74f52dfcb54be6b1ec40af8d8480ed6abc4c0-900x339.png" className="a1nvr4b _19xafot0 _19xafot4 _19xafot5" alt="홈 피드 항목의 스크린샷" style={{_19xafot2: "0ms", _19xafot1: "1000ms", _19xafot3: "translateY(1rem)"}}/><div className="a1nvr47"></div></div></div></div></div></div>

</>
  )
}
