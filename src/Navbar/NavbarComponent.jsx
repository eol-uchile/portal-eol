import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import './navbar.css';

export const NavbarComponent = () => {
    return (
        <Navbar 
            bg="transparent" 
            variant="light" 
            collapseOnSelect 
            expand="lg"
            className="mb-3 px-lg-5"
        >
            <NavLink className="navbar-brand" to="/">
                <img 
                    src="/images/logo-eol.svg" 
                    alt="Oficina de Educación Online Universidad de Chile" 
                    className="img-fluid"
                />
            </NavLink>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <NavLink className="nav-link" to="/home">
                        <FormattedMessage
                            id="navbar.home"
                            defaultMessage="Inicio"
                        />
                    </NavLink>
                    <NavLink className="nav-link" to="/platform">
                        <FormattedMessage
                            id="navbar.platform"
                            defaultMessage="Plataforma"
                        />
                    </NavLink>
                    <NavLink className="nav-link" to="/projects">
                        <FormattedMessage
                            id="navbar.projects"
                            defaultMessage="Proyectos"
                        />
                    </NavLink>
                    <NavLink className="nav-link" to="/support">
                        <FormattedMessage
                            id="navbar.teaching_support"
                            defaultMessage="Apoyo Docente"
                        />
                    </NavLink>
                    <NavLink className="nav-link" to="/oeo">
                        <FormattedMessage
                            id="navbar.we"
                            defaultMessage="Nosotros"
                        />
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
