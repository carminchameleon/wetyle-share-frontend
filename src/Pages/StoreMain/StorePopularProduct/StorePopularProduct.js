import React, { Component } from "react";
import "./StorePopularProduct.scss";

class StorePopularProduct extends Component {
  render() {
    return (
      <div className="StorePopularProduct">
        <div className="main_container">
          <div className="main_title_box">
            <h2 className="main_title">인기 상품</h2>
          </div>
          <ol className="main_list_container">
            <li className="title_list">
              <button className="title_list_button">전체</button>
            </li>
            <li className="title_list">
              <button className="title_list_button">유니섹스</button>
            </li>
            <li className="title_list">
              <button className="title_list_button">여성</button>
            </li>
            <li className="title_list">
              <button className="title_list_button">뷰티</button>
            </li>
            <li className="title_list">
              <button className="title_list_button">가방잡화</button>
            </li>
            <li className="title_list">
              <button className="title_list_button">슈즈</button>
            </li>
            <li className="title_list">
              <button className="title_list_button">라이프</button>
            </li>
            <li className="title_list">
              <button className="title_list_button">테크</button>
            </li>
            <li className="title_list">
              <button className="title_list_button">헬스앤푸드</button>
            </li>
            <div className="title_move_line"></div>
          </ol>
          <div className="main_card_container">
            <div className="card_wrapper">
              {/* 박스 하나 */}
              <div className="card_box_set">
                <>
                  <a
                    className="card_box_photo_link"
                    href="https://www.styleshare.kr/goods/302608"
                    alt=""
                  >
                    <div className="card_box_photo_set">
                      <piture className="card_box_photo_picture">
                        <img
                          className="card_box_photo_img"
                          src="https://usercontents-c.styleshare.io/images/a95336c6-82da-4f84-bdf0-85251bf7565c/312x312"
                          alt=""
                        ></img>
                      </piture>
                    </div>
                  </a>
                </>
                <div className="card_box_contents">
                  <a
                    className="product_brand_link"
                    href="https://www.styleshare.kr/brands/4747"
                  >
                    <span className="product_brand">갑질</span>
                  </a>
                  <a className="product_title_link" href="/goods/302608">
                    <span className="product_title">
                      [무배/국내생산] SAC017 갑질스타킹5종 (10매묶음) 13만장판매
                    </span>
                  </a>
                  <div className="product_price_info">
                    <span className="price_discount">26%</span>
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
          </div>
          <div className="main_show_more_container">
            <div className="show_more_box">
              <a className="show_more" href="/categories/best?sort=score-desc">
                전체 더보기
                <img
                  className="show_more_icon"
                  src="https://image.flaticon.com/icons/svg/126/126490.svg"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StorePopularProduct;
