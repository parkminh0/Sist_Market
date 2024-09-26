'use client'
import MyPageSide from '@/component/user/layout/MyPageSide';
import ImageModal from "@/component/admin/post/detail/ImageModal";
import axios from 'axios';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import "/public/css/myPage.css";
import "/public/css/buylistDetail.css";

export default function page() {
    const params = useParams();
    const [pvo, setPvo] = useState({});
    const [price, setPrice] = useState('0원');
    const [lastprice, setLastprice] = useState('0원');
    const [deal_dtm, setDeal_dtm] = useState('');
    const [userreview_dtm, setUserreview_dtm] = useState('');
    const [method, setMethod] = useState('일반 판매');
  
    const API_URL = "/adpost/detail";

    
  const [open, setOpen] = useState(false);
  const [imgurl, setImgurl] = useState("");
  function handleOpen(imgurl) {
    setImgurl(imgurl);
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  
    function getDateFormat(dtm){
        var yyyymmdd = dtm.split(" ")[0];
        var hhmmss = dtm.split(" ")[1];
        var yyyy = yyyymmdd.split("-")[0];
        var mM = yyyymmdd.split("-")[1];
        var dd = yyyymmdd.split("-")[2];
        var hh = hhmmss.split(":")[0];
        var mm = hhmmss.split(":")[1];
        var formatted_dtm = yyyy+"년 "+mM+"월 "+dd+"일  "+hh+"시 "+mm+"분";
        return formatted_dtm;
    }

    function getPostDetail() {
      axios({
        url: API_URL,
        method: "post",
        params: { postkey: params.postkey },
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        setPvo(response.data.pvo);
        var price = response.data.pvo.price;
        var lastprice = response.data.pvo.lastprice;
        price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원";
        setPrice(price);
        lastprice = lastprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원";
        setLastprice(lastprice);
        if(response.data.pvo.method == 1){
          useState('나눔');
        }

        setDeal_dtm(getDateFormat(response.data.pvo.deal_dtm));
        setUserreview_dtm(getDateFormat(response.data.pvo.userreview_dtm));
      });
    }
  
    useEffect(() => {
      getPostDetail();
    }, []);

    return (
        <>
          <article className="_1h4pbgy7wg _1h4pbgy7wz">
            <div className="_6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
              <section style={{ borderBottom: "1px solid #ebebeb" }} className="">
                <div className="_588sy41z _588sy421 _588sy42q _588sy415q _588sy417e">
                  <nav className="iq86zf0">
                    <ol className="iq86zf1 _588sy42q _588sy415q">
                      <li>
                        <Link href="/">
                          <span className="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf3 iq86zf2 _588sy41n">
                            <font style={{ verticalAlign: "inherit" }}>홈</font>
                          </span>
                        </Link>
                        <span className="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf4 _588sy4ze _588sy4w8">
                          <font style={{ verticalAlign: "inherit" }}> &gt;</font>
                        </span>
                      </li>
                    </ol>
                  </nav>
                  <Link href="/myPage">
                    <div className="_588sy41z _588sy421 _588sy42q _588sy415q">
                      <span className="_588sy4192 _588sy41x _588sy41b2 _588sy43">
                        <font style={{ verticalAlign: "inherit" }}>
                          마이 페이지
                        </font>
                      </span>
                    </div>
                  </Link>
                </div>
              </section>
            </div>
            <div className="my_home container my md _6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
              <section className="_1h4pbgy9ug _1h4pbgy8zc _1h4pbgy92j _1h4pbgy7y8 _1h4pbgy83s _1h4pbgy843 _1h4pbgy84k">
                <MyPageSide />
                {/* <!-- 여기서부터 콘텐츠 --> */}
                <div className='detailInfoBody'>
                  <div className='detailInfoTitle'>
                    구매내역 상세
                  </div>
                  <div className='detailInfos'>
                      <div className='detailInfoItem'>
                          <div className='detailInfoPost'>
                            <div className='detailInfoPostDesc'>
                              <div className='detailInfoPostDescImg'>
                                <img src={pvo.pimg_list?pvo.pimg_list[0].imgurl:''}/>
                              </div>
                              <div className='detailInfoPostDescTxt'>
                                <p className='title'>{pvo.title}</p>
                                <p className='category'>{pvo.cvo ? pvo.cvo.categoryname : pvo.title}</p>
                                <p className='hope_place'>{pvo.hope_place}</p>
                              </div>
                            </div>
                            <div className='detailInfoPostEtc'>
                                <p className='method'>{method}</p>
                            </div>
                          </div>
                      </div>
                      <div className='detailInfoItem'>
                          <div className='detailInfoTransaction'>
                            <div className='transactionFinal'>
                              <div className='transactionDesc'>
                                <p>최초금액</p>
                              </div>
                              <div className='transactionPrice'>
                                  <p className='price'>{price}</p>
                              </div>
                              <div className='transactionDesc'>
                                <p>최종금액</p>
                              </div>
                              <div className='transactionPrice'>
                                  <p className='lastprice'>{lastprice}</p>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className='detailInfoItem'>
                          <div class="reviewTitle">
                            <div class="title">
                              판매자 후기
                            </div>
                            <div class="reviewDtm">
                                <p className='dtmDesc'>작성일자</p>
                                <p className='dtmVal'>{pvo.userreview != null ? userreview_dtm : '-'}</p>
                            </div>
                          </div>
                          {
                            pvo.userreview != null ?
                          <div className='detailInfoSeller'>
                            <div className='SellerProfile'>
                              <div className='profiileImg'>
                                <img src={pvo.uvo ? pvo.uvo.imgurl : ''} style={{width: 50, marginTop: 10}}/>
                              </div>
                              <div className='profileDesc'>
                                  <p className='nickname'>{pvo.uvo ? pvo.uvo.nickname : ''}</p>
                                  <p className='userId'>@{pvo.uvo ? pvo.uvo.id : ''}</p>
                              </div>
                            </div>
                            <div className='SellerReview'>
                              <div class="reviewLeft">
                                <div className='userreviewtxt'>
                                    <p className='userreview'>후기: {pvo.userreview}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          :
                          <div
                            style={{
                              textAlign: 'center',
                              padding: '30px',
                            }}>
                            판매자 후기가 없습니다
                          </div>
                          }
                      </div>
                      <div className='detailInfoItem'>
                          <div className='detailInfoTransaction'>
                            <div className='transactionFinal'>
                              <div className='transactionDesc'>
                                <p>거래일시</p>
                              </div>
                              <div className='transactionPrice'>
                                  <p className='price'>{deal_dtm}</p>
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>
                </div>
                <ImageModal open={open} handleClose={handleClose} imgurl={imgurl} />
                {/* <!-- 여기까지 컨텐츠 --> */}
              </section>
            </div>
          </article>
        </>
    )
}
