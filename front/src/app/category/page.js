"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function page() {
    const [category_list, setCategory_list] = useState([]);
	
	function getData(){
		axios.get("/category/all")
		.then((res) => {
			console.log(res);
			setCategory_list(res.data.category_list);
		})
	}

	useEffect(() => {
		getData();
	}, [])

  return (
    <>
    <article class="_1h4pbgy7wg _1h4pbgy7wz">
		<div class="_6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
			<section style="border-bottom: 1px solid #ebebeb;" class="">
				<div class="_588sy41z _588sy421 _588sy42q _588sy415q _588sy417e">
					<nav class="iq86zf0">
						<ol class="iq86zf1 _588sy42q _588sy415q">
							<li>
								<a href="/market/">
									<span class="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf3 iq86zf2 _588sy41n">
										<font style={{verticalAlign: 'inherit'}}>홈</font>
									</span>
								</a>
								<span class="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf4 _588sy4ze _588sy4w8">
									<font style={{verticalAlign: 'inherit'}}> &gt;</font>
								</span>
							</li>
						</ol>
					</nav>
					<div class="_588sy41z _588sy421 _588sy42q _588sy415q">
						<span class="_588sy4192 _588sy41x _588sy41b2 _588sy43">
							<font style={{verticalAlign: 'inherit'}}>카테고리</font>
						</span>
					</div>
				</div>
				<div class="_1h4pbgy7dk _1h4pbgy7i8 _1h4pbgy7w0">
					<h1 class="_1h4pbgy78o _1h4pbgy796 _1h4pbgy79g _1h4pbgy7ag _1h4pbgy7c8">
						<font style={{verticalAlign: 'inherit'}}>카테고리</font>
					</h1>
				</div>
			</section>
			<div class="jeff5f0 _1h4pbgy9vc _1h4pbgy9xs _1h4pbgy91c _1h4pbgy92h _1h4pbgy8ze _1h4pbgy7kw _1h4pbgy7l7 _1h4pbgy7lo _1h4pbgy7xc _1h4pbgy7xu _1h4pbgy7yb _1h4pbgy7yt">
                {category_list.map((item, i) => (
                <Link data-gtm="categories" class="_1h4pbgy9ug _1h4pbgy9wg" href={`post?sort=recent&category=${item.categorykey}`}>
                    <article class="_1xxhs21o _1xxhs21l _1h4pbgy9ug _1h4pbgya0o _1h4pbgy9vs _1h4pbgy90o _1h4pbgy9wo _1xxhs21r _1xxhs21k _1xxhs21l _1xxhs21m">
						<div class="_1xxhs21s _1h4pbgy1ts _1h4pbgya2w _1h4pbgy98g _1h4pbgya0o _1h4pbgy9w0 _1h4pbgy8jc">
							<span class="_1xxhs21t _1h4pbgya3s _1h4pbgya0w _1h4pbgy98o _1h4pbgy9jc _1h4pbgy8jc _1h4pbgy8tk lazy-load-image-background opacity lazy-load-image-loaded" style={{color:'transparent',display:'inline-block'}}>
								<img class="_1h4pbgy8jc _1h4pbgy8tk" src={item.img_url} alt="썸네일"/>
							</span>
						</div>
						<div>
							<div class="_1xxhs21u _1xxhs21n _1h4pbgy8g _1h4pbgy7ag _1h4pbgy9yg _1h4pbgya4g">
								<font style={{verticalAlign: 'inherit'}}>{item.categoryname}</font>
							</div>
						</div>
					</article>
                </Link>
                ))}
			</div>
		</div>
	</article>
	<div class="_588sy4rk _588sy4rr _588sy4ry _588sy4s5"><div class="_1h4pbgy14w _1h4pbgy9ug _1h4pbgy9xc _1h4pbgya2w">
    <div class="a1nvr40 _1h4pbgy7nk _1h4pbgy7o1 _1h4pbgy7oy _1h4pbgy7pn _1h4pbgy7pw _1h4pbgy7qd _1h4pbgy7s8 _1h4pbgy7sp _1h4pbgy7tm _1h4pbgy7ub _1h4pbgy7uk _1h4pbgy7v1 _1h4pbgy14w _1h4pbgy8jc"><div class="a1nvr41">
    <div class="a1nvr42 _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy9wi _1h4pbgy9vs _1h4pbgya0o">
    <div class="a1nvr43 _1h4pbgy78g _1h4pbgy78p _1h4pbgy796 _1h4pbgy79n _1h4pbgy7ag _1h4pbgy7c8 _1h4pbgy7bk _1h4pbgy7az _1h4pbgy7b8 _1h4pbgy48 _1h4pbgya54 _1h4pbgya4i _19xafot0 _19xafot4 _19xafot5" style="--_19xafot2:0ms;--_19xafot1:500ms;--_19xafot3:translateY(1rem)">
        <font style={{verticalAlign: 'inherit'}}>오늘 대단한 발견을 해보세요!</font>
        </div>
        <div class="a1nvr44 _1h4pbgy79c _1h4pbgy7a3 _1h4pbgy7ac _1h4pbgy7ag _1h4pbgy7c8 _1h4pbgy7bk _1h4pbgy7az _1h4pbgy7b8 _1h4pbgy8g _1h4pbgy81k _19xafot0 _19xafot4 _19xafot5" style="--_19xafot2: 0ms; --_19xafot1: 500ms; --_19xafot3: translateY(1rem);"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>앱을 받으세요</font></font></div><div class="a1nvr45 _1h4pbgy9vc _1h4pbgy90g _1h4pbgy90r">
            <a class="_19xafot0 _19xafot4 _19xafot5" style="--_19xafot2: 0ms; --_19xafot1: 500ms; --_19xafot3: translateY(1rem);" target="_blank" rel="noopener noreferrer">
                <img class="_1h4pbgy8rk _1h4pbgy8rv _1h4pbgy8s4" src="https://karrotmarket-com-sanity-cdn.krrt.io/production/49380c1c7e70e49f0f93baf0f790925eefc69082-120x40.svg" alt="앱스토어에서 다운로드"/></a>
                <a class="_19xafot0 _19xafot4 _19xafot5" style="--_19xafot2: 0ms; --_19xafot1: 500ms; --_19xafot3: translateY(1rem);" target="_blank" rel="noopener noreferrer">
            <img class="_1h4pbgy8rk _1h4pbgy8rv _1h4pbgy8s4" src="https://karrotmarket-com-sanity-cdn.krrt.io/production/0d8f72b8e4cdb98af115a7c1f04c4abf19f5c419-180x53.svg" alt="Google Play에서 받으세요"/></a></div></div><div class="a1nvr46">
                <img src="https://karrotmarket-com-sanity-cdn.krrt.io/production/bff14eb869318da13eeb329ac060450dfe1ecadf-750x1624.png" class="a1nvr49 a1nvr48 _1h4pbgy95k _1h4pbgya0o _19xafot0 _19xafot4 _19xafot5" alt="홈 피드 화면의 스크린샷" style="--_19xafot2: 0ms; --_19xafot1: 1000ms; --_19xafot3: translateY(1rem);"/>
                <img src="https://karrotmarket-com-sanity-cdn.krrt.io/production/5cfdb708e8491051b4765819e796ca373e58fc44-753x1637.png" class="a1nvr4a a1nvr48 _1h4pbgy95k _1h4pbgya0o _19xafot0 _19xafot4 _19xafot5" alt="상세 페이지의 스크린샷" style="--_19xafot2: 0ms; --_19xafot1: 1000ms; --_19xafot3: translateY(-1rem);"/>
                <img src="https://karrotmarket-com-sanity-cdn.krrt.io/production/1da74f52dfcb54be6b1ec40af8d8480ed6abc4c0-900x339.png" class="a1nvr4b _19xafot0 _19xafot4 _19xafot5" alt="홈 피드 항목의 스크린샷" style="--_19xafot2: 0ms; --_19xafot1: 1000ms; --_19xafot3: translateY(1rem);"/>
                <div class="a1nvr47"></div></div></div></div></div></div>

    </>
  )
}
