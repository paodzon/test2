import React from "react";
import {
  Navbar,
  Button,
} from "react-bootstrap";

import logo from '../images/acme-home-mobile.png';
import "./HeaderMenu.scss";

const HeaderMenu = () => {

  return (
    <div className="headermenu">
      <Navbar expand="lg">
        <div>
          <span></span>
        </div>
      <div className="headermenu__logo">
        <img src={logo} className="headermenu__image"/>
      </div>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
        <div className="headermenu__navs">
          <div className="headermenu__title">
          <p>Site Links</p>
          </div>
         
            <Button href="#home" className="headermenu__btn">Home</Button>
            <Button href="#aboutus" className="headermenu__btn">About Us</Button>
            <Button href="#insights" className="headermenu__btn">Insights</Button>
            <Button href="#events" className="headermenu__btn">Events</Button>
            <Button href="#contact" className="headermenu__btn">Contact Us</Button>
         
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderMenu;
