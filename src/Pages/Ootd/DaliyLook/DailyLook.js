import React, { Component } from "react";
import TrendCard from "../../../Components/TrendCard/TrendCard";
import OotdFooter from "../../../Components/OotdFooter/OotdFooter";

import "./DailyLook.scss";
import DaliyLookHeader from "./DaliyLookHeader/DaliyLookHeader";
import OotdTop from "../../../Components/Top/OotdTop";
import UploadIcon from "../../../Components/UploadIcon/UploadIcon";

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
      <div className="OOTD_wrapper">
        <OotdTop />
        <DaliyLookHeader other={this.state.other} />
        <TrendCard />
        <OotdFooter />
        <UploadIcon />
      </div>
    );
  }
}

export default DailyLook;
