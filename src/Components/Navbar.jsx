import React from "react";
import './navbar.css';
import {HashLink} from 'react-router-hash-link';

function Navbar() {
  return (
    <div>
      <div className="navbar-container">
        <div className="icon">
          <a href="#">PageOne<span className="icon-span">.</span></a>
        </div>
        <div className="navbar-options">
          
          {/* <ul className="navbar-list">
            <li><a href="#home">Home</a></li>
            <li>
                <a href="#services">Services</a>
              <ul className="child-dropdown">
                <li><a href="#">Sub Menu one</a></li>
                <li><a href="#">Sub Menu two</a></li>
                <li><a href="#"> Dropdown</a>
                  <ul className="child-dropdown">
                  <li><a href="#">Sub Menu one</a></li>
                  <li><a href="#">Sub Menu two</a></li>
                    <li><a href="#">sub Menu three</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li><a href="#process">Process</a></li>
            <li><a href="#client">Client</a></li>
            <li><a href="#">About</a></li>
          </ul> */}
          {/*  */}
<div className="navbar-list">
<HashLink to ="#home">
            <p>Home</p>
          </HashLink>
          <HashLink to ="#services"><p>Services</p></HashLink>
          <HashLink to="#process"><p>Process</p></HashLink>
          <HashLink to="#client"><p>Client</p></HashLink>
          <HashLink to="#about"><p>About</p></HashLink>
          <HashLink to="#contact"><p>Contact</p></HashLink>
</div>
         {/*  */}
        </div>
        <div>
          {/* <ul className="navbar-list contact">
            <li><a href="#">Contact</a></li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
