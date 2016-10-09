import React from 'react';
import tools from './tools-data.js';
import './Tools.css';

export default function Tools({setActive, clearActive}) {
    return (
        <div className="tools">
            <h2 className="text-center">My Tools</h2>
            <div role="grid">
                {tools.map(tool => (
                    <div 
                        role="gridcell" 
                        className="tool-icon" 
                        onMouseEnter={setActive.bind(null, tool.name)} 
                        onMouseLeave={clearActive} 
                        key={tool.id}
                    >
                        {tool.icon ? tool.icon() : tool.name}
                    </div>
                ))}
            </div>
        </div>
    );
}
