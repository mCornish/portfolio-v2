import React from 'react';
import './Footer.css';
import SocialIcons from './SocialIcons';
import scrollToContainer from './scrollToContainer';


function handleClick(e) {
    scrollToContainer(e.target);
}

export default function (props) {
    return (
        <footer> 
            <p>&copy; 2016 Mike Cornish.</p>
            <div className="footer__int-links">
                <a href="#about" onClick={handleClick}>About</a>
                <a href="#story" onClick={handleClick}>Story</a>
                <a href="#experience" onClick={handleClick}>Experience</a>
                <a href="#contact" onClick={handleClick}>Contact</a>
            </div>
            <div className="footer__ex-links">
                <a href="http://www.devstory.mikecornish.me" target="_blank">My Blog</a>
                <SocialIcons 
                    theme="dark" 
                    modifier="footer" 
                />
            </div>
      </footer>
    );
}
