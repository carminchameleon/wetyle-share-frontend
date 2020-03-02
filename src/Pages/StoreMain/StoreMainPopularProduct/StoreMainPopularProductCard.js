import React, { Component } from "react";
import "./StoreMainPopularProductCard.scss";

export class StoreMainPopularProductCard extends Component {
  render() {
    return (
      <div className="StoreMainPopularProductCard">
        <div className="card_box_set">
          <>
            <a
              className="card_box_photo_link"
              href={`https://www.styleshare.kr/goods/${this.props.picture}`}
              alt=""
            >
              <div className="card_box_photo_set">
                <picture className="card_box_photo_picture">
                  <img
                    className="card_box_photo_img"
                    src={`https://usercontents-c.styleshare.io/images/${this.props.picture}/312x312`}
                    alt=""
                  ></img>
                </picture>
              </div>
            </a>
          </>
          <div className="card_box_contents">
            <a
              className="product_brand_link"
              href="https://www.styleshare.kr/brands/4747"
            >
              <span className="product_brand">{this.props.brandName}</span>
            </a>
            <a className="product_name_link" href="/goods/302608">
              <span className="product_name">{this.props.productName}</span>
            </a>
            <div className="product_price_info">
              {this.props.isDiscounted === true ? (
                <span className="price_discount">26%</span>
              ) : (
                ""
              )}
              {/* <span className="price_discount">26%</span> */}
              <span className="price_money">14,800</span>
              <span className="price_won">원</span>
            </div>
            <div className="like_and_comment">
              <span className="like">좋아요 2,773</span>
              <span className="comment">후기 141</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreMainPopularProductCard;
