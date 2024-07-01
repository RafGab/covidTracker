import React from 'react';
import "./topcountries.css";
import useApi from '../../services/useApi';
const TopCountries = () => {
  <h3>Top 10 Countries</h3>
    const data = useApi("https://disease.sh/v3/covid-19/countries_");
    if (!data) {
        <p>cargando</p>}
        const sortedData = data.sort((a, b) => b.deaths - a.deaths);
        const top10Countries = sortedData.slice(0, 10);
  return (
    
    <div className="container">
      <ul className="listCountries">
        {top10Countries.map((country, index) => (
          <li key={index}>
            <a href="#" className="countryLink">
              <div className="countryDetails">
                <img
                  className="countryFlag"
                  src={country.countryInfo.flag}
                  alt={`${country.country} Flag`}
                />
                <p>{country.country}</p>
                <p>{country.cases}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopCountries;

    

