import React, { Component } from "react";
import StoreProductCard from "../../../Components/StoreProductCard/StoreProductCard";
import "./KeyWordRanking.scss";

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getDiscountRate = (discounted_price, price) => {
  return Math.round((1 - discounted_price / price) * 100);
};

export class KeyWordRanking extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      categories: [
        "후드",
        "레더",
        "자켓",
        "트렌치 코트",
        "에잇세컨즈",
        "바람막이"
      ],
      currentTitle: "후드",
      currentIndex: "0"
    };
  }

  componentDidMount = () => {
    fetch(
      `http://52.78.11.154:8000/product/search?query=${this.state.currentTitle}`
    )
      .then(res => res.json())
      .then(res => {
        let productBox = [];
        while (productBox.length < 5) {
          productBox.push(
            res.product_list[getRandom(0, res.product_list.length)]
          );
        }
        this.setState({
          data: productBox
        });
      });
  };

  selectCategory = e => {
    this.setState({
      currentIndex: e.target.id,
      currentTitle: this.state.categories[e.target.id]
    });

    fetch(
      `http://52.78.11.154:8000/product/search?query=${
        this.state.categories[e.target.id]
      }`
    )
      .then(res => res.json())
      .then(res => {
        let productNewBox = [];
        while (productNewBox.length < 5) {
          productNewBox.push(
            res.product_list[getRandom(0, res.product_list.length)]
          );
        }
        this.setState({
          data: productNewBox
        });
      });
  };

  render() {
    const { categories, currentIndex, data, currentTitle } = this.state;
    return (
      <div className="KeyWordRanking">
        <div className="main_container">
          <div className="main_title_box">
            <h2 className="main_title">실시간 인기 키워드</h2>
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
            <div></div>
          </ol>
          <div className="main_card_container">
            <div className="card_wrapper">
              {data.map((el, index) => {
                //데이터가 만들어지지 않았을 때를 대비
                if (!el) return null;
                return (
                  <StoreProductCard
                    data={el}
                    key={index}
                    discountRate={getDiscountRate(
                      el.discounted_price,
                      el.price
                    )}
                    picture={el.product_image_url}
                    isDiscounted={el.discounted_price === el.price}
                    likeCount={getRandom(100, 30000)}
                    brandName={el.brand_name}
                    productName={el.name}
                    price={el.discounted_price}
                    reviewsCount={getRandom(200, 20000)}
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

export default KeyWordRanking;
