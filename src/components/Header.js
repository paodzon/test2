import React from "react";
import "./Header.scss";
import logo from "../images/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header__logotitle">
        <div className="header__imagecontainer">
          <img src={logo} alt="logo"  classname="header__image" />
        </div>
        <div className="header__title">
          <h5 className="header__title1">Research Professional</h5>
          <h1 className="header__title2">Platform</h1>
        </div>
      </div>
      <div className="header__tabs">
        <span>Home</span>
        <span>About Us</span>
        <span>Insights</span>
        <span>Events</span>
        <span>Contact Us</span>
      </div>
    </header>
  );
}

export default Header;
