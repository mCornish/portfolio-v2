import React from 'react';
import './Footer.css';

const Footer = (props) => (
    <footer>
        <p>&copy; 2016 Mike Cornish.</p>
        <div className="footer__int-links">
            <a href="#synopsis">The Story</a>
            <a href="#author">The Author</a>
            <a href="#faq">FAQ</a>
            <a href="#cta">Pre-Order</a>
        </div>
        <div className="footer__ex-links">
            <a href="http://www.devstory.mikecornish.net" target="_blank">My Blog</a>
            <a href="https://www.inkshares.com/books/the-dawn-of-man-409f1f" target="_blank">Inkshares Campaign</a>
            <a href="http://mikecornish.net" target="_blank">My Portfolio</a>
        </div>
  </footer>
)

export default Footer;
