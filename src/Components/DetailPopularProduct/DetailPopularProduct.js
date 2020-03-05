import React, { Component } from "react";
import StoreMainPopularProductCard from "../../Pages/StoreMain/StoreMainPopularProduct/StoreMainPopularProductCard";
// import "../../Pages/StoreMain/StoreMainPopularProduct/StoreMainPopularProduct.scss";
import "./DetailPopularProduct.scss";

class DetailPopularBrandCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories_popular_list: [],
      brandResult: []
    };
  }

  componentDidMount() {
    this.getBrandPopular();
    //  this.mockDataCategory();
  }
  getBrandPopular = () => {
    fetch("http://10.58.5.123:8000/product/popular/1")
      .then(res => res.json())
      .then(res => {
        this.setState({
          brandResult: res.result
        });
      });
  };
  // mockDataCategory=() => {
  //    fetch("http://localhost:3000/data/data.json")
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({
  //         categories_popular_list: res.categories_popular_list
  //       });
  //     });
  // }
  render() {
    if (this.state.categories_popular_list === undefined) return null;
    return (
      <div className="category_popular_parent_detail">
        <div className="category_popular_text">{this.props.title}</div>
        <div className="detail_popular_card_row">
          {this.state.brandResult.map((el, index) => (
            <StoreMainPopularProductCard
              brandName={el.brand}
              imgUrl={el.image_url}
              productName={el.name}
              productPrice={el.discounted_price}
              like={el.product_like}
              // review={el.review}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default DetailPopularBrandCard;
