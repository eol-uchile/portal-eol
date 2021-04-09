import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

import './navbar.css';

export const NavbarComponent = () => {
    const [menuState, setMenuState] = useState(false);
    const toggleMenuState = () => {
        setMenuState(!menuState);
    }
    return (
        <Navbar 
            bg="light" 
            collapseOnSelect 
            expand="lg"
            className="py-2 px-lg-5"
            fixed="top"
        >
            <NavLink className="navbar-brand mx-lg-auto" to="/">
                <img 
                    src="/images/logo-eol.svg" 
                    alt="Oficina de Educación Online Universidad de Chile" 
                    className="img-fluid"
                />
            </NavLink>
            <div 
                className={ menuState ? "button-menu active" : "button-menu" } 
                onClick={toggleMenuState} 
            >
                <span className="top"></span>
                <span className="middle"></span>
                <span className="bottom"></span>
            </div>
            <div 
                className="overlay"
                className={ menuState ? "overlay open" : "overlay" } 
            >
                <nav className="overlay-menu">
                    <ul>
                        <li>
                            <NavLink onClick={toggleMenuState} className="nav-link" to="/home">
                                <FormattedMessage
                                    id="navbar.home"
                                    defaultMessage="Inicio"
                                />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={toggleMenuState} className="nav-link" to="/platform">
                                <FormattedMessage
                                    id="navbar.platform"
                                    defaultMessage="Plataforma"
                                />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={toggleMenuState} className="nav-link" to="/projects">
                                <FormattedMessage
                                    id="navbar.projects"
                                    defaultMessage="Proyectos"
                                />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={toggleMenuState} className="nav-link" to="/support">
                                <FormattedMessage
                                    id="navbar.teaching_support"
                                    defaultMessage="Apoyo Docente"
                                />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={toggleMenuState} className="nav-link" to="/oeo">
                                <FormattedMessage
                                    id="navbar.we"
                                    defaultMessage="Nosotros"
                                />
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </Navbar>
    )
}
