import React, { Component } from "react";

import OotdFooter from "../../../Components/OotdFooter/OotdFooter";
import TrendCard from "../../../Components/TrendCard/TrendCard";
import OotdTop from "../../../Components/Top/OotdTop";

import "./Hot.scss";

class Hot extends Component {
  render() {
    return (
      <div>
        <OotdTop />
        <div className="hot_wrapper">
          <TrendCard />
          <OotdFooter />
        </div>
      </div>
    );
  }
}

export default Hot;
