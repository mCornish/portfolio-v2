import React from 'react';
import './Contact.css';
import {mixpanel} from './App';


const handleClick = () => {
    mixpanel.track('Email CTA Click');
}

const Contact = props => {
    return (
        <section id="contact" className="contact">
            <h2>Let's Talk</h2>
            <p>If you're interested in working together, have a question about web development, or just want to say hi, feel free to send me an email at <a href="mailto:mike.cornish@coderemail.com">mike.cornish@coderemail.com</a>. Just let me know you came from my website and I'll get back to you within 24 hours.</p>
            <a role="button" href="mailto:mike.cornish@coderemail.com" onClick={handleClick}>Email Me</a>
        </section>
    );
}

export default Contact;
