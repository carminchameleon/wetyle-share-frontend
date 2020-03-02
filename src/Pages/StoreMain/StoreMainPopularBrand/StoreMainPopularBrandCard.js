import React, { Component } from "react";
import "./StoreMainPopularBrandCard.scss";

export class StoreMainPopularBrandCard extends Component {
  render() {
    return (
      <div className="StoreMainPopularBrandCard">
        <div className="brand_set">
          <a
            className="brand_link"
            href="https://www.styleshare.kr/brands/{this.props.link}"
          >
            <img
              className="brand_img"
              src={`https://usercontents-c.styleshare.io/images/${this.props.picture}/750x420`}
              alt="brand_img"
            ></img>
          </a>
          <div className="brand_under_grey"></div>
          <div className="brand_info_container">
            <p className="brand_info_box">
              <span className="brand_name">{this.props.brandName}</span>
              <span className="brand_goods_count">{this.props.goodsCount}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreMainPopularBrandCard;
