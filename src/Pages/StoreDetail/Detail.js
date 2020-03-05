import React, { Component } from "react";
import "Pages/StoreDetail/Detail.scss";
import Dlcoupon from "Img/Dlcoupon.png";
import FourPicDiv from "../../Components/FourPicDiv/FourPicDiv.js";
import CouponForEveryone from "../../Components/CouponForEveryone/CouponForEveryone.js";
import ProductDetailUrl from "../../Components/ProductDetailUrl/ProductDetailUrl.js";
import StoreFooter from "../../Components/StoreFooter/StoreFooter.js";
import ChangeAsk from "../../Components/ChangeAsk/ChangeAsk.js";
import BrandBox from "../../Components/BrandBox/BrandBox.js";
// import StoreTop from "../../Components/Top/StoreTop.js";
const discount = document.getElementsByClassName("discount_hide_box");

// document.title = "스타일쉐어";

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      discountInfo: false,
      modelName: false,
      modelSize: false,
      askQuestion: false,
      // changeRefund: false,
      detailImg: false,
      detailMoreImg: false,

      modelSizeOption: "사이즈",
      modelOption: "모델명",
      size: "",

      userCartArr: [],
      price: 62000,
      id: 0,

      product: [],
      reviewData: []
    };
  }

  componentDidMount = () => {
    // 처음 render될 때 무엇인가 보여주고 싶을 때 쓰는 것이 componentDidMount
    fetch("http://localhost:3000/data/data.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          dd: res,
          price: res.price,
          product: res.product,
          reviewData: res.review_data
        });
      });
  };

  minusProductCount = i => {
    const tempObj = { ...this.state.userCartArr[i] };
    tempObj.count = this.state.userCartArr[i].count - 1;
    tempObj.price = this.state.userCartArr[i].price - this.state.price;

    const tempArr = [...this.state.userCartArr];
    tempArr[i] = tempObj;

    this.setState({
      userCartArr: tempArr
    });
  };

  handleDetailMoreImg = () => {
    this.setState({ detailMoreImg: !this.state.detailMoreImg });
  };

  handleDetailImg = () => {
    this.setState({ detailImg: !this.state.detailImg });
  };

  discountHandleClick = () => {
    this.setState({ discountInfo: !this.state.discountInfo }, () =>
      console.log(this.state)
    );
  };

  modelOptionList = () => {
    this.setState(state => ({ modelName: !state.modelName }));
  };

  handleSelectOption = e => {
    this.setState({
      modelOption: e.target.innerText
    });
    console.log(e.target.innerText);
  };

  modelSizeList = () => {
    this.setState({ modelSize: !this.state.modelSize });
  };

  handleSizeOption = e => {
    this.setState({ size: e.target.innerText }, () => this.makeCartList());
  };

  makeCartList = () => {
    if (this.state.modelOption !== "모델명" && this.state.size !== "사이즈") {
      this.setState({ id: this.state.id + 1 }, () =>
        console.log(this.state.id)
      );
      this.state.userCartArr.unshift({
        modelOption: this.state.modelOption,
        size: this.state.size,
        count: 1,
        id: this.state.id,
        price: this.state.price,
        userProductCount: [this.state.id, 1]
      });

      this.setState({
        userCartArr: this.state.userCartArr,
        modelOption: "모델명",
        modelSizeOption: "사이즈"
      });
    }
  };

  addProductCount = i => {
    // console.log(this.state.userCartArr);

    const tempObj = { ...this.state.userCartArr[i] };
    tempObj.count = this.state.userCartArr[i].count + 1;
    tempObj.price = this.state.userCartArr[i].price + this.state.price;

    const tempArr = [...this.state.userCartArr];
    tempArr[i] = tempObj;

    this.setState(
      {
        userCartArr: tempArr
      },
      () => {
        console.log(this.state.userCartArr);
      }
    );

    // this.setState({
    //   userCartArr: this.state.userCartArr
    // });

    // fetch("http://localhost:3000/data/data.json", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     userProductCount: "userProductCount" + 1
    //   })
    // });
    // .then(res => {
    //   return res.json();
    // })
    // .then(res =>
    //   this.setState({
    //     userProductCount: res.userProductCount
    //   })
    // );
  };

  render() {
    const userCartList = this.state.userCartArr.map((x, index) => (
      <li key={index} className="one_info_from_order">
        <div className="selected_item_info">
          {x.modelOption} / {x.size}
        </div>
        <div className="order_count_and_btn">
          <button
            // className="order_minus_btn

            disabled={x.count < 2}
            className={x.count < 2 ? "disabled_minus_btn" : "order_minus_btn"}
            onClick={() => this.minusProductCount(index)}
          >
            <img
              src="https://image.flaticon.com/icons/svg/565/565332.svg"
              alt=""
              width="7px"
              height="7px"
            />
          </button>
          <span className="order_count">{x.count}</span>
          <button
            className="order_plus_btn"
            onClick={
              () => this.addProductCount(index)
              // () => this.addProductPrice(index))
            }
          >
            <img
              src="https://image.flaticon.com/icons/svg/808/808559.svg"
              alt=""
              width="8x"
              height="8px"
            />
          </button>
          <span className="order_product_price">{x.price}</span>
          <button className="order_delete_btn">
            <img
              src="https://image.flaticon.com/icons/svg/565/565313.svg"
              alt=""
              width="8px"
              height="8px"
              className="delete_btn"
            />
          </button>
        </div>
      </li>
    ));
    // console.log(this.state.dd);
    // console.log(this.state.userCartArr[0].count);
    if (this.state.product.product_color === undefined) return null;
    return (
      <body>
        <div>
          <header>
            <div>
              <div className="li_parent">{/* <StoreTop /> */}</div>
            </div>
          </header>
          <div className="whole_page">
            <div className="biggest_box_parent">
              <div className="biggest_box">
                <div className="detail_name_parent">
                  <p height="3.99rem" className="detail_name">
                    {this.state.product.name}
                  </p>
                </div>
                <div className="box_for_detail_main">
                  {/* 제품 사진이랑 가격, 구매 칸 등등 */}
                  <div className="div_for_img">
                    {/* {img 들어올 곳1} */}

                    <img
                      src={this.state.product.image_url}
                      srcset="https://usercontents-c.styleshare.io/images/f61e4bc2-e35a-41f4-bcaf-622beae5cc34/200x200 200w, https://usercontents-c.styleshare.io/images/f61e4bc2-e35a-41f4-bcaf-622beae5cc34/320x320 320w, https://usercontents-c.styleshare.io/images/f61e4bc2-e35a-41f4-bcaf-622beae5cc34/480x480 480w, https://usercontents-c.styleshare.io/images/f61e4bc2-e35a-41f4-bcaf-622beae5cc34/750x750 750w, https://usercontents-c.styleshare.io/images/f61e4bc2-e35a-41f4-bcaf-622beae5cc34/975x975 975w, https://usercontents-c.styleshare.io/images/f61e4bc2-e35a-41f4-bcaf-622beae5cc34/1024x1024 1024w, https://usercontents-c.styleshare.io/images/f61e4bc2-e35a-41f4-bcaf-622beae5cc34/1280x1280 1280w, https://usercontents-c.styleshare.io/images/f61e4bc2-e35a-41f4-bcaf-622beae5cc34/1320x1320 1320w, https://usercontents-c.styleshare.io/images/f61e4bc2-e35a-41f4-bcaf-622beae5cc34/1336x1336 1336w, https://usercontents-c.styleshare.io/images/f61e4bc2-e35a-41f4-bcaf-622beae5cc34/1480x1480 1480w, https://usercontents-c.styleshare.io/images/f61e4bc2-e35a-41f4-bcaf-622beae5cc34/1600x1600 1600w"
                      alt="나이키 NSW 후드/ 후드 집업 5종 택일"
                      className="detail_main_img"
                    />
                  </div>
                  <div className="user_can_buy_parent">
                    <div className="user_can_buy">
                      {/* <Buying /> */}
                      <div className="user_can_see_price">
                        <div className="cheaper_price_name">
                          최대 쿠폰 적용 가격
                        </div>
                        <div className="click_div_discount_info">
                          <div
                            className="discount_price_parent"
                            onClick={this.discountHandleClick}
                          >
                            <span className="discount_per">44% </span>
                            <span className="price">
                              {this.state.product.discounted_price}
                            </span>
                            <span className="won">원</span>
                          </div>
                        </div>
                        <div className="before_discount_price_parent">
                          <span className="before_discount_price">
                            {this.state.product.price}원
                          </span>
                        </div>
                        <button
                          className="see_more_priceinfo"
                          onClick={this.discountHandleClick}
                        >
                          <div className="see_price_info_parent">
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

                      <div
                        className={
                          this.state.discountInfo
                            ? "discount_appear_box"
                            : "discount_hide_box"
                        }
                        onClick={this.discountHandleClick}
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
                          <span className="how_many_point">
                            {this.state.product.point}개
                          </span>
                        </div>
                        <p className="delivery_free_or_not_parent">
                          <span className="delivery_free_or_not">무료배송</span>
                        </p>
                        {/* 모델명 및 사이즈 시작 */}
                        <div className="model_and_size">
                          <div className="scroll_area">
                            <button
                              className={
                                this.state.modelOption === "모델명"
                                  ? "model_name"
                                  : "disable_model_btn"
                              }
                              onClick={this.modelOptionList}
                            >
                              <span
                                className={
                                  this.state.medelOption === "모델명"
                                    ? "not_bold_model_name"
                                    : "bold_model_name"
                                }
                              >
                                {this.state.modelOption}
                              </span>
                            </button>

                            <ul
                              onClick={this.modelOptionList}
                              className={
                                this.state.modelName
                                  ? "model_list_appear"
                                  : "model_list_hide"
                              }
                            >
                              {this.state.product.product_color.map(
                                (x, index) => (
                                  <li
                                    key={index}
                                    className="one_of_list"
                                    onChange={this.selectOption}
                                    onClick={this.handleSelectOption}
                                  >
                                    {x}
                                  </li>
                                )
                              )}
                            </ul>

                            <button
                              className={
                                this.state.modelOption !== "모델명"
                                  ? "disable_model_size"
                                  : "model_size"
                              }
                              disabled={this.state.modelOption === "모델명"}
                              onClick={this.modelSizeList}
                            >
                              <span>{this.state.modelSizeOption}</span>
                            </button>
                            <ul
                              onClick={this.modelSizeList}
                              className={
                                this.state.modelSize
                                  ? "model_list_appear"
                                  : "model_list_hide"
                              }
                            >
                              {this.state.product.product_size.map(
                                (x, index) => (
                                  <li
                                    key={index}
                                    className="one_of_list"
                                    onClick={this.handleSizeOption}
                                  >
                                    {x}
                                  </li>
                                )
                              )}
                            </ul>

                            {/* 내가 선택한 색과 사이즈가 나올 장소 */}
                            <ol className="order_list">{userCartList}</ol>
                          </div>
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
                <BrandBox />
              </div>
              <FourPicDiv title="상품 후기 68" />
              <CouponForEveryone />
              {/* ************제품상세 칸********* */}
              <div classname="detail_mold">
                {/* 전체 틀 */}
                <div className="detail_inside_mold">
                  {/* *******제품 상세 버튼******* */}
                  <div
                    className="btn_of_detail_product"
                    onClick={this.handleDetailImg}
                  >
                    <div className="text_of_detail_btn">제품 상세</div>
                    <img
                      src="https://image.flaticon.com/icons/svg/625/625946.svg"
                      alt=""
                      className="see_more_detail_arrow"
                      // className={
                      //     this.state.discountInfo
                      //         ? "rotate_price_info"
                      //         : "see_price_info"
                    />
                  </div>
                  {/* ***********제품 상세 버튼 끝********* */}

                  <div
                    //   className="detail_column"
                    className={
                      this.state.detailImg
                        ? "fold_detail_column"
                        : "detail_column"
                    }
                    // 위에꺼 작동 안함
                    className={
                      this.state.detailMoreImg
                        ? ""
                        : "not_see_more_detail_column"
                    }
                  >
                    {/* 숨겨지고 나타날 제품 상세 이미지 */}
                    <div className="this_is_real_text">
                      <div className="for_styleshare_not_brand">
                        <div className="bold_line">
                          스타일쉐어의 모든 상품은 100% 정품입니다.
                        </div>
                        <div className="normal_line">
                          상담문의 : 카카오톡 플러스친구 '스타일쉐어'
                        </div>
                        <a
                          href="https://blog.naver.com/styleshare/221637731180"
                          className="go_blog_link"
                        >
                          자세히 보기
                        </a>
                      </div>
                      <div className="notice_about_product">
                        <p className="notice_text">
                          [공지사항]
                          <br />
                          <br /> 본 상품은 2월 27일~ 3월 1일까지 진행되는
                          스타일쉐어 3.1절 프로모션 쿠폰 미적용 상품입니다.
                          <br /> 구매에 참고 부탁드립니다. <br />
                          <br />
                          감사합니다. <br />
                          <br />
                          [공지사항] <br />
                          <br />본 상품은 스타일쉐어 "신학기 스타일쇼" 쿠폰
                          미적용 상품입니다.
                        </p>
                        <div className="see_more_notice">더보기</div>
                      </div>
                    </div>
                    <div
                    // className={
                    //   this.state.detailMoreImg
                    //     ? "detail_column"
                    //     : "see_more_detail_column"
                    // }
                    >
                      {this.state.product.imgUrl.map(imgUrl => {
                        return <ProductDetailUrl imgUrl={imgUrl} />;
                      })}
                    </div>
                  </div>
                  <div className="see_more_detail_parent">
                    <button
                      className="see_more_detail_btn"
                      onClick={this.handleDetailMoreImg}
                    >
                      이미지 더보기
                      <img
                        src="https://image.flaticon.com/icons/svg/625/625946.svg"
                        alt=""
                        // className="see_more_detail_arrow"
                        className={
                          this.state.detailMoreImg
                            ? "see_more_detail_arrow_up"
                            : "see_more_detail_arrow_down"
                        }
                      />
                    </button>
                  </div>
                  {/* ************************상품문의*************** */}
                  {/* ************************상품 문의 끝******************** */}
                  {/* **********************배송 교환 환불************************* */}
                  <ChangeAsk />
                  {/* *********************배송 교환 환불 끝 ********************                    */}
                </div>
              </div>
              <FourPicDiv title="카테고리 인기 상품" />
              <FourPicDiv title="브랜드 인기 상품" />
            </div>
          </div>
          <footer>
            <div>
              <StoreFooter />
            </div>
          </footer>
        </div>
      </body>
    );
  }
}
export default Detail;
