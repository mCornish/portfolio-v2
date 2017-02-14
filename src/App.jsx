import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Experience from './Experience';
import Writing from './Writing';
import Contact from './Contact';
import Footer from './Footer';

import mixpanel from 'mixpanel-browser';

mixpanel.init('5fbd1f3532c9111fee31a61c8132bc25');
mixpanel.track('Page View');
exports.mixpanel = mixpanel;

export default function() { 
    return (
        <div>
            <Nav />
            <main id="main">
                <About />
                <Experience />
                <Writing />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
