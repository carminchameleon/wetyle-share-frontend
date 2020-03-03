import React, { Component } from "react";
import StoreProductCard from "../../../Components/StoreProductCard/StoreProductCard";
import "./StoreMainKeyWordRanking.scss";

export class StoreMainKeyWordRanking extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      categories: ["셔츠", "어퓨", "스티커", "고데기", "졸업사진", "바람막이"],
      currentTitle: "셔츠",
      currentIndex: "0",
      linePosition: 440,
      lineWidth: 32
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/storemainkeywordranking.json")
      .then(res => res.json())
      .then(res => {
        console.log("데이터 확인", res.data[0].data);
        this.setState({
          data: res.data[this.state.currentIndex].data
        });
      });
  };

  selectCategory = e => {
    this.setState({
      currentIndex: e.target.id,
      currentTitle: this.state.categories[e.target.id]
    });

    fetch("http://localhost:3000/data/storemainkeywordranking.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.data[this.state.currentIndex].data
        });
      });
    let test = document.getElementById(e.target.id);
    let testanother = window.getComputedStyle(test).getPropertyValue("width");
    console.log("왜이래", testanother);
    document.getElementById(e.target.id).style.getPropertyValue("width");
    console.log();
    console.log("target is ", e.target);
    this.moveline(e.target.id);
  };

  moveline = num => {
    const position = document.getElementById(num).offsetLeft;
    const width = document.getElementById(num).offsetWidth;
    this.setState({
      linePosition: position,
      lineWidth: width
    });
  };

  makeCategory = () => {
    return this.state.data.map(el => (
      <StoreProductCard
        data={el}
        key={el.id}
        discountRate={el.discountRate}
        picture={el.picture.id}
        isDiscounted={el.isDiscounted}
        likeCount={el.likeCount}
        brandName={el.brand.name}
        productName={el.name}
        price={el.price}
        reviewsCount={el.reviewsCount}
      />
    ));
  };

  render() {
    return (
      <div className="StoreMainKeyWordRanking">
        <div className="main_container">
          <div className="main_title_box">
            <h2 className="main_title">실시간 인기 키워드</h2>
          </div>
          <ol className="main_list_container">
            {this.state.categories.map((el, index) => {
              return (
                <li className="title_list">
                  <button
                    key={index}
                    className={
                      index == this.state.currentIndex
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
              {this.makeCategory(this.state.data)}
            </div>
          </div>
          <div className="main_show_more_container">
            <div className="show_more_box">
              <a className="show_more" href="/categories/best?sort=score-desc">
                {this.state.currentTitle} 더보기
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

export default StoreMainKeyWordRanking;
