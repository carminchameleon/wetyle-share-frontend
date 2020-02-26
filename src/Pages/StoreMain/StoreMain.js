import React, { Component } from "react";

import Banner from "./Banner/Banner";

import "./StoreMain.scss";

class StoreMain extends Component {
  render() {
    return (
      <div>
        <div className="store_main_wrapper">
          <Banner />
        </div>
      </div>
    );
  }
}

export default StoreMain;
