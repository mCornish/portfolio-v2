import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Experience from './Experience';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
    <div>
        <Nav />
        <main>
            <About />
            <Experience />
        </main>
        <Footer />
    </div>
    );
  }
}

export default App;
