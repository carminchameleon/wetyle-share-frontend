import React, { Component } from "react";

import OotdFooter from "../../../Components/OotdFooter/OotdFooter";
import TrendCard from "../../../Components/TrendCard/TrendCard";
import OotdTop from "../../../Components/Top/OotdTop";
import UploadIcon from "../../../Components/UploadIcon/UploadIcon";

import "./Hot.scss";

class Hot extends Component {
  render() {
    return (
      <div className="OOTD_wrapper">
        <OotdTop />
        <div className="hot_wrapper">
          <TrendCard />
          <OotdFooter />
        </div>
        <UploadIcon />
      </div>
    );
  }
}

export default Hot;
