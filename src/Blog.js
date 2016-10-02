import React from 'react';
import './Blog.css';

const Blog = (props) => {
    const content = () => (
        <div className="excerpt">
            <p>Blog post excerpt content goes here.</p>
            <a role="button" href="http://blog.mikecornish.net" target="_blank">Read More</a>
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
