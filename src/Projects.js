import React from 'react';
import projects from './projects-data.js';
import './Projects.css'

const Projects = (props) => {
    const renderThumbnail = (project, i) => {
        if (project.thumbnail) {
            return <img className="project__thumbnail" src={project.thumbnail} alt={project.name} target="_blank" />;
        } else {
            return (<div className="project__placeholder"><span>Project Thumbnail {i + 1}</span></div>);
        }
    };

    const getActiveClass = project => {
        console.log(props.activeTool)
        return project.tools.indexOf(props.activeTool) > -1 ? 'is-active' : 'is-inactive';
    }

    return (
        <div className="projects">
            <h2 className="text-center">My Projects</h2>
            <div role="grid">
                {projects.map((project, i) => (
                    <a role="gridcell" href={project.link} key={i} className={`project ${getActiveClass(project)}`}>
                        {renderThumbnail(project, i)}
                        <div className="project__name">{project.name}</div>
                    </a>
                ))}
            </div>
        </div>
    );
}
export default Projects;
