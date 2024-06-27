import React from 'react';
import './App.css';
import Navbar from './assets/Component/navbar/Navbar.jsx';
import {TbWorld} from "react-icons/tb";
import {TfiComment, TfiFlickrAlt, TfiStatsUp, TfiLayersAlt, TfiLayoutTab, TfiViewGrid, TfiViewList, TfiPieChart} from "react-icons/tfi"
import {} from "react-icons/tfi"

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
    </div>

  )
  
};

export default App;
