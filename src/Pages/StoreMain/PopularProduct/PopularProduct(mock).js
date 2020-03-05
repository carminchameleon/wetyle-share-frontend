import React, { Component } from "react";
import "./PopularProduct.scss";
import StoreProductCard from "../../../Components/StoreProductCard/StoreProductCard";

class PopularProduct extends Component {
  constructor() {
    super();
    this.state = {
      allData: [],
      newData: [],
      categories: [
        "유니섹스",
        "여성",
        "뷰티",
        "가방잡화",
        "슈즈",
        "라이프",
        "테크",
        "헬스앤푸드"
      ],
      currentCategory: "all",
      categoryIndex: "8",
      currentTitle: "전체",
      linePosition: "344",
      lineWidth: "32"
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/storemainpopularproductall.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          allData: res.data
        });
      });

    fetch("http://localhost:3000/data/storemainpopularproductinfo.json")
      .then(res => res.json())
      .then(res =>
        this.setState({
          newData: res.data
        })
      );

    this.moveline(this.state.categoryIndex);
  };

  selectCategory = e => {
    this.setState({
      currentCategory: "category",
      categoryIndex: e.target.id,
      currentTitle: this.state.categories[e.target.id]
    });
    this.moveline(e.target.id);
    this.changeColor(e.target.id);
  };

  makeNewCate = newData => {
    return this.state.newData[this.state.categoryIndex].data.map(el => (
      <StoreProductCard
        data={el.goods}
        key={el.goods.id}
        discountRate={el.goods.discountRate}
        picture={el.goods.picture.id}
        isDiscounted={el.goods.isDiscounted}
        likeCount={el.goods.likeCount}
        brandName={el.goods.brand.name}
        productName={el.goods.name}
        price={el.goods.price}
        reviewsCount={el.goods.reviewsCount}
      />
    ));
  };

  makeAllCate = allData => {
    return allData.map(el => (
      <StoreProductCard
        data={el}
        webLink={el.id}
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
  /// 다시 전체 목록을 보여주는 함수 - 모드를 바꿔준다 //
  backDefault = () => {
    this.setState({
      currentCategory: "all",
      categoryIndex: "8",
      currentTitle: "전체"
    });
    this.moveline(8);
    this.changeColor(8);
  };

  ///클릭 했을 때, 제목 밑에 있는 라인 움직이게 하는 함수! ///
  moveline = num => {
    const position = document.getElementById(num).offsetLeft;
    const Width = document.getElementById(num).offsetWidth;
    this.setState({
      linePosition: position,
      lineWidth: Width
    });
  };
  //  클릭 했을 때, 클릭된 것만 색을 바꿔주는
  changeColor = num => {
    let lastone = [];
    for (let i = 0; i <= this.state.categories.length; i++) {
      lastone.push(i);
    }
    lastone.splice(num, 1);
    for (let i = 0; i <= lastone.length; i++) {
      document.getElementById(i).style.color = "rgb(158, 164, 170)";
    }
    document.getElementById(num).style.color = "rgb(38, 40, 43)";
  };

  render() {
    console.log("데이터를 보자", this.state.allData);

    const {
      categories,
      linePosition,
      lineWidth,
      allData,
      newData,
      currentTitle,
      currentCategory
    } = this.state;
    return (
      <div className="PopularProduct" ref={this.props.ref}>
        <div className="main_container">
          <div className="main_title_box">
            <h2 className="main_title">인기 상품</h2>
          </div>
          <ol className="main_list_container">
            <li className="title_list">
              <button
                className="title_list_button_default"
                onClick={this.backDefault}
                id={categories.length}
              >
                전체
              </button>
            </li>
            {categories.map((el, index) => {
              return (
                <li className="title_list">
                  <button
                    key={index}
                    className="title_list_button"
                    onClick={this.selectCategory}
                    id={index}
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
              {/* {this.makeAllCate(this.state.allData)} */}
              {currentCategory === "all"
                ? this.makeAllCate(allData)
                : this.makeNewCate(newData)}
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

export default PopularProduct;
