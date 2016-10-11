import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Blog from './Blog';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';

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
