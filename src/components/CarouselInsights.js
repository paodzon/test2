import React from 'react'
import Carousel, {Dots} from '@brainhubeu/react-carousel';
import card1 from '../images/card1.png';
import card2 from '../images/card2.png';
import card3 from '../images/card3.png';
import './CarouselInsights.scss';

class CarouselInsights extends React.Component {
    constructor() {
      super()
      this.state = {
        value: 0,
        slides: [
          <div className="insights__cards card1">
            <div className="insights__imagecon">
              <img src={card1} alt="card1" className="insight__image" />
            </div>
            <div className="insights__cardtitle1">
              <h1>Global Factor</h1>
              <h1>Investing Study</h1>
            </div>
          </div>,
                  <div className="insights__cards card2">
                  <div className="insights__imagecon">
                  <img src={card2} alt="card2" className="insights__image"/>
                  </div>
                  <div className="insights__cardtitle2">
                      <h1>2019</h1>
                      <h1>Outlook</h1>
                  </div>
                  
              </div>,
                  <div className="insights__cards card3">
                  <div className="insights__imagecon">
                  <img src={card3} alt="card3" className="insight__image"/>
                  </div>
                  <div className="insights__cardtitle3">
                      <h1>Capital Market</h1>
                      <h1>Assumptions</h1>
                  </div>
                  
              </div>,
        ],
      };
      this.onchange = this.onchange.bind(this);
    }
  
  
    onchange(value) {
      this.setState({ value });
    }
  
    render() {
      return (
      <div className="carousel__insights">
        <Carousel
        slidesPerPage={2}
          value={this.state.value}
          slides={this.state.slides}
          onChange={this.onchange}
        />
        <Dots className="carousel__dots" value={this.state.value} onChange={this.onchange} number={this.state.slides.length} />
      </div>
      );
    }
  }

  export default CarouselInsights