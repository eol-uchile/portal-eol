import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export const MenuList = ({toggleMenuState}) => {
    return (
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
                <NavLink onClick={toggleMenuState} className="nav-link" to="/teaching">
                    <FormattedMessage
                        id="navbar.teaching"
                        defaultMessage="Formación Docente"
                    />
                </NavLink>
            </li>
            <li>
                <NavLink onClick={toggleMenuState} className="nav-link" to="/blog">
                    <FormattedMessage
                        id="navbar.teaching_support"
                        defaultMessage="Blog"
                    />
                </NavLink>
            </li>
            <li>
                <NavLink onClick={toggleMenuState} className="nav-link" to="/we">
                    <FormattedMessage
                        id="navbar.we"
                        defaultMessage="Nosotros"
                    />
                </NavLink>
            </li>
        </ul>
    )
}
