import React from 'react';
import projects from './projects-data.js';

const Projects = (props) => (
    <div role="grid">
        {projects.map(project => (
            <a role="gridcell" href={project.link}>
                <img className="project__thumbnail" src={project.thumbnail} alt={project.name} target="_blank" />
                <div className="project__name">{project.name}</div>
            </a>
        ))}
    </div>
)

export default Projects;
