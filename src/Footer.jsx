import React from 'react';
import './Footer.css';

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
                <a href="http://www.novel.mikecornish.net" target="_blank">My Novel</a>
                <a href="https://github.com/mCornish" target="_blank">My Github</a>
            </div>
      </footer>
    );
}
