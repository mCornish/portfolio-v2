import React from 'react';
import './Blog.css';
import {mixpanel} from './App';


const handleClick = () => {
    mixpanel.track('Blog CTA Click');
}

const content = () => (
    <div className="excerpt">
        <p>I remember the moment I felt like I <em>might</em> actually belong. Before that moment, I was never fully aware of the importance of community in web development. For years, I was just a web developer; after that moment, I was part of the web development community.</p>
        <a role="button" href="http://devstory.mikecornish.me/posts/chapter-5" target="_blank" onClick={handleClick}>Explore My Story</a>
    </div>
);


export default function(props) {
    return (
        <section id="story" className="blog-post">
            <h2 className="blog-post__chapter">Chapter 5 <span className="blog-post__title">The New Kid (Again)</span></h2>
            <h3 className="blog-post__subtitle">Remembering How to Be a <span className="blog-post__highlight">Web Developer</span></h3>
            {content()}
        </section>
    );
}
