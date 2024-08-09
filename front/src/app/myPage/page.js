import React from 'react'

import "/public/css/myPage.css";
import Link from 'next/link';
import MyPageSide from '@/component/user/layout/MyPageSide';

export default function page() {
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
				{
                /* 
                마이페이지 서브
                <jsp:include page="/WEB-INF/views/user/myPageSub/myPageSide.jsp"/>
                */}
                <MyPageSide/>
			<div data-v-7b7d73d2="" className="my_home container my md">
				{/* 여기서부터 콘텐츠 */}
				<div data-v-ed683452="" data-v-7b7d73d2="" className="user_membership">
					<div data-v-ed683452="" className="user_detail">
						<div data-v-ed683452="" className="user_thumb">
							<img data-v-ed683452="" src="https://kream-phinf.pstatic.net/MjAyMDEyMTZfMjk2/MDAxNjA4MDk4NDc4NTU5.HC3x5Quc4dbD5BHHQyYMFNNb9Ak0bvnUCMFzgtHhpJkg.5Pg21oe9j3T-gwX6IUER0htw9IluFG7eFM56cyyPusYg.JPEG/p_7b98e208cbff4b758d6c35f2e41c50eb.jpeg" alt="사용자 이미지" className="thumb_img"/>
						</div>
						<div data-v-ed683452="" className="user_info">
							<div data-v-ed683452="" className="info_box">
								<strong data-v-ed683452="" className="name">사용자 nickname 넣기</strong>
								<p data-v-ed683452="" className="email">사용자 id or email 넣기</p>
							</div>
							<div data-v-ed683452="" className="info-buttons">
								<Link data-v-420a5cda="" data-v-ed683452="" href="/my/profile-edit" className="btn btn outlinegrey small" type="button"> 계정 관리 </Link>
								<Link data-v-420a5cda="" data-v-ed683452="" href="/social/users/@xarkxinxo" className="btn btn btn_my_style outlinegrey small" type="button"> 프로필 보기 </Link>
							</div>
						</div>
					</div>
				</div>
				<div data-v-247cd1ce="" data-v-7b7d73d2="" className="shortcut-grid">
					<Link data-v-247cd1ce="" href="/my/seller-tier" className="menu-item">
						<div data-v-247cd1ce="" className="icon-wrap">
							<picture data-v-82b93d2c="" data-v-247cd1ce="" className="picture icon">
								<source data-v-82b93d2c="" type="image/webp" srcSet="https://kream-phinf.pstatic.net/MjAyNDAyMjhfNTAg/MDAxNzA5MDc2NDUzNTI2.X3zCyNHZl6ro5zP0CdmhxI-0lHeyALdtOJGsu5fUOk0g.qczzAn4l6p1_IxBGZm0v2eKw0xlXnAr3q38A9F2trkYg.PNG/a_04fab09b01d54fddbe4566369a17cb93.png"/>
								<source data-v-82b93d2c="" srcSet="https://kream-phinf.pstatic.net/MjAyNDAyMjhfNTAg/MDAxNzA5MDc2NDUzNTI2.X3zCyNHZl6ro5zP0CdmhxI-0lHeyALdtOJGsu5fUOk0g.qczzAn4l6p1_IxBGZm0v2eKw0xlXnAr3q38A9F2trkYg.PNG/a_04fab09b01d54fddbe4566369a17cb93.png"/>
								<img data-v-82b93d2c="" src="https://kream-phinf.pstatic.net/MjAyNDAyMjhfNTAg/MDAxNzA5MDc2NDUzNTI2.X3zCyNHZl6ro5zP0CdmhxI-0lHeyALdtOJGsu5fUOk0g.qczzAn4l6p1_IxBGZm0v2eKw0xlXnAr3q38A9F2trkYg.PNG/a_04fab09b01d54fddbe4566369a17cb93.png" loading="lazy" width="28" height="28" className="image"/>
							</picture>
						</div>
						<p data-v-09bea70c="" data-v-7d3b6402="" data-v-247cd1ce="" className="text-lookup name display_paragraph" style={{color: 'rgb(34, 34, 34)'}}>판매자 등급</p>
					</Link>
					<Link data-v-247cd1ce="" href="/my/point" className="menu-item">
						<div data-v-247cd1ce="" className="icon-wrap">
							<picture data-v-82b93d2c="" data-v-247cd1ce="" className="picture icon">
								<source data-v-82b93d2c="" type="image/webp" srcSet="https://kream-phinf.pstatic.net/MjAyNDAyMjhfMjYg/MDAxNzA5MDc2NDYyOTc0.JBaX70NZjkAbhB0v3_hNhBhBdklrf-W-OWzs49i8rq8g.prZSxl_09jQoHiRo5lupiL7wtzrA3ztEldXO7gRKFLsg.PNG/a_c23b8b01de384013b4c317029d2a96dc.png"/>
								<source data-v-82b93d2c="" srcSet="https://kream-phinf.pstatic.net/MjAyNDAyMjhfMjYg/MDAxNzA5MDc2NDYyOTc0.JBaX70NZjkAbhB0v3_hNhBhBdklrf-W-OWzs49i8rq8g.prZSxl_09jQoHiRo5lupiL7wtzrA3ztEldXO7gRKFLsg.PNG/a_c23b8b01de384013b4c317029d2a96dc.png"/>
								<img data-v-82b93d2c="" src="https://kream-phinf.pstatic.net/MjAyNDAyMjhfMjYg/MDAxNzA5MDc2NDYyOTc0.JBaX70NZjkAbhB0v3_hNhBhBdklrf-W-OWzs49i8rq8g.prZSxl_09jQoHiRo5lupiL7wtzrA3ztEldXO7gRKFLsg.PNG/a_c23b8b01de384013b4c317029d2a96dc.png" loading="lazy" width="28" height="28" className="image"/>
							</picture>
						</div>
						<p data-v-09bea70c="" data-v-7d3b6402="" data-v-247cd1ce="" className="text-lookup name display_paragraph" style={{color: 'rgb(34, 34, 34)'}}>0P</p>
					</Link>
					<Link data-v-247cd1ce="" href="/event/invitation" className="menu-item">
                    <div data-v-247cd1ce="" className="icon-wrap">
                        <picture data-v-82b93d2c="" data-v-247cd1ce="" className="picture icon">
                        <source data-v-82b93d2c="" type="image/webp" srcSet="https://kream-phinf.pstatic.net/MjAyNDAyMjhfMTc1/MDAxNzA5MDc2NDc0MzY3.lSXseb2mOxPEBiAcNuGFbWHWWzXawxLI51O2zYHsOKEg.OOJs82WWwZywHESLzuJIqFIuElRBs1g3dpswp_xfOx4g.PNG/a_11c460121ca54697a8267807c5a14971.png"/>
                        <source data-v-82b93d2c="" srcSet="https://kream-phinf.pstatic.net/MjAyNDAyMjhfMTc1/MDAxNzA5MDc2NDc0MzY3.lSXseb2mOxPEBiAcNuGFbWHWWzXawxLI51O2zYHsOKEg.OOJs82WWwZywHESLzuJIqFIuElRBs1g3dpswp_xfOx4g.PNG/a_11c460121ca54697a8267807c5a14971.png"/>
                        <img data-v-82b93d2c="" src="https://kream-phinf.pstatic.net/MjAyNDAyMjhfMTc1/MDAxNzA5MDc2NDc0MzY3.lSXseb2mOxPEBiAcNuGFbWHWWzXawxLI51O2zYHsOKEg.OOJs82WWwZywHESLzuJIqFIuElRBs1g3dpswp_xfOx4g.PNG/a_11c460121ca54697a8267807c5a14971.png" loading="lazy" width="28" height="28" className="image"/>
                    </picture>
                    </div>
                    <p data-v-09bea70c="" data-v-7d3b6402="" data-v-247cd1ce="" className="text-lookup name display_paragraph" style={{color: 'rgb(34, 34, 34)'}}>친구 초대</p>
                    </Link>
                    <Link data-v-247cd1ce="" href="/notice" className="menu-item"><div data-v-247cd1ce="" className="icon-wrap">
                        <picture data-v-82b93d2c="" data-v-247cd1ce="" className="picture icon">
                            <source data-v-82b93d2c="" type="image/webp" srcSet="https://kream-phinf.pstatic.net/MjAyNDAyMjhfMjEw/MDAxNzA5MDc2NTAxNTEw.5JpnXqmK3uzsC47kZZkmFx8ntlRmGdt31S7xe5lrnmsg.9KJDo6cuN9195WwaI2NZmlDT8gnLzUUf4M2pPLF24nUg.PNG/a_cbb55424c3ad427c88d2b8327100e5fc.png"/>
                            <source data-v-82b93d2c="" srcSet="https://kream-phinf.pstatic.net/MjAyNDAyMjhfMjEw/MDAxNzA5MDc2NTAxNTEw.5JpnXqmK3uzsC47kZZkmFx8ntlRmGdt31S7xe5lrnmsg.9KJDo6cuN9195WwaI2NZmlDT8gnLzUUf4M2pPLF24nUg.PNG/a_cbb55424c3ad427c88d2b8327100e5fc.png"/>
                            <img data-v-82b93d2c="" src="https://kream-phinf.pstatic.net/MjAyNDAyMjhfMjEw/MDAxNzA5MDc2NTAxNTEw.5JpnXqmK3uzsC47kZZkmFx8ntlRmGdt31S7xe5lrnmsg.9KJDo6cuN9195WwaI2NZmlDT8gnLzUUf4M2pPLF24nUg.PNG/a_cbb55424c3ad427c88d2b8327100e5fc.png" loading="lazy" width="28" height="28" className="image"/>
                        </picture>
                        <span data-v-247cd1ce="" className="badge"></span>
                        </div>
                        <p data-v-09bea70c="" data-v-7d3b6402="" data-v-247cd1ce="" className="text-lookup name display_paragraph" style={{color: 'rgb(34, 34, 34)'}}>공지사항</p>
                    </Link>
				</div>
				{/* 구매 내역 */}
				<div data-v-6752ceb2="" data-v-7b7d73d2="" className="my_home_title">
					<h3 data-v-6752ceb2="" className="title"> 구매 내역 </h3>
					<Link data-v-6752ceb2="" href="/my/buying" className="btn_more">
					<span data-v-6752ceb2="" className="btn_txt">더보기</span>
					<span className="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf4 _588sy4ze _588sy4w8" style={{color: 'rgb(34, 34, 34, .5)'}}>
						<font style={{verticalAlign: 'inherit'}}> &gt;</font>
					</span>
					</Link>
				</div>
				<div data-v-7b7d73d2="" className="recent_purchase">
					<div data-v-2cbb289b="" data-v-7b7d73d2="" className="purchase_list_tab">
						<div data-v-2cbb289b="" className="tab_item total">
							<Link data-v-2cbb289b="" href="#" className="tab_link">
								<dl data-v-2cbb289b="" className="tab_box">
									<dt data-v-2cbb289b="" className="title">전체</dt>
									<dd data-v-2cbb289b="" className="count">77</dd>
								</dl>
							</Link>
						</div>
					</div>
					<div data-v-7b7d73d2="">
						<div data-v-eff62a72="" data-v-7b7d73d2="" className="purchase_list all bid">
							{/* 여기서 FOREACH로 3개만 출력하기 */}
							<div data-v-eff62a72="">
								<div data-v-53e92c51="" data-v-eff62a72="">
									<div data-v-53e92c51="" className="purchase_list_display_item" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
										<div data-v-53e92c51="" className="purchase_list_product">
											<div data-v-53e92c51="" className="list_item_img_wrap">
												<img data-v-53e92c51="" alt="product_image" src="https://kream-phinf.pstatic.net/MjAyNDA2MjJfNDUg/MDAxNzE5MDMwMzg4NzUy.Sl-9uwQZMiwX_p1ABfkyg0pWIAR7sjQcv-5sx8n15HUg.HVdHcH-OfAwHNq2OfTKiwzp3nfs4pfjaOSEYVqsyV1Ig.PNG/a_7bd52b94ebf748f9ad7bcc633613ef7b.png?type=m" className="list_item_img" style={{backgroundColor: 'rgb(235, 240, 245)'}}/>
											</div>
											<div data-v-53e92c51="" className="list_item_title_wrap">
												<p data-v-53e92c51="" className="list_item_title">Nike Air Force 1 '07 WB Flax</p>
												<p data-v-53e92c51="" className="list_item_description">
													<span data-v-53e92c51="">280</span>
												</p>
											</div>
										</div>
										<div data-v-53e92c51="" className="list_item_status">
											<div data-v-53e92c51="" className="list_item_column column_secondary">
												<p data-v-09bea70c="" data-v-7d3b6402="" data-v-53e92c51="" className="text-lookup secondary_title display_paragraph" style={{color: 'rgba(34, 34, 34, 0.5)'}}>23/10/31</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* 판매 내역 */}
				<div data-v-6752ceb2="" data-v-7b7d73d2="" className="my_home_title">
					<h3 data-v-6752ceb2="" className="title"> 판매 내역 </h3>
					<Link data-v-6752ceb2="" href="/my/selling" className="btn_more">
						<span data-v-6752ceb2="" className="btn_txt">더보기</span>
						<span className="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf4 _588sy4ze _588sy4w8" style={{color: 'rgb(34, 34, 34, .5)'}}>
							<font style={{verticalAlign: 'inherit'}}> &gt;</font>
						</span>
					</Link>
				</div>
				<div data-v-7b7d73d2="" className="recent_purchase">
					<div data-v-2cbb289b="" data-v-7b7d73d2="" className="purchase_list_tab sell">
						<div data-v-2cbb289b="" className="tab_item total">
							<Link data-v-2cbb289b="" href="#" className="tab_link">
								<dl data-v-2cbb289b="" className="tab_box">
									<dt data-v-2cbb289b="" className="title">전체</dt>
									<dd data-v-2cbb289b="" className="count">2</dd>
								</dl>
							</Link>
						</div>
						<div data-v-2cbb289b="" className="tab_item tab_on">
							<Link data-v-2cbb289b="" href="#" className="tab_link">
								<dl data-v-2cbb289b="" className="tab_box">
									<dt data-v-2cbb289b="" className="title">판매중</dt>
									<dd data-v-2cbb289b="" className="count">0</dd>
								</dl>
							</Link>
						</div>
						<div data-v-2cbb289b="" className="tab_item">
							<Link data-v-2cbb289b="" href="#" className="tab_link">
								<dl data-v-2cbb289b="" className="tab_box">
									<dt data-v-2cbb289b="" className="title">거래완료</dt>
									<dd data-v-2cbb289b="" className="count">0</dd>
								</dl>
							</Link>
						</div>
						<div data-v-2cbb289b="" className="tab_item">
							<Link data-v-2cbb289b="" href="#" className="tab_link">
								<dl data-v-2cbb289b="" className="tab_box">
									<dt data-v-2cbb289b="" className="title">숨김</dt>
									<dd data-v-2cbb289b="" className="count">2</dd>
								</dl>
							</Link>
						</div>
					</div>
					<div data-v-7b7d73d2="">
						<div data-v-eff62a72="" data-v-7b7d73d2="" className="purchase_list all ask">
							{/* 여기서 FOREACH로 3개만 뿌리기 */}
							<div data-v-eff62a72="">
								<div data-v-53e92c51="" data-v-eff62a72="">
									<div data-v-53e92c51="" className="purchase_list_display_item" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
										<div data-v-53e92c51="" className="purchase_list_product">
											<div data-v-53e92c51="" className="list_item_img_wrap">
												<img data-v-53e92c51="" alt="product_image" src="https://kream-phinf.pstatic.net/MjAyMzA5MDFfMjY3/MDAxNjkzNTM2ODU3Nzky.cwUz4XPgTJLOf-4_8AZRdBPSIxvHm4-U3SBZxrOpXoAg.GRa1UTxYW5P3E8mDrrS7ICmCYb365fbWdwJxrulz0ikg.JPEG/a_492bb72bcd8c4e888e0a8ba1edc1ad50.jpg?type=m" className="list_item_img" style={{backgroundColor: 'rgb(244, 244, 244)'}}/>
											</div>
											<div data-v-53e92c51="" className="list_item_title_wrap">
												<p data-v-53e92c51="" className="list_item_title">IAB Studio Blocked Pigment Sweatpants Black</p>
													<p data-v-53e92c51="" className="list_item_description">
													<span data-v-53e92c51="">M</span>
												</p>
											</div>
										</div>
										<div data-v-53e92c51="" className="list_item_status">
											<div data-v-53e92c51="" className="list_item_column column_secondary">
												<p data-v-09bea70c="" data-v-7d3b6402="" data-v-53e92c51="" className="text-lookup secondary_title display_paragraph" style={{color: 'rgba(34, 34, 34, 0.5)'}}>21/05/12</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* 관심 상품 */}
				<div data-v-6752ceb2="" data-v-7b7d73d2="" className="my_home_title">
					<h3 data-v-6752ceb2="" className="title"> 관심 상품 </h3>
					<Link data-v-6752ceb2="" href="/saved" className="btn_more">
						<span data-v-6752ceb2="" className="btn_txt">더보기</span>
						<span className="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf4 _588sy4ze _588sy4w8" style={{color: 'rgb(34, 34, 34, .5)'}}>
							<font style={{verticalAlign: 'inherit'}}> &gt;</font>
						</span>
					</Link>
				</div>
				<div data-v-7b7d73d2="" className="interest_product">
					<div data-v-7b7d73d2="" className="product_list">
						{/* 여기서 FOREACH로 8개 뿌리기 */}
						<div data-v-2c8107bc="" data-v-7b7d73d2="" className="product_item">
							<Link data-v-2c8107bc="" href="/products/21935" className="item_inner">
								<div data-v-2c8107bc="" className="thumb_box">
									<div data-v-16369cf2="" data-v-2c8107bc="" className="product" style={{backgroundColor: 'rgb(235, 240, 245)'}}>
										<div data-v-17ca498c="" data-v-16369cf2="" className="display_tag_item product_inner_tag tag--default">
											<div data-v-17ca498c="" data-v-a7793886="" className="tag display_tag_item" style={{backgroundColor: 'rgb(242, 249, 246)', color: 'rgb(49, 180, 110)'}}>
												<span data-v-17ca498c="" className="tag_text"> 빠른배송 </span>
											</div>
										</div>
										<picture data-v-82b93d2c="" data-v-16369cf2="" className="picture product_img">
											<source data-v-82b93d2c="" type="image/webp" srcSet="https://kream-phinf.pstatic.net/MjAyNDA2MjJfNDUg/MDAxNzE5MDMwMzg4NzUy.Sl-9uwQZMiwX_p1ABfkyg0pWIAR7sjQcv-5sx8n15HUg.HVdHcH-OfAwHNq2OfTKiwzp3nfs4pfjaOSEYVqsyV1Ig.PNG/a_7bd52b94ebf748f9ad7bcc633613ef7b.png?type=m_webp"/>
											<source data-v-82b93d2c="" srcSet="https://kream-phinf.pstatic.net/MjAyNDA2MjJfNDUg/MDAxNzE5MDMwMzg4NzUy.Sl-9uwQZMiwX_p1ABfkyg0pWIAR7sjQcv-5sx8n15HUg.HVdHcH-OfAwHNq2OfTKiwzp3nfs4pfjaOSEYVqsyV1Ig.PNG/a_7bd52b94ebf748f9ad7bcc633613ef7b.png?type=m"/>
											<img data-v-82b93d2c="" alt="나이키 에어포스 1 '07 WB 플랙스" src="https://kream-phinf.pstatic.net/MjAyNDA2MjJfNDUg/MDAxNzE5MDMwMzg4NzUy.Sl-9uwQZMiwX_p1ABfkyg0pWIAR7sjQcv-5sx8n15HUg.HVdHcH-OfAwHNq2OfTKiwzp3nfs4pfjaOSEYVqsyV1Ig.PNG/a_7bd52b94ebf748f9ad7bcc633613ef7b.png?type=m" loading="lazy" className="image full_width"/>
										</picture>
										<span data-v-4382eb99="" data-v-2c8107bc="" aria-label="관심상품" role="button" className="btn_wish" data-v-16369cf2="">
											<svg data-v-4382eb99="" xmlns="http://www.w3.org/2000/svg" className="icon sprite-icons ico-wish-on">
											{/* <use data-v-4382eb99="" href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-ico-wish-on" xlink:href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-ico-wish-on"></use> */}
											</svg>
										</span>
									</div>
								</div>
								<div data-v-2c8107bc="" className="info_box">
									<div data-v-2c8107bc="" className="brand">
										<p data-v-2c8107bc="" className="brand-text"> 상품명 </p>
									</div>
									<p data-v-2c8107bc="" className="name">카테고리</p>
									<div data-v-2c8107bc="" className="price">
										<div data-v-2c8107bc="" className="amount lg">
											<em data-v-2c8107bc="" className="num"> 가격 </em>
										</div>
										<div data-v-2c8107bc="" className="desc">
											<p data-v-2c8107bc="">게시글 위치</p>
										</div>
									</div>
								</div>
							</Link>
						</div>
					</div>
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
