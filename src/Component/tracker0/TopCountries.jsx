import React from 'react';
import "./topcountries.css";
import useApi from '../../services/useApi';

const TopCountries = () => {
  
    const data = useApi("https://disease.sh/v3/covid-19/countries");
    if (!data) {
        <p>cargando</p>}
        const sortedData = data.sort((a, b) => b.deaths - a.deaths);
        const top10Countries = sortedData.slice(0, 10);
  return (
    <div className="box">
    <div className="containerTopTen">
      <ul className="listCountries">
        {top10Countries.map((country, index) => (
          <li key={index}>
            <a href="#" className="countryLink">
              <div className="countryFlags">
                <img src={country.countryInfo.flag}
                  alt={`${country.country} Flag`}/>
                    </div>
                    <div className="topTenCases">
                <p>{country.country}</p>
                <p>{country.cases}</p>
                </div>
            </a>
          </li>
        ))}
      </ul>
      </div>
    </div>
    
  
  );
};

export default TopCountries;

    

