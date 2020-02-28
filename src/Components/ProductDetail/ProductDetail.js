import React, { Component } from "react";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    return (
      <div classname="detail_mold">
        {/* 전체 틀 */}
        <div className="detail_inside_mold">
          <div className="btn_of_detail_product">
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

          <div>{/* 숨겨지고 나타날 제품 상세 이미지 */}</div>
        </div>
      </div>
    );
  }
}
export default ProductDetail;
