import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Blog from './Blog';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
  render() {
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
}

export default App;
