import React from 'react';

import './App.scss';
import Footer from './components/Footer';
import FooterMobile from './components/FooterMobile';
import Header from './components/Header';
import HeaderMenu from './components/HeaderMenu';
import LogoSection from './components/LogoSection';
import About from './sections/About';
import Events from './sections/Events';
import Home from './sections/Home';
import Insights from './sections/Insights';

function App() {
    return (
        <div className="app">
            <Header/>
            <HeaderMenu/>
            <Home/>
            <Insights/>
            <About/>
            <Events/>
            <LogoSection/>
            <Footer/>
            <FooterMobile/>

        </div>
    )
}

export default App
