import React from 'react';
import './Blog.css';

const Blog = (props) => {
    const content = () => (
        <div className="excerpt">
            <p>I remember the moment I felt like I might actually belong. Before that moment, I was never fully aware of the importance of community in web development. For years, I was just a web developer; after that moment, I was part of the web development community.</p>
            <a role="button" href="http://devstory.mikecornish.net/posts/chapter-5" target="_blank">Read More</a>
        </div>
    );

    return (
        <section id="story">
            <div className="blog-post">
                <h2>My Story</h2>
                {content()}
            </div>
        </section>
    );
}

export default Blog;
