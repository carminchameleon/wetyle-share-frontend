import React, { Component } from "react";
import StoreMainBanner from "./StoreMainBanner/StoreMainBanner";
import "./StoreMain.scss";
import StoreMainPopularProduct from "./StoreMainPopularProduct/StoreMainPopularProduct";
import StoreTop from "../../Components/Top/StoreTop";

class StoreMain extends Component {
  render() {
    return (
      <div className="StoreMain">
        <StoreTop />
        <StoreMainBanner />
        <StoreMainPopularProduct />
      </div>
    );
  }
}

export default StoreMain;
