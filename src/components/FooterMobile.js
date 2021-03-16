import React from "react";
import {Button } from "react-bootstrap";
import "./FooterMobile.scss";

function FooterMobile() {
  return (
    <footer className="footermobile">
      <div className="footermobile__navs">
          <div className="footermobile__terms">
            <Button className="footermobile__btn2">Privacy Policy</Button>
            <Button className="footermobile__btn2">Terms of Use</Button>
          </div>
        <div className="footermobile__title">
          <p>Site Links</p>
        </div>
        <div className="footermobile__btnCon">
        <Button href="#home" className="footermobile__btn">
          Home
        </Button>
        <Button href="#aboutus" className="footermobile__btn">
          About Us
        </Button>
        <Button href="#insights" className="footermobile__btn">
          Insights
        </Button>
        <Button href="#events" className="footermobile__btn">
          Events
        </Button>
        <Button href="#contact" className="footermobile__btn">
          Contact Us
        </Button>
        </div>

      </div>
    </footer>
  );
}

export default FooterMobile;
