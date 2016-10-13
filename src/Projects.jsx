import React from 'react';
import projects from './projects-data.js';
import './Projects.css'
import {mixpanel} from './App'

const getThumbnail = project => {
    const getCodepenUrl = id => `https://codepen.io/oknoblich/pen/${id}/image/small.png`;
    return project.codepenId ? getCodepenUrl(project.codepenId) : project.thumbnail;
}

const renderThumbnail = (project, i) => {
    if (getThumbnail(project)) {
        return <img className="project__thumbnail" src={getThumbnail(project)} width="384" height="225" alt={project.name} target="_blank" />;
    } else {
        return (<div className="project__placeholder"><span>Project Thumbnail {i + 1}</span></div>);
    }
};

const getActiveClass = (project, activeTool) => {
    return project.tools.indexOf(activeTool) > -1 ? 'is-active' : 'is-inactive';
}

const getLink = project => {
    const codepenBase = 'http://codepen.io/mCornish/full/';
    return project.codepenId ? codepenBase + project.codepenId : project.link;
}

const handleClick = name => {
    mixpanel.track('Project Click', {
        'name': name
    });
}


export default function Projects({activeTool}) {
    return (
        <div className="projects">
            <h2 className="text-center">My Projects</h2>
            <div role="grid">
                {projects.map((project, i) => (
                    <a role="gridcell" href={getLink(project)} target="_blank" key={project.id} className={`project ${getActiveClass(project, activeTool)}`} onClick={handleClick.bind(null, project.name)}>
                        {renderThumbnail(project, i)}
                        <div className="project__name">{project.name}</div>
                        <div className="project__shade"></div>
                    </a>
                ))}
            </div>
        </div>
    );
}
