import React, { Component } from "react";
import "./StoreProductCard.scss";

class StoreProductCard extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className="StoreProductCard">
        <div className="card_box_set" onClick={this.props.onClick}>
          <div className="card_box_photo_link">
            <div className="card_box_photo_set">
              <picture className="card_box_photo_picture">
                <img
                  className="card_box_photo_img"
                  src={this.props.picture}
                  alt=""
                ></img>
              </picture>
            </div>
          </div>
          <div className="card_box_contents">
            <div className="product_brand_link">
              <span className="product_brand">{this.props.brandName}</span>
            </div>
            <div className="product_name_link">
              <span className="product_name">{this.props.productName}</span>
            </div>
            <div className="product_price_info">
              {this.props.discountRate && (
                <span className="price_discount">
                  {this.props.discountRate}%
                </span>
              )}

              <span className="price_money">
                {this.props.price.toLocaleString()}
              </span>
              <span className="price_won">원</span>
            </div>
            <div className="like_and_comment">
              <span className="like">
                좋아요 {this.props.likeCount.toLocaleString()}
              </span>
              <span className="comment">
                후기 {this.props.reviewsCount.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreProductCard;
