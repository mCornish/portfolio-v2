import React from 'react';
import tools from './tools-data.js';

const Tools = (props) => (
    <div role="grid">
        {tools.map(tool => (
            <div role="gridcell">{tool.name}</div>
        ))}
    </div>
)

export default Tools;
