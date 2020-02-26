import React, { Component } from "react";
import StoreMainBanner from "./StoreMainBanner/StoreMainBanner";
import "./StoreMain.scss";

class StoreMain extends Component {
  render() {
    return (
      <div className="StoreMain">
        <StoreMainBanner />
      </div>
    );
  }
}

export default StoreMain;
