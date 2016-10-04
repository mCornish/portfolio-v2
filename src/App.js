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
        <main>
            <About />
            <Blog />
            <Experience />
            <Contact />
            <a href="https://validator.w3.org/nu/?doc=http%3A%2F%2Fnova.umuc.edu%2F%7Ect385b03%2F" target="_blank">Valid HTML</a><br/>
            <a href="https://jigsaw.w3.org/css-validator/validator?uri=http%3A%2F%2Fnova.umuc.edu%2F%7Ect385b03%2F&profile=css3&usermedium=all&warning=1&vextwarning=&lang=en" target="_blank">4 CSS errors due to unstandardized properties</a>
        </main>
        <Footer />
    </div>
    );
  }
}

export default App;
