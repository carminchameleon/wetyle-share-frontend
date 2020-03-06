import React, { Component } from "react";
import Banner from "./Banner/Banner";
import PopularProduct from "./PopularProduct/PopularProduct";
import PopularBrand from "./PopularBrand/PopulrBrand";
import KeyWordRanking from "./KeyWordRanking/KeyWordRanking";
import StoreTop from "Components/Top/StoreTop";
import StoreFooter from "Components/StoreFooter/StoreFooter";
import "./StoreMain.scss";

class StoreMain extends Component {
  render() {
    return (
      <div className="StoreMain">
        <StoreTop />
        <Banner />
        <PopularProduct />
        <PopularBrand />
        <KeyWordRanking />
        <StoreFooter />
      </div>
    );
  }
}

export default StoreMain;
