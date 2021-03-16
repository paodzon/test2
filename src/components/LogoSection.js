import React from 'react';
import './LogoSection.scss';
import logo from '../images/acme-logo2.png';

function LogoSection() {
    return (
        <section className="logosection">
            <div className="logosection__con">
            <img src={logo} className="logosection__image" alt="logo"/>
            </div>
            
        </section>
    )
}

export default LogoSection
