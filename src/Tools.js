import React from 'react';
import tools from './tools-data.js';
import './Tools.css';

const Tools = (props) => (
    <div role="grid">
        {tools.map(tool => (
            <div role="gridcell" className="tool-icon">{tool.icon ? tool.icon() : tool.name}</div>
        ))}
    </div>
)

export default Tools;
