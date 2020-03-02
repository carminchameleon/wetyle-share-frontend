import React, { Component } from "react";
import "./CouponForEveryone.scss";
import everyoneCoupon from "../../Img/everyoneCoupon.png";

class CouponForEveryone extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    return (
      // <div className="go_center">
      <div className="black_coupon_box">
        <button className="coupon_text">
          <img src={everyoneCoupon} alt="" className="coupon_img" />
          <div className="text_about_coupon">
            스타일쉐어 첫 구매 응원 쿠폰
            <span className="text_price">3000원</span> 받기
          </div>
        </button>
      </div>
      // </div>
    );
  }
}
export default CouponForEveryone;
