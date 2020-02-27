import React, { Component } from "react";
import TrendCard from "../../../Components/TrendCard/TrendCard";
import OotdFooter from "../../../Components/OotdFooter/OotdFooter";

import "./DailyLook.scss";

class DailyLook extends Component {
  render() {
    return (
      <div>
        <TrendCard />
        <OotdFooter />
      </div>
    );
  }
}

export default DailyLook;
