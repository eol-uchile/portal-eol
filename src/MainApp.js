import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { NavbarComponent } from './Content/Navbar/NavbarComponent';
import { FooterComponent } from './Content/Footer/FooterComponent';
import { HomePage } from './Pages/HomePage';
import { ProjectsPage } from './Pages/ProjectsPage';
import { WePage } from './Pages/WePage';
import { ScrollToTopButtonComponent } from './Extras/ScrollToTopButton/ScrollToTopButtonComponent';
import { LanguageProvider } from './Extras/Language/LanguageProvider';
import { LanguageSelectorComponent } from './Extras/Language/LanguageSelectorComponent';

export const MainApp = () => {

    return (
        <LanguageProvider>
            <Router>
                <LanguageSelectorComponent />
                <NavbarComponent />
                <div className="">
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
        </LanguageProvider>
    )
}