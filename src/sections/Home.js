import React from "react";
import "./Home.scss";
function Home() {
  return (
    <section className="home">
      <div className="home__text">
        <div className="home__title">
          <h1>ACME Wealth</h1>
          <h1>Management Platforms</h1>
        </div>

        <span>Investment excellence.</span>
        <br />
        <span>Diversity of thought</span>
        <br />
        <span>Organizational strength</span>
        <br />
      </div>
    </section>
  );
}

export default Home;
