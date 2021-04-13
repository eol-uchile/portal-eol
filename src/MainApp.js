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
import { ScrollToTopButtonComponent } from './Extras/ScrollToTopButton/ScrollToTopButtonComponent';
import { WePage } from './Pages/WePage';

export const MainApp = () => {
    return (
        <>
            <Router>
                <NavbarComponent />
                <div className="mt-5 pt-4">
                    <Switch>
                        <Route exact path="/home" component={ HomePage } />
                        <Route exact path="/projects" component={ ProjectsPage } />
                        <Route exact path="/we" component={ WePage } />
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <FooterComponent />
                <ScrollToTopButtonComponent />
            </Router>
        </>
    )
}