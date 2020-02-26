import React, { Component } from "react";

import OotdFooter from "../../../Components/OotdFooter/OotdFooter";
import TrendCard from "../../../Components/TrendCard/TrendCard";

import "./Hot.scss";
class Hot extends Component {
  render() {
    return (
      <div>
        <TrendCard />
        <OotdFooter />
      </div>
    );
  }
}

export default Hot;
