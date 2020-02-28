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
                <div className="card_box_photo_container">
                  {/* 상품에 관한 정보가 들어가는 */}
                  <a className="card_box_photo_link" href="">
                    <div className="card_box_photo_set">
                      <img
                        className="card_box_photo_img"
                        src="https://usercontents-c.styleshare.io/images/a95336c6-82da-4f84-bdf0-85251bf7565c/312x312"
                      ></img>
                    </div>
                  </a>
                </div>
                <div className="card_box_contents"></div>
              </div>
            </div>
          </div>
          <div className="main_showmore"></div>
        </div>
      </div>
    );
  }
}

export default StorePopularProduct;
