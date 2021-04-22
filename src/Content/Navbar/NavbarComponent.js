import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { scrollToTop } from '../../Extras/ScrollToTopButton/scrolltop';
import { MenuList } from './MenuList';

import './navbar.css';

export const NavbarComponent = () => {
    const [menuState, setMenuState] = useState(false);
    const toggleMenuState = (scrollFlag) => {
        setMenuState(!menuState);
        if(scrollFlag) scrollToTop();
    }
    return (
        <Navbar 
            bg="light" 
            collapseOnSelect 
            expand="lg"
            className="py-2 px-lg-5"
            // fixed="top"
        >
            <NavLink className="navbar-brand mx-lg-auto" to="/">
                <img 
                    src="/images/logo-eol.svg" 
                    alt="Oficina de Educación Online Universidad de Chile" 
                    className="img-fluid animate__animated animate__fadeInDown"
                />
            </NavLink>
            <div 
                className={ menuState ? "button-menu active" : "button-menu animate__animated animate__tada" } 
                onClick={() => toggleMenuState(false)} 
            >
                <span className="top"></span>
                <span className="middle"></span>
                <span className="bottom"></span>
            </div>
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
