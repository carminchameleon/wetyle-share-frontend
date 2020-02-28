import React, { Component } from "react";
import "Pages/StoreDetail/Detail.scss";
import Dlcoupon from "Img/Dlcoupon.png";
import FourPicDiv from "../../Components/FourPicDiv/FourPicDiv.js";
import CouponForEveryone from "../../Components/CouponForEveryone/CouponForEveryone.js";
import ProductDetail from "../../Components/ProductDetail/ProductDetail.js";
const discount = document.getElementsByClassName("discount_hide_box");

// document.title = "스타일쉐어";

class Detail extends Component {
  constructor(props) {
    super(props);

    // this.discountHandleClick = this.discountHandleClick.bind(this);
    // this.discountOutsideClick = this.discountOutsideClick.bind(this);
    this.modelOptionList = this.modelOptionList.bind(this);
    this.state = {
      discountInfo: false,
      modelName: false,
      modelOption: "모델명",
      modelSize: false,
      modelSizeOption: "사이즈",
      size: "",
      userCartArr: []
    };
  }
  componentDidMount() {
    this.div.addEventListener("click", this.discountHandleClick);
    this.ul.addEventListener("click", this.modelOptionList);
    this.size.addEventListener("click", this.modelSizeList);
  }

  discountHandleClick = () => {
    // console.log("hi");
    this.setState({ discountInfo: !this.state.discountInfo }, () =>
      console.log(this.state)
    );
  };

  modelOptionList = () => {
    this.setState(state => ({ modelName: !state.modelName }));
  };

  handleSelectOption = e => {
    // console.log(e.target.innerText);
    this.setState(
      {
        modelOption: e.target.innerText
      },
      () => console.log(this.state.modelOption)
    );
  };

  modelSizeList = () => {
    this.setState({ modelSize: !this.state.modelSize });
  };

  handleSizeOption = size => {
    this.setState({ size: size }, () => this.makeCartList());
  };

  makeCartList = () => {
    console.log(this.state.size);
    console.log("hi");
    if (this.state.modelOption !== "모델명" && this.state.size !== "사이즈") {
      // e.preventDefault();
      this.state.userCartArr.push({
        modelOption: this.state.modelOption,
        size: this.state.size
      });

      this.setState({ userCartArr: this.state.userCartArr });

      //this.state.id = 1;
    }

    // console.log(this.state.userCartArr);
    this.setState({
      modelOption: "모델명",
      modelSizeOption: "사이즈"
    });
  };

  render() {
    // const detaillName = {};
    const userCartList = this.state.userCartArr.map((x, index) => (
      <li key={index} className="one_info_from_order">
        <div className="selected_item_info">
          {x.modelOption} / {x.size}
        </div>
        <div className="order_count_and_btn">
          <button className="order_minus_btn">-</button>
          <span className="order_count">1</span>
          <button className="order_plus_btn">+</button>
          <span className="order_product_price">62,000원</span>
          <button className="order_delete_btn">x</button>
        </div>
      </li>
    ));

    // const modelOption = {};
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
                          <div
                            className="scroll_area"
                            ref={node => {
                              this.node = node;
                            }}
                          >
                            <button
                              className={
                                this.state.modelOption === "모델명"
                                  ? "model_name"
                                  : "disable_model_btn"
                              }
                              onClick={this.modelOptionList}
                              ref={node => {
                                this.node = node;
                              }}
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
                              {/* <span className="model_name_text">모델명</span> */}
                            </button>

                            <ul
                              ref={ul => (this.ul = ul)}
                              className={
                                this.state.modelName
                                  ? "model_list_appear"
                                  : "model_list_hide"
                              }
                            >
                              <li
                                className="one_of_list"
                                onChange={this.selectOption}
                                onClick={this.handleSelectOption}
                                value="s"
                              >
                                회색
                              </li>
                              <li
                                className="one_of_list"
                                onChange={this.selectOption}
                                onClick={this.handleSelectOption}
                                value="m"
                              >
                                검정
                              </li>
                              <li
                                className="one_of_list"
                                onChange={this.selectOption}
                                onClick={this.handleSelectOption}
                                value="l"
                              >
                                빨강
                              </li>
                              <li
                                className="one_of_list"
                                onChange={this.selectOption}
                                onClick={this.handleSelectOption}
                                value="s1"
                              >
                                파랑
                              </li>
                              <li
                                className="one_of_list"
                                onChange={this.selectOption}
                                onClick={this.handleSelectOption}
                                value="m1"
                              >
                                보라
                              </li>
                              <li
                                className="one_of_list"
                                onChange={this.selectOption}
                                onClick={this.handleSelectOption}
                                value="l1"
                              >
                                주황
                              </li>
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
                              ref={size => (this.size = size)}
                              className={
                                this.state.modelSize
                                  ? "model_list_appear"
                                  : "model_list_hide"
                              }
                            >
                              <li
                                className="one_of_list"
                                onClick={() => this.handleSizeOption("s")}
                                value="s"
                              >
                                s
                              </li>
                              <li
                                className="one_of_list"
                                onClick={() => this.handleSizeOption("m")}
                                value="m"
                              >
                                m
                              </li>
                              <li
                                className="one_of_list"
                                onClick={() => this.handleSizeOption("l")}
                                value="l"
                              >
                                l
                              </li>
                              <li
                                className="one_of_list"
                                onChange={this.selectOption}
                                onClick={() => this.handleSizeOption("s1")}
                                value="s1"
                              >
                                s1
                              </li>
                              <li
                                className="one_of_list"
                                onClick={() => this.handleSizeOption("m1")}
                                value="m1"
                              >
                                m1
                              </li>
                              <li
                                className="one_of_list"
                                onClick={() => this.handleSizeOption("l1")}
                                value="l1"
                              >
                                l1
                              </li>
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
                <div className="a_parent">
                  {/* <a
                    href="https://www.nike.com/kr/ko_kr/w/men/ap"
                    className="brand_photo_link_size"
                  > */}
                  <div className="brand_box_parent">
                    {/* <a
                      href="https://www.nike.com/kr/ko_kr/w/men/ap"
                      className="brand_photo_link_size"
                    > */}
                    <div className="brand_img_box">
                      <img
                        class="brand_photo"
                        data-sizes="auto"
                        data-src="https://usercontents-c.styleshare.io/images/21126903/214x120"
                        data-srcset="https://usercontents-c.styleshare.io/images/21126903/200x112 200w, https://usercontents-c.styleshare.io/images/21126903/320x179 320w, https://usercontents-c.styleshare.io/images/21126903/480x269 480w, https://usercontents-c.styleshare.io/images/21126903/750x420 750w, https://usercontents-c.styleshare.io/images/21126903/975x546 975w, https://usercontents-c.styleshare.io/images/21126903/1024x573 1024w, https://usercontents-c.styleshare.io/images/21126903/1280x717 1280w, https://usercontents-c.styleshare.io/images/21126903/1320x739 1320w, https://usercontents-c.styleshare.io/images/21126903/1336x748 1336w, https://usercontents-c.styleshare.io/images/21126903/1480x829 1480w, https://usercontents-c.styleshare.io/images/21126903/1600x896 1600w"
                        alt="나이키"
                        sizes="214px"
                        srcset="https://usercontents-c.styleshare.io/images/21126903/200x112 200w, https://usercontents-c.styleshare.io/images/21126903/320x179 320w, https://usercontents-c.styleshare.io/images/21126903/480x269 480w, https://usercontents-c.styleshare.io/images/21126903/750x420 750w, https://usercontents-c.styleshare.io/images/21126903/975x546 975w, https://usercontents-c.styleshare.io/images/21126903/1024x573 1024w, https://usercontents-c.styleshare.io/images/21126903/1280x717 1280w, https://usercontents-c.styleshare.io/images/21126903/1320x739 1320w, https://usercontents-c.styleshare.io/images/21126903/1336x748 1336w, https://usercontents-c.styleshare.io/images/21126903/1480x829 1480w, https://usercontents-c.styleshare.io/images/21126903/1600x896 1600w"
                        src="https://usercontents-c.styleshare.io/images/21126903/214x120"
                      />
                    </div>
                    <div className="count_and_arrow_btn">
                      <span className="how_many_product">4720</span>
                      <img
                        src="https://image.flaticon.com/icons/svg/748/748073.svg"
                        alt=""
                        className="arrow_right_size"
                      />
                    </div>
                    {/* </a> */}
                  </div>
                  {/* </a> */}
                </div>
                <FourPicDiv />
                <CouponForEveryone />
                <ProductDetail />
              </div>
            </div>
          </div>
          {/* <FourPicDiv /> */}
        </div>
      </body>
    );
  }
}
export default Detail;
