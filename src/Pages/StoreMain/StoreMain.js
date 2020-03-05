import React, { Component } from "react";
import StoreMainBanner from "./StoreMainBanner/StoreMainBanner";
import "./StoreMain.scss";
import StoreMainPopularProduct from "./StoreMainPopularProduct/StoreMainPopularProduct";
import StoreMainPopularBrand from "./StoreMainPopularBrand/StoreMainPopulrBrand";
import StoreTop from "../../Components/Top/StoreTop";
import StoreMainTrend from "./Trend/StoreMainTrend";

class StoreMain extends Component {
  render() {
    return (
      <div className="StoreMain">
        <StoreTop />
        <StoreMainBanner />
        <StoreMainPopularProduct />
        <StoreMainPopularBrand />
        <StoreMainTrend />
      </div>
    );
  }
}

export default StoreMain;
