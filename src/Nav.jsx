import React from 'react';
import './Nav.css';
import $ from 'jquery';
import Logo from './Logo';

const _handleScroll = () => {
    const scrollPos = $(document).scrollTop();
    if ($(window).scrollTop() + $(window).height() === $(document).height()) {
        $('nav a').removeClass('is-active');
        $('nav a:last-child').addClass('is-active');
    } else {
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
    }    
};

const _smoothScroll = e => {
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
        $(document).on('scroll', _handleScroll);
    });
};

const _handleClick = e => {
    $('nav a').removeClass('is-active');
    $(e.target).addClass('is-active');
    _smoothScroll(e);
};

$(document).on('scroll', _handleScroll);
const Nav = () =>
    <nav>
        <Logo />
        <a href="#about" onClick={_handleClick}>About Me</a>
        <a href="#story" onClick={_handleClick}>My Story</a>
        <a href="#experience" onClick={_handleClick}>My Experience</a>
        <a href="#contact" onClick={_handleClick}>Contact Me</a>
    </nav>

export default Nav;
