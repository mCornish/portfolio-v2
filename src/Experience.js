import React from 'react';
import Tools from './Tools';
import Projects from './Projects';

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "activeTool": "",
        }
    }
    setActive(tool) {
        this.setState({"activeTool": tool});
    }
    clearActive() {
        this.setState({"activeTool": ""});
    }
    render() {
        return (
            <section id="experience" className="flex-center-col">
                <Tools setActive={this.setActive.bind(this)} clearActive={this.clearActive.bind(this)} />
                <Projects activeTool={this.state.activeTool} />
            </section>
        );
    }
}

export default Experience;
