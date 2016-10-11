import React from 'react';
import SocialIcon from './SocialIcon';
import './SocialIcons.css';


const icons = [
{
    "type": "codepen",
    "url": "https://codepen.io/mCornish/"
},
{
    "type": "github",
    "url": "https://github.com/mCornish"
},
{
    "type": "twitter",
    "url": "https://twitter.com/MikeWCornish"
}
]

export default function({theme, modifier}) {
    return (
        <div className={`social-icons is-${theme} social-icons--${modifier}`}>
            {icons.map(icon => 
                <SocialIcon type={icon.type} url={icon.url} />
            )}
        </div>
    );
}
