import React, { Component } from "react";
import TrendLeft from "./TrendLeft/TrendLeft";
import TrendRight from "./TrendRight/TrendRight";
import "./StoreMainTrend.scss";

class StoreMainTrend extends Component {
  render() {
    return (
      <div className="StoreMainTrend">
        <div className="StoreMainTrend_wrapper">
          <header>
            <div className="trend_title">트렌드 기획전</div>
          </header>
          <main>
            <div className="trend_main_wrapper">
              <TrendLeft />
              <TrendRight />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default StoreMainTrend;
