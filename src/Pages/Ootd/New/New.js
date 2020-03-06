import React, { Component } from "react";
import { SERVER_URL } from "config";
import TrendCard from "../../../Components/TrendCard/TrendCard";
import OotdFooter from "../../../Components/OotdFooter/OotdFooter";
import OotdTop from "../../../Components/Top/OotdTop";
import UploadIcon from "../../../Components/UploadIcon/UploadIcon";

import "./New.scss";
class New extends Component {
  state = {
    newCard: [],
    items: 5,
    preItems: 0,
    scrolling: true
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.infiniteScroll, true);
    this.getNewList();
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.infiniteScroll);
  };
  getNewList = () => {
    fetch(`${SERVER_URL}/card/new-card`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          newCard: this.state.newCard.concat(
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
      this.getNewList();
    }
  };
  render() {
    return (
      <div className="OOTD_wrapper">
        <OotdTop />
        <div className="new_wrapper">
          <TrendCard data={this.state.newCard} />

          <OotdFooter />
        </div>
        <UploadIcon />
      </div>
    );
  }
}

export default New;
