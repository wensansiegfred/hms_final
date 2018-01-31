import React, { Component } from "react";
import CompanyInfo from "./CompanyInfo";
import { Link } from 'react-router-dom';

class TopNavigation extends Component {
  render() {
    return(
      <div>
        <CompanyInfo />
        <div className="hms_top_menu_container">
          <ul className="hms_top_menu">
            <li className="item active">
                <Link to="/">Home</Link>
            </li>
            <li className="item">
              <Link to="/">Patient</Link>  
            </li>
            <li className="item">
              <Link to="/">Doctor</Link> 
            </li>
          </ul> 
        </div>
        <div className="hms_top_secondary_menu_container">
          <ul className="hms_top_secondary_menu">
            <li className="item active">
                <Link to="/">Home</Link>
            </li>
            <li className="item">
              <Link to="/">Patient</Link>  
            </li>
            <li className="item">
              <Link to="/">Doctor</Link> 
            </li> 
          </ul>   
        </div>
      </div>       
    );
  }
}

export default TopNavigation;