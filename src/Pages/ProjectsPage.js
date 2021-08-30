import React from 'react';
import { AboutProjectsComponent } from '../Content/AboutProjects/AboutProjectsComponent';
import { headers_projects } from '../Content/Header/data';
import { HeaderComponent } from '../Content/Header/HeaderComponent';
import { ProjectsListComponent } from '../Content/Projects/ProjectsList';

export const ProjectsPage = () => {
    return (
        <>
            <HeaderComponent headers_data = { headers_projects } />
            <AboutProjectsComponent />
            <ProjectsListComponent />
        </>
    )
}
