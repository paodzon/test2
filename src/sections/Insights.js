import React from "react";
import "./Insights.scss";

import card1 from '../images/card1.png'
import card2 from '../images/card2.png'
import card3 from '../images/card3.png'
import CarouselInsights from "../components/CarouselInsights";

function Insights() {
  return (
    <section className="insights">
      <div className="insights__content">
        <div className="insights__title">
          <h5>ACME Insights</h5>
          <span>How are factors being used around the world?</span>
        </div>
        <div className="insights__cardcon">
        <div className="insights__cards card1">
            <div className="insights__imagecon">
            <img src={card1} alt="card1" className="insight__image"/>
            </div>
            <div className="insights__cardtitle1">
                <h1>Global Factor</h1>
                <h1>Investing Study</h1>
            </div>
            
        </div>
        <div className="insights__cards card2">
            <div className="insights__imagecon">
            <img src={card2} alt="card2" className="insights__image"/>
            </div>
            <div className="insights__cardtitle2">
                <h1>2019</h1>
                <h1>Outlook</h1>
            </div>
            
        </div>
        <div className="insights__cards card3">
            <div className="insights__imagecon">
            <img src={card3} alt="card3" className="insight__image"/>
            </div>
            <div className="insights__cardtitle3">
                <h1>Capital Market</h1>
                <h1>Assumptions</h1>
            </div>
            
        </div>
        </div>
        <div className="insights__carousel">
          <CarouselInsights/>
        </div>

        
      </div>
    </section>
  );
}

export default Insights;
