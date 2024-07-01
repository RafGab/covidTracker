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
console.log()
    
  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const countryList = data.map((country)=>{
    return (
      <option key={country.country} >{country.country}
            
            </option>

    )
  })
  return (
    <div>
      <div className="container">
        <select id="CoronaUpdateByCountry" value={selectedCountry} onChange={handleChange}>
  {countryList}
        </select>
        <div  tabIndex="0">
          <span >{selectedCountry}</span>
          <ul >
            {countries.map((country) => (
              <li key={country.country} data-value={country.country} className="">
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