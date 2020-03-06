import React, { Component } from "react";
import "./PopularBrandCard.scss";

export class PopularBrandCard extends Component {
  render() {
    const { picture, brandName, goodsCount } = this.props;
    return (
      <div className="PopularBrandCard">
        <div className="brand_set">
          <a
            className="brand_link"
            href="https://www.styleshare.kr/brands/{this.props.link}"
          >
            <img className="brand_img" src={picture} alt="brand_img"></img>
          </a>
          <div className="under_grey"></div>
          <div className="info_container">
            <p className="info_box">
              <span className="brand_name">{brandName}</span>
              <span className="brand_goods_count">{goodsCount}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PopularBrandCard;
