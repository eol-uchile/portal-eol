import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { NavbarComponent } from './Navbar/NavbarComponent';
import { FooterComponent } from './Footer/FooterComponent';
import { HomePage } from './Pages/HomePage';
import { ProjectsPage } from './Pages/ProjectsPage';

export const MainApp = () => {
    return (
        <>
            <Router>
                <NavbarComponent />
                <div className="container my-5 pt-5">
                    <Switch>
                        <Route exact path="/home" component={ HomePage } />
                        <Route exact path="/projects" component={ ProjectsPage } />
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <FooterComponent />
            </Router>
        </>
    )
}