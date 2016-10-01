import React from 'react';
import tools from './tools-data.js';
import './Tools.css';

const Tools = (props) => (
    <div className="tools">
        <h2 className="text-center">My Tools</h2>
        <div role="grid">
            {tools.map((tool, i) => (
                <div role="gridcell" className="tool-icon" onMouseEnter={props.setActive.bind(null, tool.name)} onMouseLeave={props.clearActive} key={i}>{tool.icon ? tool.icon() : tool.name}</div>
            ))}
        </div>
    </div>
)

export default Tools;
