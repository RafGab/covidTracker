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
import CountrySelect from "./Component/tracker1/CountrySelect.jsx";


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
      <CountrySelect/>
    </div>
  );
}

export default App;
