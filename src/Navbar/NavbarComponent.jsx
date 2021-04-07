import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
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
            <Navbar.Brand href="/">
                <img 
                    src="/images/logo-eol.svg" 
                    alt="Oficina de Educación Online Universidad de Chile" 
                    className="img-fluid"
                />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <NavLink className="nav-link" to="/home">Inicio</NavLink>
                    <NavLink className="nav-link" to="/platform">Plataforma</NavLink>
                    <NavLink className="nav-link" to="/projects">Proyectos</NavLink>
                    <NavLink className="nav-link" to="/support">Apoyo Docente</NavLink>
                    <NavLink className="nav-link" to="/oeo">Nosotros</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
