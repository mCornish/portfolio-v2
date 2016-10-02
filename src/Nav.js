import React from 'react';
import './Nav.css';
import $ from 'jquery';

const Nav = (props) => {
    const handleScroll = () => {
        const scrollPos = $(document).scrollTop();
        $('nav a').each(function() {
            const $currLink = $(this);
            const $refEl = $( $currLink.attr('href') );
            if ($refEl.offset().top <= scrollPos + 200 && $refEl.offset().top + $refEl.height() > scrollPos) {
                $('nav a').removeClass('is-active');
                $currLink.addClass('is-active');
            } else {
                $currLink.removeClass('is-active');
            }
        });
    };

    const smoothScroll = e => {
        e.preventDefault();
        $(document).off('scroll');

        $('nav a').removeClass('is-active');
        $(e.target).addClass('is-active');

        const target = e.target.hash;
        //const menu = target;
        const $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function() {
            window.location.hash = target;
            $(document).on('scroll', handleScroll);
        });
    };

    const handleClick = e => {
        $('nav a').removeClass('is-active');
        $(e.target).addClass('is-active');
        smoothScroll(e);
    };

    return (
        <nav>
            <a href="#about" onClick={handleClick}>About Me</a>
            <a href="#story" onClick={handleClick}>My Story</a>
            <a href="#experience" onClick={handleClick}>My Experience</a>
            <a href="#contact" onClick={handleClick}>Contact Me</a>
        </nav>
    );
}

export default Nav;
