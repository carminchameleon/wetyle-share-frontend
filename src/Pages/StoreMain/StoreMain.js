import React, { Component } from "react";
import Banner from "./Banner/Banner";
import "./StoreMain.scss";
import PopularProduct from "./PopularProduct/PopularProduct";
import PopularBrand from "./PopularBrand/PopulrBrand";
import KeyWordRanking from "./KeyWordRanking/KeyWordRanking";
import StoreTop from "../../Components/Top/StoreTop";

class StoreMain extends Component {
  render() {
    return (
      <div className="StoreMain">
        <StoreTop />
        <Banner />
        <PopularProduct />
        <PopularBrand />
        <KeyWordRanking />
      </div>
    );
  }
}

export default StoreMain;
