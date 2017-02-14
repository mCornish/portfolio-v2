import React from 'react';
import Tools from './Tools';
import Projects from './Projects';
import './Experience.css';

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "activeTool": "",
        }

        this.setActive = this.setActive.bind(this);
        this.clearActive = this.clearActive.bind(this);
    }
    setActive(tool) {
        this.setState({"activeTool": tool});
    }
    clearActive() {
        this.setState({"activeTool": ""});
    }
    render() {
        return (
            <section id="experience" className="experience flex-center-col">
                <Projects activeTool={this.state.activeTool} />
                <Tools 
                    setActive={this.setActive} 
                    clearActive={this.clearActive} 
                />
            </section>
        );
    }
}

export default Experience;
