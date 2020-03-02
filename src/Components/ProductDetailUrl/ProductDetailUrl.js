import React, { Component } from "react";
import "./ProductDetailUrl.scss";

class ProductDetailUrl extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    return (
      <>
        {/* *************상세보기 사진 나올 div********* */}
        <div>
          <img src={this.props.imgUrl} alt="" className="img_url_style" />
        </div>
        {/* ************상세보기 이미지 div 끝************** */}
      </>
    );
  }
}
export default ProductDetailUrl;
