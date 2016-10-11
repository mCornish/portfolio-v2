import React from 'react';
import './Footer.css';
import SocialIcons from './SocialIcons';

export default function (props) {
    return (
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
                <SocialIcons 
                    theme="dark" 
                    modifier="footer" 
                />
            </div>
      </footer>
    );
}
