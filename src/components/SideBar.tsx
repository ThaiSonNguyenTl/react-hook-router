import React, { useState } from "react";
import {
  FaHome,
  FaTools,
  FaUserAlt,
  FaEnvelope,
  FaSignInAlt,
  FaSignOutAlt,
  FaBars
 
} from "react-icons/fa";
import { Route, NavLink } from "react-router-dom";

function SideBar() {
  const [isDisplay, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!isDisplay)
  return (
    <React.Fragment>
    
    <div className="row">  
      <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
        </div>
        
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <button type="button" className="btn btn-default"><FaBars onClick={showSideBar}/></button>
        </div>
        
    </div>
    
   
      { isDisplay ?
        <div className="sidebar" >
          <Route>
            <NavLink to="/" exact activeClassName="activeStyle">
              <FaHome /> Home
          </NavLink>
            <NavLink to="/service" activeClassName="activeStyle">
              <FaTools /> Services
          </NavLink>
            {/* <NavLink to="client" activeClassName="active">
        <FaUserAlt />
        Clients
      </NavLink> */}
            <NavLink to="/contact" activeClassName="activeStyle">
              <FaEnvelope /> Contact
          </NavLink>
            <NavLink to="/signIn" activeClassName="activeStyle">
              <FaSignInAlt /> Sign In
          </NavLink>
            <NavLink to="signUp" activeClassName="activeStyle">
              <FaSignOutAlt /> Sign Up
          </NavLink>
          </Route>

        </div> : ''
      }
    </React.Fragment>
  );
}

export default SideBar;
