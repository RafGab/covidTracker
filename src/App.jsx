import React from 'react';
import './App.css';
import {TbWorld} from "react-icons/tb";
import {TfiComment, TfiFlickrAlt, TfiStatsUp, TfiLayersAlt, TfiLayoutTab, TfiViewGrid, TfiViewList, TfiPieChart} from "react-icons/tfi"
import Information from "./Component/tracker0/Information.jsx";
import CountrySelect from "./Component/tracker1/CountrySelect.jsx";
import TopCountries from './Component/tracker0/TopCountries.jsx';
import NavbarInformation from "./Component/navbar/NavbarInformation.jsx";
import CountryCards from './Component/tracker0/CountryCards.jsx';






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
      <TopCountries/>
      <CountrySelect/>
</div>
  );
}

export default App;
