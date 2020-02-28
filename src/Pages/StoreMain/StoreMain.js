import React, { Component } from "react";
import StoreMainBanner from "./StoreMainBanner/StoreMainBanner";
import "./StoreMain.scss";
import StorePopularProduct from "./StorePopularProduct/StorePopularProduct";

class StoreMain extends Component {
  render() {
    return (
      <div className="StoreMain">
        <StoreMainBanner />
        <StorePopularProduct />
      </div>
    );
  }
}

export default StoreMain;
