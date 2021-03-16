import React from "react";
import Button from "react-bootstrap/Button";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./CarouselEvent.scss";

class CarouselEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      slides: [
        <div className="carousel__slide">
          <div className="carousel__date">
            <span>JAN</span>
            <h1>28</h1>
          </div>
          <div className="carousel__details">
            <h5>Insight Exchange Network</h5>
            <span>Join us for this conference showcasing innovation...</span>
            <br />
            <Button className="carousel__btn">View Event Details</Button>
          </div>
          <div className="carousel__location">
            <h4>
              Chicago, <span>IL</span>
            </h4>
          </div>
        </div>,
        <div className="carousel__slide">
          <div className="carousel__date">
            <span>FEB</span>
            <h1>12</h1>
          </div>
          <div className="carousel__details">
            <h5>Citywide Buyer's Retreat</h5>
            <span>Find out hhow banks are responding to the changing future of interests...</span>
            <br />
            <Button className="carousel__btn">View Event Details</Button>
          </div>
          <div className="carousel__location">
            <h4>
              The Wagner, <span>New York</span>
            </h4>
          </div>
        </div>,
        <div className="carousel__slide">
          <div className="carousel__date">
            <span>MAY</span>
            <h1>6</h1>
          </div>
          <div className="carousel__details">
            <h5>Research Exchange</h5>
            <span>Find the best online resources to help with your investments...</span>
            <br />
            <Button className="carousel__btn">View Event Details</Button>
          </div>
          <div className="carousel__location">
            <h4>
              London, <span>England</span>
            </h4>
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
      <div className="carousel">
        <Carousel
          slidesPerPage={2}
          value={this.state.value}
          slides={this.state.slides}
          onChange={this.onchange}
        />
        <Dots
          className="carousel__dots"
          value={this.state.value}
          onChange={this.onchange}
          number={this.state.slides.length}
        />
      </div>
    );
  }
}
export default CarouselEvent;
