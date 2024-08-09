import MyPageSide from '@/component/user/layout/MyPageSide'
import React from 'react'
import "/public/css/myPage.css";
import "/public/css/likelist.css";
import Link from 'next/link';

export default function Page() {
    // $(function(){
	// 	$("button.saved-chip").click(function(){
	// 		if($(this).hasClass("active"))
	// 			return;
			
	// 		$("button.saved-chip").removeClass("active");
	// 		$(this).addClass("active");
	// 	});
	// })
    
  return (
<>
<article className="_1h4pbgy7wg _1h4pbgy7wz">
		<div className="_6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
			<section style={{borderBottom: '1px solid #ebebeb'}} className="">
				<div className="_588sy41z _588sy421 _588sy42q _588sy415q _588sy417e">
					<nav className="iq86zf0">
						<ol className="iq86zf1 _588sy42q _588sy415q">
							<li>
								<a href="/">
									<span className="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf3 iq86zf2 _588sy41n">
										<font style={{verticalAlign: 'inherit'}}>홈</font>
									</span>
								</a>
								<span className="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf4 _588sy4ze _588sy4w8">
									<font style={{verticalAlign: 'inherit'}}> &gt;</font>
								</span>
							</li>
						</ol>
					</nav>
					<a href="/myPage">
						<div className="_588sy41z _588sy421 _588sy42q _588sy415q">
							<span className="_588sy4192 _588sy41x _588sy41b2 _588sy43">
								<font style={{verticalAlign: 'inherit'}}>마이 페이지</font>
							</span>
						</div>
					</a>
				</div>
				<a href="/myPage/likelist">
					<div className="_1h4pbgy7dk _1h4pbgy7j7 _1h4pbgy7j0 _1h4pbgy7il _1h4pbgy7w0">
						<h1 className="_1h4pbgy78o _1h4pbgy796 _1h4pbgy79g _1h4pbgy7ag _1h4pbgy7c8">
							<font style={{verticalAlign: 'inherit'}}>관심목록</font>
						</h1>
					</div>
				</a>
			</section>
		</div>
		<div className="my_home container my md _6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
			<section className="_1h4pbgy9ug _1h4pbgy8zc _1h4pbgy92j _1h4pbgy7y8 _1h4pbgy83s _1h4pbgy843 _1h4pbgy84k">
				{/* <jsp:include page="/WEB-INF/views/user/myPageSub/myPageSide.jsp"/> */}
                <MyPageSide/>
				{/* <!-- 여기서부터 콘텐츠 --> */}
				<div data-v-81750584="" data-v-0adb81cc="" className="content_area my-page-content">
				<div data-v-6b53f901="" data-v-81750584="" className="content_title border">
					<div data-v-6b53f901="" className="title">
						<h3 data-v-6b53f901="">관심목록</h3>
					</div>
				</div>
				<div data-v-09af5873="" data-v-81750584="" className="saved-chips-container">
					<button data-v-09af5873="" className="saved-chip active">
						<a data-v-09af5873="" aria-current="page" className="nuxt-link-exact-active nuxt-link-active">상품</a>
					</button>
					<button data-v-09af5873="" className="saved-chip">
						<a data-v-09af5873="" className="">사용자</a>
					</button>
					<button data-v-09af5873="" className="saved-chip">
						<a data-v-09af5873="" className="">카테고리</a>
					</button>
					<button data-v-09af5873="" className="saved-chip">
						<a data-v-09af5873="" className="">키워드</a>
					</button>
				</div>
				<div data-v-81750584="" className="saved-product">
					<div data-v-3d362ce8="">
						{/* <!-- 없을 경우 --> */}
						<div data-v-3d362ce8="" className="content">
							<div data-v-24868902="" data-v-eff62a72="" className="empty_area">
								<p data-v-24868902="" className="desc">관심 상품이 없습니다.</p>
								<a data-v-420a5cda="" data-v-24868902="" href="/post" className="btn outlinegrey small"> SHOP 바로가기 </a>
							</div>
						</div>
						{/* <!--  --> */}
						<div data-v-3d362ce8="" className="my_interest">
							<div data-v-3d362ce8="" className="content-header">
								<div data-v-3d362ce8="" className="total-rows">전체 10</div>
								<div data-v-69f3b122="" data-v-3d362ce8="" className="filter_sorting">
									<button data-v-69f3b122="" type="button" className="sorting_title"> 관심 등록순 </button>
								</div>
							</div>
							<ul data-v-6aa963fd="" data-v-3d362ce8="" className="wish_list">
								{/* ForEach로 돌리기 */}
								<li data-v-6aa963fd="">
									<div data-v-6aa963fd="" className="wish_item">
										<div data-v-6aa963fd="" className="wish_product">
											<div data-v-6aa963fd="" className="product_box">
												<div data-v-16369cf2="" data-v-6aa963fd="" className="product" style={{backgroundColor: 'rgb(235, 240, 245)'}}>
													<div data-v-17ca498c="" data-v-16369cf2="" className="display_tag_item product_inner_tag tag--default">
														<span data-v-17ca498c="" className="tag_text"></span>
													</div>
													<picture data-v-82b93d2c="" data-v-16369cf2="" className="picture product_img">
														<source data-v-82b93d2c="" type="image/webp" srcSet="https://kream-phinf.pstatic.net/MjAyNDA2MjJfNDUg/MDAxNzE5MDMwMzg4NzUy.Sl-9uwQZMiwX_p1ABfkyg0pWIAR7sjQcv-5sx8n15HUg.HVdHcH-OfAwHNq2OfTKiwzp3nfs4pfjaOSEYVqsyV1Ig.PNG/a_7bd52b94ebf748f9ad7bcc633613ef7b.png?type=m_webp"/>
														<source data-v-82b93d2c="" srcSet="https://kream-phinf.pstatic.net/MjAyNDA2MjJfNDUg/MDAxNzE5MDMwMzg4NzUy.Sl-9uwQZMiwX_p1ABfkyg0pWIAR7sjQcv-5sx8n15HUg.HVdHcH-OfAwHNq2OfTKiwzp3nfs4pfjaOSEYVqsyV1Ig.PNG/a_7bd52b94ebf748f9ad7bcc633613ef7b.png?type=m"/>
                                                        <img data-v-82b93d2c="" alt="상품 이미지" src="https://kream-phinf.pstatic.net/MjAyNDA2MjJfNDUg/MDAxNzE5MDMwMzg4NzUy.Sl-9uwQZMiwX_p1ABfkyg0pWIAR7sjQcv-5sx8n15HUg.HVdHcH-OfAwHNq2OfTKiwzp3nfs4pfjaOSEYVqsyV1Ig.PNG/a_7bd52b94ebf748f9ad7bcc633613ef7b.png?type=m" loading="lazy" className="image full_width"/>
													</picture>
												</div>
											</div>
											<div data-v-6aa963fd="" className="product_detail">
												<div data-v-6aa963fd="" className="brand_link">
													<a data-v-6aa963fd="" href="#" className="brand-text"> 상품명</a>
												</div>
												<p data-v-6aa963fd="" className="name">카테고리</p>
												<p data-v-6aa963fd="" className="size">
													<span data-v-6aa963fd="">위치</span>
												</p>
											</div>
											<div data-v-9ff60cb2="" data-v-6aa963fd="" className="wish_buy">
												<div data-v-9ff60cb2="">
													<div data-v-0b6ddb6a="" data-v-9ff60cb2="" className="division_btn_box lg">
														<button data-v-0b6ddb6a="" className="btn_action" style={{backgroundColor: 'rgb(239, 98, 83)'}}>
															<strong data-v-0b6ddb6a="" className="title">457,000원</strong>
														</button>
													</div>
													<a data-v-9ff60cb2="" href="#" className="status_link"> 삭제 </a>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li data-v-6aa963fd="">
									<div data-v-6aa963fd="" className="wish_item">
										<div data-v-6aa963fd="" className="wish_product">
											<div data-v-6aa963fd="" className="product_box">
												<div data-v-16369cf2="" data-v-6aa963fd="" className="product" style={{backgroundColor: 'rgb(235, 240, 245)'}}>
													<div data-v-17ca498c="" data-v-16369cf2="" className="display_tag_item product_inner_tag tag--default">
														<span data-v-17ca498c="" className="tag_text"></span>
													</div>
													<picture data-v-82b93d2c="" data-v-16369cf2="" className="picture product_img">
														<source data-v-82b93d2c="" type="image/webp" srcSet="https://kream-phinf.pstatic.net/MjAyNDA2MjJfNDUg/MDAxNzE5MDMwMzg4NzUy.Sl-9uwQZMiwX_p1ABfkyg0pWIAR7sjQcv-5sx8n15HUg.HVdHcH-OfAwHNq2OfTKiwzp3nfs4pfjaOSEYVqsyV1Ig.PNG/a_7bd52b94ebf748f9ad7bcc633613ef7b.png?type=m_webp"/>
														<source data-v-82b93d2c="" srcSet="https://kream-phinf.pstatic.net/MjAyNDA2MjJfNDUg/MDAxNzE5MDMwMzg4NzUy.Sl-9uwQZMiwX_p1ABfkyg0pWIAR7sjQcv-5sx8n15HUg.HVdHcH-OfAwHNq2OfTKiwzp3nfs4pfjaOSEYVqsyV1Ig.PNG/a_7bd52b94ebf748f9ad7bcc633613ef7b.png?type=m"/>
                                                        <img data-v-82b93d2c="" alt="상품 이미지" src="https://kream-phinf.pstatic.net/MjAyNDA2MjJfNDUg/MDAxNzE5MDMwMzg4NzUy.Sl-9uwQZMiwX_p1ABfkyg0pWIAR7sjQcv-5sx8n15HUg.HVdHcH-OfAwHNq2OfTKiwzp3nfs4pfjaOSEYVqsyV1Ig.PNG/a_7bd52b94ebf748f9ad7bcc633613ef7b.png?type=m" loading="lazy" className="image full_width"/>
													</picture>
												</div>
											</div>
											<div data-v-6aa963fd="" className="product_detail">
												<div data-v-6aa963fd="" className="brand_link">
													<a data-v-6aa963fd="" href="#" className="brand-text"> 상품명</a>
												</div>
												<p data-v-6aa963fd="" className="name">카테고리</p>
												<p data-v-6aa963fd="" className="size">
													<span data-v-6aa963fd="">위치</span>
												</p>
											</div>
											<div data-v-9ff60cb2="" data-v-6aa963fd="" className="wish_buy">
												<div data-v-9ff60cb2="">
													<div data-v-0b6ddb6a="" data-v-9ff60cb2="" className="division_btn_box lg">
														<button data-v-0b6ddb6a="" className="btn_action" style={{backgroundColor: '#495057'}}>
															<strong data-v-0b6ddb6a="" className="title">거래완료</strong>
														</button>
													</div>
													<a data-v-9ff60cb2="" href="#" className="status_link"> 삭제 </a>
												</div>
											</div>
										</div>
									</div>
								</li>
							</ul>
							{/* 페이징 */}
							{/* <div data-v-1f9de2f0="" data-v-3d362ce8="" className="pagination">
                                <div data-v-1f9de2f0="" className="pagination_box first last">
                                    <div data-v-1f9de2f0="" className="prev_btn_box">
                                        <a data-v-1f9de2f0="" href="/saved/tab/saved-product?page=1" className="btn_arr" aria-label="첫 페이지">
                                            <svg data-v-1f9de2f0="" xmlns="http://www.w3.org/2000/svg" className="arr-page-first icon sprite-icons">
                                                <use data-v-1f9de2f0="" href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-arr-page-first" xlink:href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-arr-page-first"></use>
                                            </svg>
                                        </a>
                                        <a data-v-1f9de2f0="" href="/saved/tab/saved-product?page=0" className="btn_arr" aria-label="이전 페이지">
                                            <svg data-v-1f9de2f0="" xmlns="http://www.w3.org/2000/svg" className="arr-page-prev icon sprite-icons">
                                                <use data-v-1f9de2f0="" href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-arr-page-prev" xlink:href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-arr-page-prev"></use>
                                            </svg>
                                        </a>
                                    </div>
                                    <div data-v-1f9de2f0="" className="page_bind">
                                        <a data-v-1f9de2f0="" href="/saved/tab/saved-product?page=1" className="btn_page active" aria-label="1페이지"> 1 </a>
                                    </div>
                                    <div data-v-1f9de2f0="" className="next_btn_box">
                                        <a data-v-1f9de2f0="" href="/saved/tab/saved-product?page=2" className="btn_arr" aria-label="다음 페이지">
                                            <svg data-v-1f9de2f0="" xmlns="http://www.w3.org/2000/svg" className="arr-page-next icon sprite-icons">
                                                <use data-v-1f9de2f0="" href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-arr-page-next" xlink:href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-arr-page-next"></use>
                                            </svg>
                                        </a>
                                        <a data-v-1f9de2f0="" href="/saved/tab/saved-product?page=1" className="btn_arr" aria-label="마지막 페이지">
                                            <svg data-v-1f9de2f0="" xmlns="http://www.w3.org/2000/svg" className="arr-page-last icon sprite-icons">
                                                <use data-v-1f9de2f0="" href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-arr-page-last" xlink:href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-arr-page-last"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div> */}
                			{/* 페이징 */}
                        </div>
                    </div>
                </div>
            </div>
			{/* 여기까지 컨텐츠 */}
			</section>
		</div>
	</article>
</>
  )
}
