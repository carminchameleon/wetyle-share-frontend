import React, { Component } from "react";
import "Pages/StoreDetail/Detail.scss";
import Dlcoupon from "Img/Dlcoupon.png";
const discount = document.getElementsByClassName("discount_hide_box");

class Detail extends Component {
  constructor() {
    super();

    // this.discountHandleClick = this.discountHandleClick.bind(this);
    // this.discountOutsideClick = this.discountOutsideClick.bind(this);
    this.state = {
      discountInfo: false
    };
  }
  componentDidMount() {
    this.div.addEventListener("click", this.discountHandleClick);
  }

  discountHandleClick = () => {
    console.log("hi");
    this.setState(state => ({ discountInfo: !state.discountInfo }));
    console.log(this.state);
  };

  render() {
    // const detaillName = {};
    return (
      <body>
        <div>
          <header>
            <div className="li_parent"></div>
          </header>
          <div className="biggest_box_parent">
            <div className="biggest_box">
              <div className="biggest_margin_box">
                <div className="detail_name_parent">
                  <p height="3.99rem" className="detail_name">
                    나이키 NSW 후드/후드집업 5종 택일
                  </p>
                </div>
                <div className="box_for_detail_main">
                  {/* 제품 사진이랑 가격, 구매 칸 등등 */}
                  <div className="div_for_img">
                    {/* {img 들어올 곳1} */}

                    <img
                      src="https://usercontents-c.styleshare.io/images/f61e4bc2-e35a-41f4-bcaf-622beae5cc34/720x720"
                      srcset="https://usercontents-c.styleshare.io/images/f61e4bc2-e35a-41f4-bcaf-622beae5cc34/200x200 200w, https://usercontents-c.styleshare.io/images/f61e4bc2-e35a-41f4-bcaf-622beae5cc34/320x320 320w, https://usercontents-c.styleshare.io/images/f61e4bc2-e35a-41f4-bcaf-622beae5cc34/480x480 480w, https://usercontents-c.styleshare.io/images/f61e4bc2-e35a-41f4-bcaf-622beae5cc34/750x750 750w, https://usercontents-c.styleshare.io/images/f61e4bc2-e35a-41f4-bcaf-622beae5cc34/975x975 975w, https://usercontents-c.styleshare.io/images/f61e4bc2-e35a-41f4-bcaf-622beae5cc34/1024x1024 1024w, https://usercontents-c.styleshare.io/images/f61e4bc2-e35a-41f4-bcaf-622beae5cc34/1280x1280 1280w, https://usercontents-c.styleshare.io/images/f61e4bc2-e35a-41f4-bcaf-622beae5cc34/1320x1320 1320w, https://usercontents-c.styleshare.io/images/f61e4bc2-e35a-41f4-bcaf-622beae5cc34/1336x1336 1336w, https://usercontents-c.styleshare.io/images/f61e4bc2-e35a-41f4-bcaf-622beae5cc34/1480x1480 1480w, https://usercontents-c.styleshare.io/images/f61e4bc2-e35a-41f4-bcaf-622beae5cc34/1600x1600 1600w"
                      alt="나이키 NSW 후드/ 후드 집업 5종 택일"
                      class="detail_main_img"
                    />
                  </div>
                  <div className="user_can_buy_parent">
                    <div className="user_can_buy">
                      {/* <Buying /> */}
                      <div className="user_can_see_price">
                        <div className="cheaper_price_name">
                          최대 쿠폰 적용 가격
                        </div>
                        <div
                          className="click_div_discount_info"
                          ref={node => {
                            this.node = node;
                          }}
                        >
                          <div
                            className="discount_price_parent"
                            onClick={this.discountHandleClick}
                          >
                            <span className="discount_per">44%</span>
                            <span className="price">59,800</span>
                            <span className="won">원</span>
                          </div>
                        </div>
                        <div className="before_discount_price_parent">
                          <span className="before_discount_price">
                            105,000원
                          </span>
                        </div>
                        <button
                          className="see_more_priceinfo"
                          onClick={this.discountHandleClick}
                        >
                          <div class="see_price_info_parent">
                            <img
                              src="https://image.flaticon.com/icons/svg/625/625946.svg"
                              alt=""
                              className={
                                this.state.discountInfo
                                  ? "rotate_price_info"
                                  : "see_price_info"
                              }
                            />
                          </div>
                        </button>
                        <button class="get_coupon">
                          쿠폰 다운
                          <img src={Dlcoupon} alt="" class="download_icon" />
                        </button>
                      </div>
                      {/* <div> */}
                      {/* {this.state.discountInfo && ( */}
                      <div
                        className={
                          this.state.discountInfo
                            ? "discount_appear_box"
                            : "discount_hide_box"
                        }
                        ref={div => (this.div = div)}
                      >
                        <div className="hide_and_appear_parent">
                          <div className="hide_first_line">
                            <span className="before_discount_price_text">
                              적용 전 가격
                            </span>
                            <span className="percentage_of_price">39%</span>
                            <span className="smaller_discount_price">
                              65,000원
                            </span>
                          </div>
                          <div className="hide_second_line">
                            <span className="applied_coupon">적용 된 쿠폰</span>
                            <div>
                              <span className="percentage_coupon">8%</span>
                              <span className="which_coupon">
                                해외브랜드 8%쿠폰
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* )} */}
                      {/* </div> */}
                      <div>
                        <div class="like_and_review">
                          <span className="like">좋아요</span>
                          <span className="how_many_like">6,509</span>
                          <span className="review">후기</span>
                          <span className="how_many_review">63</span>
                        </div>
                        {/* </div> */}
                        {/* 가격, 쿠폰, 좋아요, 후기 끝 */}
                        {/* 단추 시작 */}
                        <div className="point_box">
                          <span className="user_own_point">적립 단추</span>
                          <span className="how_many_point">650개</span>
                        </div>
                        <p className="delivery_free_or_not_parent">
                          <span className="delivery_free_or_not">무료배송</span>
                        </p>
                        {/* 모델명 및 사이즈 시작 */}
                        <div className="model_and_size">
                          <button className="model_name">
                            <span className="model_name_text">모델명</span>
                          </button>
                          <button className="model_size">
                            <span className="model_size_text">사이즈</span>
                          </button>
                        </div>
                        {/* 구매 장바구니 담기 */}
                        <div className="buy_button_parent">
                          <div className="immediately_buy_box">
                            <button className="immediately_buy_button">
                              바로 구매
                            </button>
                          </div>
                          <div className="get_cart_box">
                            <button className="get_cart_button">
                              장바구니 담기
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
export default Detail;
