import React, { Component } from "react";
import { SERVER_URL } from "config";

import TrendCard from "../../../Components/TrendCard/TrendCard";
import OotdFooter from "../../../Components/OotdFooter/OotdFooter";
import OotdTop from "../../../Components/Top/OotdTop";
import UploadIcon from "../../../Components/UploadIcon/UploadIcon";

import "./Myhome.scss";
class Myhome extends Component {
  state = {
    follwingCard: [],
    scrolling: true,
    items: 5,
    preItems: 0
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.infiniteScroll, true);
    this.getCardList();
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.infiniteScroll);
  };
  getCardList = () => {
    fetch(`${SERVER_URL}/card/following`, {
      method: "GET",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbl9pZCI6Ilx1Yzc3NFx1Yzg4NVx1YmJmY19pZCJ9.RMSp0p5meKl6Pn81hwkAMb2cucMJ1fPLmB-DtqdI5Kk"
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          follwingCard: this.state.follwingCard.concat(
            res.card_list.slice(this.state.preItems, this.state.items)
          ),
          scrolling: !this.state.scrolling
        });
      });
  };
  // 무한 스크롤 구현
  infiniteScroll = () => {
    let scroolHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight + 1 > scroolHeight) {
      this.setState({
        scrolling: !this.state.scrolling,
        preItems: this.state.items,
        items: this.state.items + 5
      });
      this.getCardList();
    }
  };
  render() {
    return (
      <div className="OOTD_wrapper">
        <OotdTop />
        <div className="myhome_wrapper">
          <TrendCard data={this.state.follwingCard} />
          <OotdFooter />
          <UploadIcon />
        </div>
      </div>
    );
  }
}

export default Myhome;
