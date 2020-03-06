import React, { Component } from "react";
import TrendCard from "../../../Components/TrendCard/TrendCard";
import OotdFooter from "../../../Components/OotdFooter/OotdFooter";
import OotdTop from "../../../Components/Top/OotdTop";
import UploadIcon from "../../../Components/UploadIcon/UploadIcon";

import "./New.scss";
class New extends Component {
  state = {
    newList: []
  };
  componentDidMount = () => {
    this.getNewItem();
  };
  getNewItem = () => {
    fetch("http://52.78.11.154:8000/card/new")
      .then(res => res.json())
      .then(res => {
        this.setState({
          newList: res.card_list
        });
      });
  };
  render() {
    return (
      <div className="OOTD_wrapper">
        <OotdTop />
        <div className="new_wrapper">
          <TrendCard data={this.state.newList} />
          <OotdFooter />
        </div>
        <UploadIcon />
      </div>
    );
  }
}

export default New;
