"use client"
import "/public/css/admin/index.css";

export default function Home() {

  return (
<>
	<div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-he9kdn">
		<div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-10kzmkx">
			<div className="MuiCardHeader-root css-1cg1x61">
				<div className="MuiCardHeader-content css-11qjisw">
					<span className="MuiTypography-root MuiTypography-h5 MuiCardHeader-title css-ol1ja4">
						<div className="MuiStack-root css-1wtl5jp">
							<span className="MuiTypography-root MuiTypography-base.subTitle1B css-1iqlcnz">오늘의 할 일</span>
							<div className="css-1r5gb7q e1irxonl6">
								<div lang="ko_KR" className="css-udaan e1irxonl5">
								<button type="button" lang="ko_KR"className="css-9cqkax e1irxonl4"></button>
									<div className=" css-1rpel5e e1irxonl3">
										<div className=" css-8ji9zs e1irxonl2"></div>
										<button type="button" className="css-bwa5a9 e1irxonl1"></button>
										<span className="css-xloucr e1irxonl0"></span>
									</div>
								</div>
							</div>
						</div>
					</span>
				</div>
			</div>
			<div className="MuiCardContent-root css-bjeup0">
				<div className="MuiGrid-root MuiGrid-container css-1on9dlm">
					<div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true css-r3xjrv">
						<div className="MuiStack-root css-nw2i60">
							<div className="MuiStack-root css-1b6n4o1">
								<div className="MuiStack-root css-zhmvqp">
									<span className="MuiTypography-root MuiTypography-custom.subTitle3MH css-168a1n3">배송 준비중</span>
								</div>
								<div className="MuiStack-root css-278aby">
									<a className="MuiTypography-root MuiTypography-custom.subTitle3BH MuiLink-root MuiLink-underlineAlways css-zkh9pm" href="#">
				{/* ${requestScope.status_vo.d_ready } */}
				</a>
								</div>
							</div>
						</div>
					</div>
					<div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true css-r3xjrv">
						<div className="MuiStack-root css-nw2i60">
							<div className="MuiStack-root css-1b6n4o1">
								<div className="MuiStack-root css-zhmvqp">
									<span className="MuiTypography-root MuiTypography-custom.subTitle3MH css-168a1n3">배송중</span>
								</div>
								<div className="MuiStack-root css-278aby">
									<a className="MuiTypography-root MuiTypography-custom.subTitle3BH MuiLink-root MuiLink-underlineAlways css-zkh9pm" href="#">
				{/* ${requestScope.status_vo.d_ing } */}
				</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true css-r3xjrv">
						<div className="MuiStack-root css-nw2i60">
							<div className="MuiStack-root css-1b6n4o1">
								<div className="MuiStack-root css-zhmvqp">
									<span className="MuiTypography-root MuiTypography-custom.subTitle3MH css-168a1n3">배송완료</span>
								</div>
								<div className="MuiStack-root css-278aby">
									<a className="MuiTypography-root MuiTypography-custom.subTitle3BH MuiLink-root MuiLink-underlineAlways css-zkh9pm" href="#">
				{/* ${requestScope.status_vo.d_end} */}
				</a>
								</div>
							</div>
						</div>
					</div>
					<div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true css-r3xjrv">
						<div className="MuiStack-root css-nw2i60">
							<div className="MuiStack-root css-1b6n4o1">
								<div className="MuiStack-root css-zhmvqp">
									<span className="MuiTypography-root MuiTypography-custom.subTitle3MH css-168a1n3">구매확정</span>
								</div>
								<div className="MuiStack-root css-278aby">
									<a className="MuiTypography-root MuiTypography-custom.subTitle3BH MuiLink-root MuiLink-underlineAlways css-zkh9pm" href="#">
				{/* ${requestScope.status_vo.d_confirm} */}
				</a>
								</div>
							</div>
						</div>
					</div>
					<div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true css-r3xjrv">
						<div className="MuiStack-root css-nw2i60" style={{backgroundColor: 'rgb(254, 246, 248)'}}>
							<div className="MuiStack-root css-1b6n4o1">
								<div className="MuiStack-root css-zhmvqp">
									<span className="MuiTypography-root MuiTypography-custom.subTitle3MH css-168a1n3">취소신청</span>
								</div>
								<div className="MuiStack-root css-278aby">
									<a style={{color: 'rgb(215, 25, 82)'}} className="MuiTypography-root MuiTypography-custom.subTitle3BH MuiLink-root MuiLink-underlineAlways css-zkh9pm" href="#">
				{/* ${requestScope.status_vo.cancel_qty} */}
				</a>
								</div>
							</div>
						</div>
					</div>
					<div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true css-r3xjrv">
						<div className="MuiStack-root css-nw2i60" style={{backgroundColor: 'rgb(254, 246, 248)'}}>
							<div className="MuiStack-root css-1b6n4o1">
								<div className="MuiStack-root css-zhmvqp">
									<span className="MuiTypography-root MuiTypography-custom.subTitle3MH css-168a1n3">교환신청</span>
								</div>
								<div className="MuiStack-root css-278aby">
									<a style={{color: 'rgb(215, 25, 82)'}} className="MuiTypography-root MuiTypography-custom.subTitle3BH MuiLink-root MuiLink-underlineAlways css-zkh9pm" href="#">
				{/* ${requestScope.status_vo.exchange_qty} */}
				</a>
								</div>
							</div>
						</div>
					</div>
					<div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true css-r3xjrv">
						<div className="MuiStack-root css-nw2i60" style={{backgroundColor: 'rgb(254, 246, 248)'}}>
							<div className="MuiStack-root css-1b6n4o1">
								<div className="MuiStack-root css-zhmvqp">
									<span className="MuiTypography-root MuiTypography-custom.subTitle3MH css-168a1n3">환불신청</span>
								</div>
								<div className="MuiStack-root css-278aby">
									<a style={{color: 'rgb(215, 25, 82)'}} className="MuiTypography-root MuiTypography-custom.subTitle3BH MuiLink-root MuiLink-underlineAlways css-zkh9pm" href="#">
				{/* ${requestScope.status_vo.refund_qty } */}
				</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-he9kdn" style={{marginTop:'50px'}}>
		<div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1lp2lxj">
			<div className="MuiCardContent-root css-1wm5j31">
				<div className="MuiStack-root css-3mgmko">
					<div className="MuiTabs-root hasSpacing css-1a8hjjr">
						<div className="MuiTabs-scroller MuiTabs-fixed css-18jpbi7" style={{overflow: 'hidden', marginBottom: '0px'}}>
							<div className="MuiTabs-flexContainer css-7sga7m">
								<button className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary MuiTab-fullWidth Mui-selected css-1klvew2" tabIndex="0" data-tab="0" type="button">일별 매출 현황</button>
							</div>
						</div>
					</div>
					<hr className="MuiDivider-root MuiDivider-fullWidth lowest css-gdc707" color="baseLowTransparent"/>
				</div>
				{/* <!-- 콘텐츠 --> */}
				<div className="MuiStack-root css-19t4a4d">
					{/* <!-- 일별 매출 현황 --> */}
					<div className="MuiGrid-root MuiGrid-container css-336oa0">
						<div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-6.5 css-1e4n2pt" data-testid="DailySales_Grid_4"><div className="MuiTableContainer-root css-9pnnhu">
							<table className="MuiTable-root highlight highlight-list-low fixed css-94knn5">
								<thead className="MuiTableHead-root css-1wbz3t9">
									<tr className="MuiTableRow-root MuiTableRow-head css-1u6a08m">
										<th className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignLeft MuiTableCell-paddingNone MuiTableCell-sizeSmall css-1xcxvll" scope="col" color="#f78555" >
											<div className="MuiStack-root css-zrbz0u" >
												<span className="MuiTypography-root MuiTypography-base.subTitle3M css-ak829n" data-testid="TableHead_Typography">기간별 매출</span>
											</div>
										</th>
										<th className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignLeft MuiTableCell-paddingNone MuiTableCell-sizeSmall css-1a98he0" scope="col" color="#f78555" data-testid="TableHead_TableCell">
											<div className="MuiStack-root css-1jxfipj" data-testid="TableHead_Stack">
												<span className="MuiTypography-root MuiTypography-base.subTitle3M css-ak829n" data-testid="TableHead_Typography">주문</span>
											</div>
										</th>
										<th className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignLeft MuiTableCell-paddingNone MuiTableCell-sizeSmall css-1a98he0" scope="col" color="#f78555" data-testid="TableHead_TableCell">
											<div className="MuiStack-root css-1jxfipj" data-testid="TableHead_Stack">
												<span className="MuiTypography-root MuiTypography-base.subTitle3M css-ak829n" data-testid="TableHead_Typography">결제</span>
											</div>
										</th>
										<th className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignLeft MuiTableCell-paddingNone MuiTableCell-sizeSmall css-1a98he0" scope="col" color="#f78555" data-testid="TableHead_TableCell">
											<div className="MuiStack-root css-1jxfipj" data-testid="TableHead_Stack">
												<span className="MuiTypography-root MuiTypography-base.subTitle3M css-ak829n" data-testid="TableHead_Typography">환불</span>
											</div>
										</th>
									</tr>
								</thead>
								<tbody className="MuiTableBody-root css-1xnox0e" data-testid="TableBody_MuiTableBody">
									{/* <c:set var="order_qty_7" value="0"/>
									<c:set var="order_price_7" value="0"/>
									<c:set var="changed_qty_7" value="0"/>
									<c:set var="changed_price_7" value="0"/>
									<c:set var="cancel_qty_7" value="0"/>
									<c:set var="cancel_price_7" value="0"/>
									<c:set var="order_qty_30" value="0"/>
									<c:set var="order_price_30" value="0"/>
									<c:set var="changed_qty_30" value="0"/>
									<c:set var="changed_price_30" value="0"/>
									<c:set var="cancel_qty_30" value="0"/>
									<c:set var="cancel_price_30" value="0"/>
									<c:forEach var="cell" items="${requestScope.cell_list }" varStatus="idx">
									<c:set var="order_qty_30" value="${order_qty_30 + cell.getOrder_qty()}"/>
									<c:set var="order_price_30" value="${order_price_30 + cell.getOrder_price()}"/>
									<c:set var="changed_qty_30" value="${changed_qty_30 + cell.getChanged_qty()}"/>
									<c:set var="changed_price_30" value="${changed_price_30 + cell.getChanged_price()}"/>
									<c:set var="cancel_qty_30" value="${cancel_qty_30 + cell.getCancel_qty()}"/>
									<c:set var="cancel_price_30" value="${cancel_price_30 + cell.getCancel_price()}"/>
									<c:if test="${idx.index < 7}">
										<c:set var="order_qty_7" value="${order_qty_7 + cell.getOrder_qty()}"/>
										<c:set var="order_price_7" value="${order_price_7 + cell.getOrder_price()}"/>
										<c:set var="changed_qty_7" value="${changed_qty_7 + cell.getChanged_qty()}"/>
										<c:set var="changed_price_7" value="${changed_price_7 + cell.getChanged_price()}"/>
										<c:set var="cancel_qty_7" value="${cancel_qty_7 + cell.getCancel_qty()}"/>
										<c:set var="cancel_price_7" value="${cancel_price_7 + cell.getCancel_price()}"/>
									</c:if>
									<c:if test="${idx.index < 3}">
										<c:if test="${idx.index eq 0}">
											<tr className="MuiTableRow-root css-ig9cz0">												
										</c:if>
										<c:if test="${idx.index ne 0}">
											<tr className="MuiTableRow-root css-1cxpyww" >
										</c:if>
											<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-wfvj3y">
											<c:if test="${idx.index eq 0 }">
												<hr className="MuiDivider-root MuiDivider-fullWidth MuiDivider-vertical lowest css-1orjhxc" color="info" data-testid="TableBodyCell_Divider"/>
												<div className="MuiStack-root css-lmzl00">
													<span className="MuiTypography-root MuiTypography-custom.subTitle3BH css-112v5qi">${cell.getOrder_dtm()}</span>
													<div className="MuiChip-root MuiChip-filled MuiChip-sizeX4Small MuiChip-colorInfo MuiChip-filledInfo css-91c089">
														<span className="MuiChip-label MuiChip-labelX4Small css-v1l1sd">오늘</span>
											</c:if>
											<c:if test="${idx.index ne 0 }">
												<div className="MuiStack-root css-r6kl0b">
													<div className="MuiStack-root css-yacjjn">
														<span className="MuiTypography-root MuiTypography-custom.subTitle3MH css-1q3reqo">${cell.getOrder_dtm()}</span>
											</c:if>
													</div>
												</div>
											</td>
											<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-wfvj3y">
												<div className="MuiStack-root css-s3sz5j" >
													<div className="MuiStack-root css-1tlqmrq" >
														<div className="MuiStack-root css-1biq3zq" >
															<span className="MuiTypography-root MuiTypography-base.body2 css-mr3nge"><fmt:formatNumber value="${cell.getOrder_price() }" type="number"/></span>
															<span className="MuiTypography-root MuiTypography-base.body2 unit css-1m3dqce">원</span>
														</div>
														<div className="MuiChip-root MuiChip-filled MuiChip-sizeX4Small MuiChip-colorDecoGrayLowBaseHigh MuiChip-filledDecoGrayLowBaseHigh css-1o8x7id">
															<span className="MuiChip-label MuiChip-labelX4Small css-v1l1sd"><fmt:formatNumber value="${cell.getOrder_qty() }" type="number"/>건</span>
														</div>
													</div>
												</div>
											</td>
											<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-wfvj3y">
												<div className="MuiStack-root css-s3sz5j" >
												<div className="MuiStack-root css-1tlqmrq" >
												<div className="MuiStack-root css-1biq3zq" >
												<span className="MuiTypography-root MuiTypography-base.body2 css-mr3nge"><fmt:formatNumber value="${cell.getChanged_price() }" type="number"/></span>
												<span className="MuiTypography-root MuiTypography-base.body2 unit css-1m3dqce" data-testid="TableBodyCell_Typography_3">원</span>
												</div>
												<div className="MuiChip-root MuiChip-filled MuiChip-sizeX4Small MuiChip-colorDecoGrayLowBaseHigh MuiChip-filledDecoGrayLowBaseHigh css-1o8x7id" data-testid="TableBodyCell_Chip_1">
												<span className="MuiChip-label MuiChip-labelX4Small css-v1l1sd"><fmt:formatNumber value="${cell.getChanged_qty() }" type="number"/>건</span></div>
												</div>
												</div>
											</td>
												<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-wfvj3y" data-testid="TableBodyCell_TableCell_1"><div className="MuiStack-root css-s3sz5j" data-testid="TableBodyCell_Stack_1">
													<div className="MuiStack-root css-1tlqmrq" data-testid="TableBodyCell_Stack_2">
													<div className="MuiStack-root css-1biq3zq" data-testid="TableBodyCell_Stack_3">
													<span className="MuiTypography-root MuiTypography-base.body2 css-mr3nge" data-testid="TableBodyCell_Typography_2"><fmt:formatNumber value="${cell.getCancel_price() }" type="number"/></span>
													<span className="MuiTypography-root MuiTypography-base.body2 unit css-1m3dqce" data-testid="TableBodyCell_Typography_3">원</span>
													</div>
													<div className="MuiChip-root MuiChip-filled MuiChip-sizeX4Small MuiChip-colorDecoGrayLowBaseHigh MuiChip-filledDecoGrayLowBaseHigh css-1o8x7id" data-testid="TableBodyCell_Chip_1">
													<span className="MuiChip-label MuiChip-labelX4Small css-v1l1sd"><fmt:formatNumber value="${cell.getCancel_qty() }" type="number"/>건</span>
													</div></div></div></td>
											</tr>
									</c:if>
									</c:forEach> */}
									<tr className="MuiTableRow-root css-jhd6ko">
										<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-wfvj3y">
											<div className="MuiStack-root css-lmzl00">
												<span className="MuiTypography-root MuiTypography-custom.subTitle3BH css-112v5qi">최근 7일 평균</span>
											</div>
										</td>
										<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-wfvj3y">
											<div className="MuiStack-root css-s3sz5j">
												<div className="MuiStack-root css-1tlqmrq" data-testid="TableBodyCell_Stack_2">
													<div className="MuiStack-root css-1biq3zq" data-testid="TableBodyCell_Stack_3">
														<span className="MuiTypography-root MuiTypography-base.body2 css-1uxqc2" data-testid="TableBodyCell_Typography_2">
						{/* <fmt:formatNumber value="${order_price_7 / 7 }" pattern="#,###.00"/> */}
						</span>
														<span className="MuiTypography-root MuiTypography-base.body2 unit css-1m3dqce" data-testid="TableBodyCell_Typography_3">원</span>
													</div>
													<div className="MuiChip-root MuiChip-filled MuiChip-sizeX4Small MuiChip-colorDecoBluePurpleLowBaseHigh MuiChip-filledDecoBluePurpleLowBaseHigh css-pm13i0" data-testid="TableBodyCell_Chip_1">
														<span className="MuiChip-label MuiChip-labelX4Small css-v1l1sd">
						{/* <fmt:formatNumber value="${order_qty_7 / 7 }" pattern="#,###.00"/>건 */}
						</span>
													</div>
												</div>
											</div>
										</td>
										<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-wfvj3y" data-testid="TableBodyCell_TableCell_1">
											<div className="MuiStack-root css-s3sz5j" data-testid="TableBodyCell_Stack_1">
												<div className="MuiStack-root css-1tlqmrq" data-testid="TableBodyCell_Stack_2">
													<div className="MuiStack-root css-1biq3zq" data-testid="TableBodyCell_Stack_3">
														<span className="MuiTypography-root MuiTypography-base.body2 css-1uxqc2" data-testid="TableBodyCell_Typography_2">
						{/* <fmt:formatNumber value="${changed_price_7 / 7 }" pattern="#,###.00"/> */}
						</span>
														<span className="MuiTypography-root MuiTypography-base.body2 unit css-1m3dqce" data-testid="TableBodyCell_Typography_3">원</span>
													</div>
													<div className="MuiChip-root MuiChip-filled MuiChip-sizeX4Small MuiChip-colorDecoBluePurpleLowBaseHigh MuiChip-filledDecoBluePurpleLowBaseHigh css-pm13i0">
														<span className="MuiChip-label MuiChip-labelX4Small css-v1l1sd">
						{/* <fmt:formatNumber value="${changed_qty_7 / 7 }" pattern="#,###.00"/>건 */}
						</span>
													</div>
												</div>
											</div>
										</td>
										<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-wfvj3y" data-testid="TableBodyCell_TableCell_1">
											<div className="MuiStack-root css-s3sz5j" data-testid="TableBodyCell_Stack_1">
												<div className="MuiStack-root css-1tlqmrq" data-testid="TableBodyCell_Stack_2">
													<div className="MuiStack-root css-1biq3zq" data-testid="TableBodyCell_Stack_3">
														<span className="MuiTypography-root MuiTypography-base.body2 css-1uxqc2" data-testid="TableBodyCell_Typography_2">
						{/* <fmt:formatNumber value="${cancel_price_7 / 7 }" pattern="#,###.00"/> */}
						</span>
														<span className="MuiTypography-root MuiTypography-base.body2 unit css-1m3dqce" data-testid="TableBodyCell_Typography_3">원</span>
													</div>
													<div className="MuiChip-root MuiChip-filled MuiChip-sizeX4Small MuiChip-colorDecoBluePurpleLowBaseHigh MuiChip-filledDecoBluePurpleLowBaseHigh css-pm13i0">
														<span className="MuiChip-label MuiChip-labelX4Small css-v1l1sd">
						{/* <fmt:formatNumber value="${cancel_qty_7 / 7 }" pattern="#,###.00"/>건 */}
						</span>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr className="MuiTableRow-root css-1cxpyww" data-testid="TableBody_TableRow">
										<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-wfvj3y" data-testid="TableBodyCell_TableCell_1">
											<div className="MuiStack-root css-r6kl0b" data-testid="TableBodyCell_Stack_1">
												<div className="MuiStack-root css-yacjjn" data-testid="TableBodyCell_Stack_4">
													<span className="MuiTypography-root MuiTypography-custom.subTitle3MH css-1q3reqo" data-testid="TableBodyCell_Typography_5">최근 7일 합계</span>
												</div>
											</div>
										</td>
										<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-wfvj3y" data-testid="TableBodyCell_TableCell_1">
											<div className="MuiStack-root css-s3sz5j" data-testid="TableBodyCell_Stack_1">
												<div className="MuiStack-root css-1tlqmrq" data-testid="TableBodyCell_Stack_2">
													<div className="MuiStack-root css-1biq3zq" data-testid="TableBodyCell_Stack_3">
														<span className="MuiTypography-root MuiTypography-base.body2 css-mr3nge" data-testid="TableBodyCell_Typography_2">
						{/* <fmt:formatNumber value="${order_price_7 }" pattern="#,###.00"/> */}
						</span>
														<span className="MuiTypography-root MuiTypography-base.body2 unit css-1m3dqce" data-testid="TableBodyCell_Typography_3">원</span>
													</div>
													<div className="MuiChip-root MuiChip-filled MuiChip-sizeX4Small MuiChip-colorDecoGrayLowBaseHigh MuiChip-filledDecoGrayLowBaseHigh css-1o8x7id" data-testid="TableBodyCell_Chip_1">
														<span className="MuiChip-label MuiChip-labelX4Small css-v1l1sd">
						{/* <fmt:formatNumber value="${order_qty_7}" pattern="#,###.00"/>건 */}
						</span>
													</div>
												</div>
											</div>
										</td>
										<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-wfvj3y" data-testid="TableBodyCell_TableCell_1">
											<div className="MuiStack-root css-s3sz5j" data-testid="TableBodyCell_Stack_1">
												<div className="MuiStack-root css-1tlqmrq" data-testid="TableBodyCell_Stack_2">
													<div className="MuiStack-root css-1biq3zq" data-testid="TableBodyCell_Stack_3">
														<span className="MuiTypography-root MuiTypography-base.body2 css-mr3nge" data-testid="TableBodyCell_Typography_2">
						{/* <fmt:formatNumber value="${changed_price_7 }" pattern="#,###.00"/> */}
						</span>
														<span className="MuiTypography-root MuiTypography-base.body2 unit css-1m3dqce" data-testid="TableBodyCell_Typography_3">원</span>
													</div>
													<div className="MuiChip-root MuiChip-filled MuiChip-sizeX4Small MuiChip-colorDecoGrayLowBaseHigh MuiChip-filledDecoGrayLowBaseHigh css-1o8x7id" data-testid="TableBodyCell_Chip_1">
														<span className="MuiChip-label MuiChip-labelX4Small css-v1l1sd">
						{/* <fmt:formatNumber value="${changed_qty_7 }" pattern="#,###.00"/>건 */}
						</span>
													</div>
												</div>
											</div>
										</td>
										<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-wfvj3y" data-testid="TableBodyCell_TableCell_1">
											<div className="MuiStack-root css-s3sz5j" data-testid="TableBodyCell_Stack_1">
												<div className="MuiStack-root css-1tlqmrq" data-testid="TableBodyCell_Stack_2">
													<div className="MuiStack-root css-1biq3zq" data-testid="TableBodyCell_Stack_3">
														<span className="MuiTypography-root MuiTypography-base.body2 css-mr3nge" data-testid="TableBodyCell_Typography_2">
						{/* <fmt:formatNumber value="${cancel_price_7}" pattern="#,###.00"/> */}
						</span>
														<span className="MuiTypography-root MuiTypography-base.body2 unit css-1m3dqce" data-testid="TableBodyCell_Typography_3">원</span>
													</div>
													<div className="MuiChip-root MuiChip-filled MuiChip-sizeX4Small MuiChip-colorDecoGrayLowBaseHigh MuiChip-filledDecoGrayLowBaseHigh css-1o8x7id" data-testid="TableBodyCell_Chip_1">
														<span className="MuiChip-label MuiChip-labelX4Small css-v1l1sd">
						{/* <fmt:formatNumber value="${cancel_qty_7}" pattern="#,###.00"/>건 */}
						</span>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr className="MuiTableRow-root css-1cxpyww" data-testid="TableBody_TableRow">
										<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-wfvj3y" data-testid="TableBodyCell_TableCell_1">
											<div className="MuiStack-root css-r6kl0b" data-testid="TableBodyCell_Stack_1">
												<div className="MuiStack-root css-yacjjn" data-testid="TableBodyCell_Stack_4">
													<span className="MuiTypography-root MuiTypography-custom.subTitle3MH css-1q3reqo" data-testid="TableBodyCell_Typography_5">최근 30일 평균</span>
												</div>
											</div>
										</td>
										<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-wfvj3y" data-testid="TableBodyCell_TableCell_1">
											<div className="MuiStack-root css-s3sz5j" data-testid="TableBodyCell_Stack_1">
												<div className="MuiStack-root css-1tlqmrq" data-testid="TableBodyCell_Stack_2">
													<div className="MuiStack-root css-1biq3zq" data-testid="TableBodyCell_Stack_3">
														<span className="MuiTypography-root MuiTypography-base.body2 css-mr3nge" data-testid="TableBodyCell_Typography_2">
						{/* <fmt:formatNumber value="${order_price_30 / 30}" pattern="#,###.00"/> */}
						</span>
														<span className="MuiTypography-root MuiTypography-base.body2 unit css-1m3dqce" data-testid="TableBodyCell_Typography_3">원</span>
													</div>
													<div className="MuiChip-root MuiChip-filled MuiChip-sizeX4Small MuiChip-colorDecoGrayLowBaseHigh MuiChip-filledDecoGrayLowBaseHigh css-1o8x7id" data-testid="TableBodyCell_Chip_1">
														<span className="MuiChip-label MuiChip-labelX4Small css-v1l1sd">
						{/* <fmt:formatNumber value="${order_qty_30 / 30}" pattern="#,###.00"/>건 */}
						</span>
													</div>
												</div>
											</div>
										</td>
										<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-wfvj3y" data-testid="TableBodyCell_TableCell_1">
											<div className="MuiStack-root css-s3sz5j" data-testid="TableBodyCell_Stack_1">
												<div className="MuiStack-root css-1tlqmrq" data-testid="TableBodyCell_Stack_2">
													<div className="MuiStack-root css-1biq3zq" data-testid="TableBodyCell_Stack_3">
														<span className="MuiTypography-root MuiTypography-base.body2 css-mr3nge" data-testid="TableBodyCell_Typography_2">
						{/* <fmt:formatNumber value="${changed_price_30 / 30}" pattern="#,###.00"/> */}
						</span>
														<span className="MuiTypography-root MuiTypography-base.body2 unit css-1m3dqce" data-testid="TableBodyCell_Typography_3">원</span>
													</div>
													<div className="MuiChip-root MuiChip-filled MuiChip-sizeX4Small MuiChip-colorDecoGrayLowBaseHigh MuiChip-filledDecoGrayLowBaseHigh css-1o8x7id" >
														<span className="MuiChip-label MuiChip-labelX4Small css-v1l1sd">
						{/* <fmt:formatNumber value="${changed_qty_30 / 30}" pattern="#,###.00"/>건 */}
						</span>
													</div>
												</div>
											</div>
										</td>
										<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-wfvj3y" data-testid="TableBodyCell_TableCell_1">
											<div className="MuiStack-root css-s3sz5j" data-testid="TableBodyCell_Stack_1">
												<div className="MuiStack-root css-1tlqmrq" data-testid="TableBodyCell_Stack_2">
													<div className="MuiStack-root css-1biq3zq" data-testid="TableBodyCell_Stack_3">
														<span className="MuiTypography-root MuiTypography-base.body2 css-mr3nge" data-testid="TableBodyCell_Typography_2">
						{/* <fmt:formatNumber value="${cancel_price_30 / 30}" pattern="#,###.00"/> */}
						</span>
														<span className="MuiTypography-root MuiTypography-base.body2 unit css-1m3dqce" data-testid="TableBodyCell_Typography_3">원</span>
													</div>
													<div className="MuiChip-root MuiChip-filled MuiChip-sizeX4Small MuiChip-colorDecoGrayLowBaseHigh MuiChip-filledDecoGrayLowBaseHigh css-1o8x7id">
														<span className="MuiChip-label MuiChip-labelX4Small css-v1l1sd">
						{/* <fmt:formatNumber value="${cancel_qty_30 / 30}" pattern="#,###.00"/>건 */}
						</span>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr className="MuiTableRow-root css-jhd6ko" data-testid="TableBody_TableRow">
										<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-wfvj3y" data-testid="TableBodyCell_TableCell">
											<div className="MuiStack-root css-lmzl00" data-testid="TableBodyCell_Stack">
												<span className="MuiTypography-root MuiTypography-custom.subTitle3BH css-112v5qi" data-testid="TableBodyCell_Typography">최근 30일 합계</span>
											</div>
										</td>
										<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-wfvj3y" data-testid="TableBodyCell_TableCell_1">
											<div className="MuiStack-root css-s3sz5j" data-testid="TableBodyCell_Stack_1">
												<div className="MuiStack-root css-1tlqmrq" data-testid="TableBodyCell_Stack_2">
													<div className="MuiStack-root css-1biq3zq" data-testid="TableBodyCell_Stack_3">
														<span className="MuiTypography-root MuiTypography-base.body2 css-1uxqc2" data-testid="TableBodyCell_Typography_2">
						{/* <fmt:formatNumber value="${order_price_30}" pattern="#,###.00"/> */}
						</span>
														<span className="MuiTypography-root MuiTypography-base.body2 unit css-1m3dqce" data-testid="TableBodyCell_Typography_3">원</span>
													</div>
													<div className="MuiChip-root MuiChip-filled MuiChip-sizeX4Small MuiChip-colorDecoBluePurpleLowBaseHigh MuiChip-filledDecoBluePurpleLowBaseHigh css-pm13i0">
														<span className="MuiChip-label MuiChip-labelX4Small css-v1l1sd">
						{/* <fmt:formatNumber value="${order_qty_30}" pattern="#,###.00"/>건 */}
						</span>
													</div>
												</div>
											</div>
										</td>
										<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-wfvj3y" data-testid="TableBodyCell_TableCell_1">
											<div className="MuiStack-root css-s3sz5j" data-testid="TableBodyCell_Stack_1">
												<div className="MuiStack-root css-1tlqmrq" data-testid="TableBodyCell_Stack_2">
													<div className="MuiStack-root css-1biq3zq" data-testid="TableBodyCell_Stack_3">
														<span className="MuiTypography-root MuiTypography-base.body2 css-1uxqc2" data-testid="TableBodyCell_Typography_2">
						{/* <fmt:formatNumber value="${changed_price_30}" pattern="#,###.00"/> */}
						</span>
														<span className="MuiTypography-root MuiTypography-base.body2 unit css-1m3dqce" data-testid="TableBodyCell_Typography_3">원</span>
													</div>
													<div className="MuiChip-root MuiChip-filled MuiChip-sizeX4Small MuiChip-colorDecoBluePurpleLowBaseHigh MuiChip-filledDecoBluePurpleLowBaseHigh css-pm13i0">
														<span className="MuiChip-label MuiChip-labelX4Small css-v1l1sd">
						{/* <fmt:formatNumber value="${changed_qty_30}" pattern="#,###.00"/>건 */}
						</span>
													</div>
												</div>
											</div>
										</td>
										<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-wfvj3y" data-testid="TableBodyCell_TableCell_1">
											<div className="MuiStack-root css-s3sz5j" data-testid="TableBodyCell_Stack_1">
												<div className="MuiStack-root css-1tlqmrq" data-testid="TableBodyCell_Stack_2">
													<div className="MuiStack-root css-1biq3zq" data-testid="TableBodyCell_Stack_3">
														<span className="MuiTypography-root MuiTypography-base.body2 css-1uxqc2" data-testid="TableBodyCell_Typography_2">
						{/* <fmt:formatNumber value="${cancel_price_30}" pattern="#,###.00"/> */}
						</span>
														<span className="MuiTypography-root MuiTypography-base.body2 unit css-1m3dqce" data-testid="TableBodyCell_Typography_3">원</span>
													</div>
													<div className="MuiChip-root MuiChip-filled MuiChip-sizeX4Small MuiChip-colorDecoBluePurpleLowBaseHigh MuiChip-filledDecoBluePurpleLowBaseHigh css-pm13i0">
														<span className="MuiChip-label MuiChip-labelX4Small css-v1l1sd">
						{/* <fmt:formatNumber value="${cancel_qty_30}" pattern="#,###.00"/>건 */}
						</span>
													</div>
												</div>
											</div>
										</td>
									</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</>
  );
}