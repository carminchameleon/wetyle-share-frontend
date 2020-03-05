import React, { Component } from "react";
import StoreMainBanner from "./StoreMainBanner/StoreMainBanner";
import "./StoreMain.scss";
import StoreMainPopularProduct from "./StoreMainPopularProduct/StoreMainPopularProduct";
import StoreMainPopularBrand from "./StoreMainPopularBrand/StoreMainPopulrBrand";
import StoreMainKeyWordRanking from "./StoreMainKeyWordRanking/StoreMainKeyWordRanking";
import StoreTop from "../../Components/Top/StoreTop";

class StoreMain extends Component {
  render() {
    return (
      <div className="StoreMain">
        <StoreTop />
        <StoreMainBanner />
        <StoreMainPopularProduct />
        <StoreMainPopularBrand />
        <StoreMainKeyWordRanking />
      </div>
    );
  }
}

export default StoreMain;
