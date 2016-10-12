import React from 'react';
import './Contact.css';

const Contact = props => {
    return (
        <section id="contact" className="contact">
            <h2>Let's Talk</h2>
            <p>If you're interested in working together, have a question about web development, or just want to say hi, feel free to send me an email at <a href="mailto:cornishmw@gmail.com">cornishmw@gmail.com</a>. Just let me know you came from my website and I'll get back to you within 24 hours.</p>
            <a role="button" href="mailto:cornishmw@gmail.com">Email Me</a>
        </section>
    );
}

export default Contact;
