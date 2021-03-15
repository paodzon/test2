import React from "react";
import {Button} from 'reactstrap';
import "./Events.scss";

function Events() {
  return (
    <section className="events">
      <div className="events__content">
        <div className="events__text">
          <h5>Upcoming Events</h5>
          <span>This needs a great tagline, but I'll fill it in later</span>
        </div>
        <div className="events__cardcon">
          <div className="events__card1">
            <div className="events__date">
              <span>JAN</span>
              <h1>28</h1>
            </div>
            <div className="events__details">
            <h5>Insight Exchange Network</h5>
            <span>Join us for this conference showcasing innovation</span><br/>
            <Button className="events__btn">Get More Insight</Button>
            </div>
            <div className="events__location">
                <h4>Chicago, IL</h4>
            </div>

          </div>
          <div className="events__card1">
            <div className="events__date">
              <span>FEB</span>
              <h1>12</h1>

            </div>

            <div className="events__details">
            <h5>Citywide Buyer's Retreat</h5>
            <span>Find out hhow banks are responding to the changing future of interests...</span><br/>
            <Button className="events__btn">Get More Insight</Button>
            </div>
            <div className="events__location">
                <h4>The Wagner, New York</h4>
            </div>
          </div>
          <div className="events__card1">
            <div className="events__date">
              <span>MAY</span>
              <h1>6</h1>
            </div>

            <div className="events__details">
            <h5>Research Exchange</h5>
            <span>Find the best online resources to help with your investments...</span><br/>
            <Button className="events__btn">Get More Insight</Button>
            </div>
            <div className="events__location">
                <h4>London, England</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
