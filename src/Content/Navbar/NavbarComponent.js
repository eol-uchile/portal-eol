import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { scrollToTop } from '../../Extras/ScrollToTopButton/scrolltop';
import { MenuList } from './MenuList';

import './navbar.css';

export const NavbarComponent = () => {
    const [menuState, setMenuState] = useState(false);
    const [scrolled, setScrolled] = useState('');
    const toggleMenuState = (scrollFlag) => {
        setMenuState(!menuState);
        if(scrollFlag) scrollToTop();
    }
    document.addEventListener("scroll", () => {
        if(window.pageYOffset > 15 && scrolled !== 'scrolled') {
            setScrolled('scrolled');
        } else if(window.pageYOffset <= 15 && scrolled !== '') {
            setScrolled('');
        }

    });
    return (
        <Navbar 
            bg="light" 
            collapseOnSelect 
            expand="lg"
            className="py-2 px-lg-5"
            // fixed="top"
        >
            <NavLink className="navbar-brand mx-lg-auto" to="/home">
                <img 
                    src="/images/logo-eol.svg" 
                    alt="Oficina de Educación Online Universidad de Chile" 
                    className="img-fluid"
                    data-aos="zoom-in"
                />
            </NavLink>
            <div 
                className={ menuState ? `button-menu active` : `button-menu ${scrolled}` } 
                onClick={() => toggleMenuState(false)} 
            >
                <span className="top"></span>
                <span className="middle"></span>
                <span className="bottom"></span>
            </div>
            <span 
                className={`text-menu ${scrolled}`}
                onClick={() => toggleMenuState(false)} 
            >
                MENÚ
            </span>
            <div 
                className={ menuState ? "overlay open" : "overlay" } 
            >
                <nav className="overlay-menu">
                    <MenuList toggleMenuState={() => toggleMenuState(true)} />
                </nav>
            </div>
        </Navbar>
    )
}
