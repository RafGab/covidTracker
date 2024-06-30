import React from 'react';
import CountryCards from './CountryCards';
import "./topcountries.css";

const TopCountries = () => {
    return (
      <nav className="list">
        <div className="container">
            <ul className="listCountries">
              <li className="countryName">
                  <h3>Top 10 Country</h3>
                  </li>
              <li>
                <a href="#" className="a">
                <span className="usaflag"><img className="usaflag" src="../../assets/images/usaflag.png"/><p>USA</p><p>86503057</p></span>
                </a>
              </li>
              <li>
                <a href="#" className="a">
                <span className="usaflag"><img className="italyflag" src="../../assets/images/iyalyflag.png"/><p>ITALY</p><p>86503057</p></span>
                </a>
              </li>
              <li>
                <a href="#" className="a">
                <span className="unitedkingdonflag"><img className="unitedkingdonflag" src="../../assets/images/unitedkingdonflag.png"/><p>ITALY</p><p>86503057</p></span>
                </a>
              </li>
            </ul>
          </div>
      
      </nav>
    );
  };
  export default TopCountries;
  