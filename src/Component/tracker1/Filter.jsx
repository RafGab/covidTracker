import React, { useState } from 'react';

const Filter = ({ countries }) => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredCountries = countries.filter((country) =>
      country.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <ul>
          {filteredCountries.map((country, index) => (
            <li key={index}>{country}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Filter;