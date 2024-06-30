import React from 'react';
import Filter from './Filter.jsx';

const CountryList = () => {
    const countries = [
      'Argentina',
      'Australia',
      'Austria',
      'Belgium',
      'Brazil',
      'Canada',
      'Chile',
      'China',
      'Denmark',
      'Egypt',
      'Finland',
      'France',
      'Germany',
      'India',
      'Indonesia',
      'Italy',
      'Japan',
      'Mexico',
      'Netherlands',
      'Norway',
      'Portugal',
      'Russia',
      'South Africa',
      'Spain',
      'Sweden',
      'Switzerland',
      'Turkey',
      'United Kingdom',
      'United States'
    ];
  
    return (
      <div>
        <Filter countries={countries} />
      </div>
    );
  };
  
  export default CountryList;