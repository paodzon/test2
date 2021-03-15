import React from 'react';
import {Button} from 'reactstrap';
import './About.scss';

function About() {
    return (
        <section className="about">
            <div className="about__title">
                <h1>Our Commitment to Professionals</h1>
                <p>We help our partners deliver industry leading results with a commitment to excellence, thought-provoking insights and experienced distribution. We are laser focused on our shared goal - helping clients achieve their objectives</p>
            </div>
            <Button className="about__btn">Contact Us</Button>
        </section>
    )
}

export default About
