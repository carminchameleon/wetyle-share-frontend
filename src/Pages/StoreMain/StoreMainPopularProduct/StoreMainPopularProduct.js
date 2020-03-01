import React, { Component } from "react";
import "./StoreMainPopularProduct.scss";
import StoreMainPopularProductCard from "./StoreMainPopularProductCard";

class StoreMainPopularProduct extends Component {
  constructor() {
    super();
    this.state = {
      allData: [],
      newData: [],
      currentCategory: "all",
      categoryIndex: ""
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
  };

  selectCategory = e => {
    this.setState({
      currentCategory: "category",
      categoryIndex: e.target.id
    });

    // console.log(e.target.id);
    // console.log(this.state.newData[e.target.id].data);

    // const productList = this.state.newData[e.target.id].data;
    // productList.map(el => (
    //   <StoreMainPopularProductCard
    //     data={el.goods}
    //     key={el.goods.id}
    //     discountRate={el.goods.discountRate}
    //     picture={el.goods.picture.id}
    //     isDiscounted={el.goods.isDiscounted}
    //     likeCount={el.goods.likeCount}
    //     brandName={el.goods.brand.name}
    //     productName={el.goods.name}
    //     price={el.goods.price}
    //     reviewsCount={el.goods.reviewsCount}
    //   />
    // ));
  };

  makeNewCate = newData => {
    return this.state.newData[this.state.categoryIndex].data.map(el => (
      <StoreMainPopularProductCard
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

  // selectCategory = e => {
  //   const currentcate = e.target.id;
  //   fetch("http://localhost:3000/data/storemainpopularproductinfo.json")
  //     .then(res => res.json())
  //     .then(res => res.data[currentcate].data)
  //     .then(res => {
  //       console.log(res.map(el => console.log(el.goods.id)));
  //       this.setState({ newData: res });
  //     });
  // };
  makeAllCate = allData => {
    return allData.map(el => (
      <StoreMainPopularProductCard
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

  returnAllcate = () => {
    this.setState({
      currentCategory: "all"
    });
  };

  render() {
    return (
      <div className="StoreMainPopularProduct" ref={this.props.ref}>
        <div className="main_container">
          <div className="main_title_box">
            <h2 className="main_title">인기 상품</h2>
          </div>
          <ol className="main_list_container">
            <li className="title_list">
              <button
                className="title_list_button"
                onClick={this.returnAllcate}
                id="전체"
              >
                전체
              </button>
            </li>
            <li className="title_list">
              <button
                className="title_list_button"
                onClick={this.selectCategory}
                id="0"
              >
                유니섹스
              </button>
            </li>
            <li className="title_list">
              <button
                className="title_list_button"
                onClick={this.selectCategory}
                id="1"
              >
                여성
              </button>
            </li>
            <li className="title_list">
              <button
                className="title_list_button"
                onClick={this.selectCategory}
                id="2"
              >
                뷰티
              </button>
            </li>
            <li className="title_list">
              <button
                className="title_list_button"
                onClick={this.selectCategory}
                id="3"
              >
                가방잡화
              </button>
            </li>
            <li className="title_list">
              <button
                className="title_list_button"
                onClick={this.selectCategory}
                id="4"
              >
                슈즈
              </button>
            </li>
            <li className="title_list">
              <button
                className="title_list_button"
                onClick={this.selectCategory}
                id="5"
              >
                라이프
              </button>
            </li>
            <li className="title_list">
              <button
                className="title_list_button"
                onClick={this.selectCategory}
                id="6"
              >
                테크
              </button>
            </li>
            <li className="title_list">
              <button
                className="title_list_button"
                onClick={this.selectCategory}
                id="7"
              >
                헬스앤푸드
              </button>
            </li>
            <div className="title_move_line"></div>
          </ol>

          <div className="main_card_container">
            <div className="card_wrapper">
              {/* {this.makeAllCate(this.state.allData)} */}
              {this.state.currentCategory === "all"
                ? this.makeAllCate(this.state.allData)
                : this.makeNewCate(this.state.newData)}
              {/* {this.newData > 1
                ? this.makeNewCate(this.state.newData)
                : this.makeAllCate(this.state.allData)} */}
            </div>
          </div>
          <div className="main_show_more_container">
            <div className="show_more_box">
              <a className="show_more" href="/categories/best?sort=score-desc">
                전체 더보기
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

export default StoreMainPopularProduct;
