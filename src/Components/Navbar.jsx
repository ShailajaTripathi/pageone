import React from "react";
import './navbar.css';

function Navbar() {
  return (
    <div>
      <div className="navbar-container">
        <div className="icon">
          <a href="#">PageOne.</a>
        </div>
        <div className="navbar-options">
          <ul className="navbar-list">
            <li><a href="#">Home</a></li>
            <li>
                <a href="#">Services</a>
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

            <li><a href="#">Process</a></li>
            <li><a href="#">Client</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
        <div>
          <ul className="navbar-list contact">
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
