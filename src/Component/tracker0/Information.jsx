import React from 'react';
import Cards from './Cards';
import "./cards.css";
import useApi from '../../services/useApi';

const Information = () => {
return (
    <>
    <div className='container'>
    <h2 className="title">COVID 19-Tracker</h2>
        <div className='cards'>
        <Cards title={"Total Case"} cases={data.cases} className="card red" updatedCases={data.todayCases}></Cards>
        <Cards title={"Active Case"} cases={data.active} className="card pink"></Cards>
        <Cards title={"Recovered Case"} cases={data.recovered} className="card green" updatedCases={data.todayRecovered}></Cards>
        <Cards title={"Death Case"} cases={data.deaths} className="card blue" updatedCases={data.todayDeaths} ></Cards>
        </div>
    </div>
</>
);
}

export default Information;

