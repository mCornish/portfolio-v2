import React from 'react';
import './About.css';

const About = (props) => {
    const content = () => (
        <div className="bio">
            <p>When I'm not designing and developing websites, I like to write stories and blog posts, draw and sketches and art, and occasionally create music. My main passion is learning, because it allows me to execute bigger, better, more ambitious creations.</p>

            <p>Some of my most notable accompliishments include working on a Best in Show award-winning website, writing two novels (unpublished), interviewing a chart-topping musician, and writing hundreds of blog posts over the past six years.</p>

            <p>Mostly I just play with JavaScript, though.</p>
        </div>
    );

    return (
        <section id="about">
            <div className="h-card">
                <h1><span className="p-name">Mike Cornish</span> is a compulsive creator.</h1>
                {content()}
            </div>
        </section>
    );
}

export default About;
