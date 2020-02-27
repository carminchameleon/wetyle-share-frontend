import React, { Component } from "react";
import TrendCard from "../../../Components/TrendCard/TrendCard";
import OotdFooter from "../../../Components/OotdFooter/OotdFooter";

import "./DailyLook.scss";
import DaliyLookHeader from "./DaliyLookHeader/DaliyLookHeader";

class DailyLook extends Component {
  render() {
    return (
      <div className="daily_wrapper">
        <DaliyLookHeader />
        <TrendCard />
        <OotdFooter />
      </div>
    );
  }
}

export default DailyLook;
