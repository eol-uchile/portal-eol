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
import { TeachingPage } from './Pages/TeachingPage';
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
                        <Route exact path="/home" component={HomePage} />
                        <Route exact path="/platform" component={PlatformPage} />
                        <Route exact path="/projects" component={ProjectsPage} />
                        <Route exact path="/teaching" component={TeachingPage} />
                        <Route exact path="/blog" component={BlogPage} />
                        <Route exact path="/blog/tags/:tag" component={BlogPage} />
                        <Route exact path="/blog/posts/:article_path" component={ArticleComponent} />
                        <Route exact path="/we" component={WePage} />
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <FooterComponent />
            </Router>
        </LanguageProvider>
    )
}
