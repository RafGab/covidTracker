import React from 'react';
import './App.css';
import Navbar from './Component/navBar/Navbar.jsx';
import {TbWorld} from "react-icons/tb";
import {TfiComment, TfiFlickrAlt, TfiStatsUp, TfiLayersAlt, TfiLayoutTab, TfiViewGrid, TfiViewList, TfiPieChart} from "react-icons/tfi"
import Information from "./Component/tracker0/Information.jsx";
import TopCountries from './Component/tracker0/TopCountries.jsx';



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
    <TbWorld/>
    <TfiComment/>
    <TfiFlickrAlt/>
    
    </div>
    );
  }
}

function App() {
  return (

    <div>
    <Navbar/>
    <Information/>
    <TopCountries/>

    </div>

  )
};


export default App;
