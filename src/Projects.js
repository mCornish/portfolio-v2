import React from 'react';
import projects from './projects-data.js';
import './Projects.css'


const _getThumbnail = project => {
    const getCodepenUrl = id => `https://codepen.io/oknoblich/pen/${id}/image/large.png`;
    return project.codepenId ? getCodepenUrl(project.codepenId) : project.thumbnail;
}

const _renderThumbnail = (project, i) => {
    if (_getThumbnail(project)) {
        return <img className="project__thumbnail" src={_getThumbnail(project)} alt={project.name} target="_blank" />;
    } else {
        return (<div className="project__placeholder"><span>Project Thumbnail {i + 1}</span></div>);
    }
};

const _getActiveClass = (project, activeTool) => {
    return project.tools.indexOf(activeTool) > -1 ? 'is-active' : 'is-inactive';
}

const _getLink = project => {
    const codepenBase = 'http://codepen.io/mCornish/full/';
    return project.codepenId ? codepenBase + project.codepenId : project.link;
}


const Projects = ({activeTool}) =>
        <div className="projects">
            <h2 className="text-center">My Projects</h2>
            <div role="grid">
                {projects.map((project, i) => (
                    <a role="gridcell" href={_getLink(project)} target="_blank" key={i} className={`project ${_getActiveClass(project, activeTool)}`}>
                        {_renderThumbnail(project, i)}
                        <div className="project__name">{project.name}</div>
                        <div className="project__shade"></div>
                    </a>
                ))}
            </div>
        </div>

export default Projects;
