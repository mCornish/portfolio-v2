import React from 'react';
import './Footer.css';

const Footer = (props) => (
    <footer> 
        <p>&copy; 2016 Mike Cornish.</p>
        <div className="footer__int-links">
            <a href="#about">About</a>
            <a href="#story">Story</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
        </div>
        <div className="footer__ex-links">
            <a href="http://www.devstory.mikecornish.net" target="_blank">My Blog</a>
        </div>
  </footer>
)

export default Footer;
