import React from "react";
import "./App.css";
import NavbarInformation from "./Component/navbar/NavbarInformation.jsx";
import { TbWorld } from "react-icons/tb";
import {
  TfiComment,
  TfiFlickrAlt,
  TfiStatsUp,
  TfiLayersAlt,
  TfiLayoutTab,
  TfiViewGrid,
  TfiViewList,
  TfiPieChart,
} from "react-icons/tfi";
import Information from "./Component/tracker0/Information.jsx";
import CountryList from "./Component/tracker1/CountryList.jsx";
import axios from "axios";


class Like extends React.Component {
  render() {
    return (
      <div>
        <TfiPieChart />
        <TfiViewList />
        <TfiViewGrid />
        <TfiLayoutTab />
        <TfiLayersAlt />
        <TfiStatsUp />
        <TbWorld />
        <TfiComment />
        <TfiFlickrAlt />
      </div>
    );
  }
}

function App() {
  return (
    <div className="main">
      <NavbarInformation />
      <Information />
      <CountryList />
    </div>
  );
}

export default App;
