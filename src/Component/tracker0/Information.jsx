import React from 'react';
import Cards from './Cards';
import "./cards.css";

const Information = () => {
return (
    <>
    <div className='container'>
    <h2 className="title">COVID 19-Tracker</h2>
        <div className='cards'>
        <Cards title={"Total Case"} cases={"1215454"} className="card red"></Cards>
        <Cards title={"Active Case"} cases={"1215454"} className="card pink"></Cards>
        <Cards title={"Recovered Case"} cases={"1215454"} className="card green"></Cards>
        <Cards title={"Death Case"} cases={"1215454"} className="card blue" ></Cards>
        </div>
    </div>
</>
);
}

export default Information;

