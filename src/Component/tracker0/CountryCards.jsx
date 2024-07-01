import React from 'react';
import "./topcountries.css";

const CountryCards = ({ title, cases, updatedCases, className }) => {
    return (
    
        <div className={className}>
            <h2 className='h2'>{title}</h2>
            <span className='small'>{cases}</span>
            <b className='b'>{updatedCases}</b>
        </div>
    )
    };

export default CountryCards;