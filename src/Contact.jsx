import React from 'react';

const Contact = props => {
    return (
        <section id="contact">
            <h2>Let's Talk</h2>
            <p>If you're interested in working together, have a question about web development, or just want to say hi, feel free to send me an email at <a href="mailto:cornishmw@gmail.com">cornishmw@gmail.com</a>. Just let me know you came from my website and I'll get back to you within 24 hours.</p>
            <h3>Contact me about:</h3>
            <ul>
                <li>Work</li>
                <li>Front-end development</li>
                <li>Design</li>
                <li>Comic books</li>
            </ul>
            <h3>My Availability:</h3>
            <table>
                <tr>
                    <td>Monday - Friday</td>
                    <td>9AM - 6PM EST</td>
                </tr>
                <tr>
                    <td>Saturday</td>
                    <td>1PM - 5PM EST</td>
                </tr>
                <tr>
                    <td>Sunday</td>
                    <td>3PM - 7PM EST</td>
                </tr>
            </table>
        </section>
    );
}

export default Contact;
