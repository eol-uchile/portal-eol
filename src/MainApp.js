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
import { BlogPage } from './Pages/BlogPage';
import { WePage } from './Pages/WePage';
import { LanguageProvider } from './Extras/Language/LanguageProvider';
import { PlatformPage } from './Pages/PlatformPage';
import { TopBarComponent } from './Content/TopBar/TopBarComponent';
import { ArticleComponent } from './Content/Blog/ArticleComponent';

export const MainApp = () => {

    return (
        <LanguageProvider>
            <Router>
                <TopBarComponent />
                <NavbarComponent />
                <div className="">
                    <Switch>
                        <Route exact path="/home" component={ HomePage } />
                        <Route exact path="/platform" component={ PlatformPage } />
                        <Route exact path="/projects" component={ ProjectsPage } />
                        <Route exact path="/blog" component={ BlogPage } />
                        <Route exact path="/blog/:article_id" component={ ArticleComponent } />
                        <Route exact path="/we" component={ WePage } />
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <FooterComponent />
            </Router>
        </LanguageProvider>
    )
}