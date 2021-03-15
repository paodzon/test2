import React from 'react';

import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './sections/About';
import Events from './sections/Events';
import Home from './sections/Home';
import Insights from './sections/Insights';

function App() {
    return (
        <div className="app">
            <Header/>
            <Home/>
            <Insights/>
            <About/>
            <Events/>
            <Footer/>

        </div>
    )
}

export default App
