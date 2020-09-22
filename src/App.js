import React, { Component } from "react";
import Header from "./components/header/Header";
import "./App.css";
import BottomOrderTable from "./components/bottomOrderTable/BottomOrderTable";
import TopOrderTable from "./components/topOrderTable/TopOrderTable";
import TopUsersTable from "./components/topUsersTable/TopUsersTable";
import BottomUsersTable from "./components/bottomUsersTable/BottomUsersTable";
import DetailOrder from "./components/detailOrder/DetailOrder";
import OrderTrend from "./components/orderTrend/OrderTrend";
import Information from "./components/information/Information";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="info1">
          <Information />
          <div className="info__span">
            <i>
              <span>* Data shown considering today's date 2020-09-12</span>
            </i>
          </div>
        </div>

        <h1>Daily Order Trend</h1>
        <OrderTrend />
        <h1>ORDERS</h1>
        <div className="col">
          <TopOrderTable />
          <BottomOrderTable />
        </div>
        <h1>USERS</h1>
        <div className="col">
          <TopUsersTable />
          <BottomUsersTable />
        </div>

        <DetailOrder />
      </div>
    );
  }
}

export default App;
