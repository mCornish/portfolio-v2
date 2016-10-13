import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Blog from './Blog';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';

import Mixpanel from 'mixpanel';

const mixpanel = Mixpanel.init('5fbd1f3532c9111fee31a61c8132bc25');
mixpanel.track('Page view');

export default function() {
    return (
        <div>
            <Nav />
            <main id="main">
                <About />
                <Blog />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
