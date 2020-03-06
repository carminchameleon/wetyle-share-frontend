import React, { Component } from "react";
import StoreProductCard from "Components/StoreProductCard/StoreProductCard";
import { withRouter } from "react-router-dom";
import { STORE_URL } from "config";
import "./PopularProduct.scss";

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getDiscountRate = (discounted_price, price) => {
  return Math.round((1 - discounted_price / price) * 100);
};

export class PopularProduct extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      categories: [
        "전체",
        "유니섹스",
        "여성",
        "뷰티",
        "가방잡화",
        "슈즈",
        "라이프",
        "테크",
        "헬스앤푸드"
      ],
      currentIndex: 0,
      currentTitle: "전체",
      linePosition: "344",
      lineWidth: "32"
    };
  }

  goToDetail = num => {
    this.props.history.push(`/detail/${num}`);
  };

  componentDidMount = () => {
    fetch(`${STORE_URL}/product/popular/1`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.result.slice(0, 4)
        });
      });
    this.moveLine(this.state.currentIndex);
  };

  selectCategory = e => {
    this.setState({
      currentIndex: e.target.id,
      currentTitle: this.state.categories[e.target.id]
    });
    fetch(`${STORE_URL}/product/popular`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.result.slice(
            this.state.currentIndex * 4,
            this.state.currentIndex * 4 + 4
          )
        });
      });
    this.moveLine(e.target.id);
  };

  moveLine = num => {
    const position = document.getElementById(num).offsetLeft;
    const width = document.getElementById(num).offsetWidth;
    this.setState({
      linePosition: position,
      lineWidth: width
    });
  };

  render() {
    const {
      categories,
      currentIndex,
      currentTitle,
      lineWidth,
      linePosition
    } = this.state;
    return (
      <div className="PopularProduct">
        <div className="main_container">
          <div className="main_title_box">
            <h2 className="main_title">인기 상품</h2>
          </div>
          <ol className="main_list_container">
            {categories.map((el, index) => {
              return (
                <li className="title_list">
                  <button
                    key={index}
                    className={
                      index == currentIndex
                        ? "title_list_button_default"
                        : "title_list_button"
                    }
                    onClick={this.selectCategory}
                    id={index}
                    name={el}
                  >
                    {el}
                  </button>
                </li>
              );
            })}
            <div
              className="title_move_line"
              style={{
                transform: `translate(${linePosition + 10}px, 0px)`,
                width: `${lineWidth - 21}px`
              }}
            ></div>
          </ol>
          <div className="main_card_container">
            <div className="card_wrapper">
              {this.state.data.map(el => {
                if (!el) return null;
                return (
                  <StoreProductCard
                    onClick={() => this.goToDetail(el.product_id)}
                    data={el}
                    key={el.id}
                    discountRate={getDiscountRate(
                      el.discounted_price,
                      el.price
                    )}
                    picture={el.image_url}
                    isDiscounted={el.price === el.disCounted_price}
                    likeCount={getRandom(100, 30000)}
                    brandName={el.brand}
                    productName={el.name}
                    price={el.discounted_price}
                    reviewsCount={getRandom(200, 20000)}
                    productId={el.product_id}
                  />
                );
              })}
            </div>
          </div>
          <div className="main_show_more_container">
            <div className="show_more_box">
              <a className="show_more" href="/categories/best?sort=score-desc">
                {currentTitle} 더보기
                <img
                  className="show_more_icon"
                  src="https://image.flaticon.com/icons/svg/126/126490.svg"
                  alt=""
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PopularProduct);
