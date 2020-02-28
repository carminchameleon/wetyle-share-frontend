import React, { Component } from "react";
import TrendCard from "../../../Components/TrendCard/TrendCard";
import OotdFooter from "../../../Components/OotdFooter/OotdFooter";

import "./DailyLook.scss";
import DaliyLookHeader from "./DaliyLookHeader/DaliyLookHeader";

class DailyLook extends Component {
  state = {
    other: []
  };
  componentDidMount = () => {
    fetch("http://localhost:3000/data/other.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          other: res.data
        });
      });
  };
  render() {
    return (
      <div className="daily_wrapper">
        <DaliyLookHeader other={this.state.other} />
        <TrendCard />
        <OotdFooter />
      </div>
    );
  }
}

export default DailyLook;
