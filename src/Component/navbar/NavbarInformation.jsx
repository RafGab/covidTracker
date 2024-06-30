import {TbWorld} from "react-icons/tb";
import {TfiComment, TfiStatsUp, TfiLayersAlt, TfiLayoutTab, TfiViewGrid, TfiViewList, TfiPieChart, TfiFlickrAlt} from "react-icons/tfi"
import "./navbar.css";

const Navbar = () => {
  return (
    
      <div className="container">
          <ul className="listIcons">
            <li className="logo">
                <div className="logoP">
                    <img src="src/assets/images/coronavirus.png" alt="logo" />
                </div>
                
            </li>
            <li>
              <a href="#" className="a">
                <span className="yellowCircle"></span>
                <TfiPieChart className="icons" />
              </a>
            </li>
            <li>
              <a href="#">
                <span className="orangeCircle"></span>
                <TfiViewList className="icons" />
              </a>
            </li>
            <li>
              <a href="#">
              <TfiViewGrid className="icons" />
 
              </a>
            </li>
            <li>
              <a href="#">
              <TfiLayoutTab className="icons" />
              </a>
            </li>
            <li>
              <a href="#">
              <TfiLayersAlt className="icons"/>
              </a>
            </li>
            <li>
              <a href="#">
              <TfiStatsUp className="icons"/>
              </a>
            </li>
            <li>
              <a href="#">
                <TbWorld className="icons"/>
              </a>
            </li>
            <li className="chat">
              <a href="#" >
                <TfiComment className="icons"/>              
              </a>
            </li>
            <li className="night-mode">
              <a href="#">
                <TfiFlickrAlt className="icons"/>
              </a>
            </li>
          </ul>
        </div>
  );
};
export default Navbar;
