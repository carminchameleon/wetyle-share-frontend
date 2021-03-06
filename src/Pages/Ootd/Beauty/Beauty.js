import React, { Component } from "react";
import TrendCard from "../../../Components/TrendCard/TrendCard";
import OotdFooter from "../../../Components/OotdFooter/OotdFooter";
import OotdTop from "../../../Components/Top/OotdTop";
import UploadIcon from "../../../Components/UploadIcon/UploadIcon";

import "./Beauty.scss";

class Beauty extends Component {
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
        <div className="beauty_wrapper">
          <TrendCard />
          <OotdFooter />
        </div>
        <UploadIcon />
      </div>
    );
  }
}

export default Beauty;
