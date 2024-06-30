import React, { useState } from 'react';
import useApi from '../../services/useApi';

const CountrySelect = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('')



const data = useApi("https://disease.sh/v3/covid-19/countries");
    if (!data) {
        return 
        <p>cargando</p>
        } 

    
  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <div >
        <select id="CoronaUpdateByCountry" value={selectedCountry} onChange={handleChange}>
          {countries.map((country) => (
            <option key={country.cca2} value={country.cca2}>
              {country.name.common}
            </option>
          ))}
        </select>
        <div  tabIndex="0">
          <span >{selectedCountry}</span>
          <ul >
            {countries.map((country) => (
              <li key={country.cca2} data-value={country.cca2} className="">
                {country.name.common}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountrySelect;