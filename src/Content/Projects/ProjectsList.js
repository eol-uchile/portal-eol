import React, { useContext } from 'react';
import { LanguageContext } from '../../Extras/Language/LanguageContext';
import { getData } from '../../Extras/GetData/getData';
import { projects_data } from './data';
import "./projects.css";
import { ProjectItem } from './ProjectItem';
import { SeparatorTopComponent } from '../../Extras/Separators/SeparatorTopComponent';

export const ProjectsListComponent = () => {
    const { language } = useContext(LanguageContext);
    const projects = getData({
        data: projects_data,
        language: language
    });
    console.log(projects);
    return (
        <section 
            id="projectslist"
        >
            <div
                className="dark-background"
                style={{backgroundImage: "url(/images/nodos_background.png)" }}
            >
                <div className="container">
                    <ProjectItem project={projects[0]} />
                </div>
                <div className="container">
                    <ProjectItem project={projects[1]} side="img-right" />
                </div>
            </div>

            <div
                className="light-background"
            >
                <div className="container">
                    <ProjectItem project={projects[2]} />
                </div>
                <div className="container">
                    <ProjectItem project={projects[3]} side="img-right" />
                </div>
            </div>

            <div
                className="light2-background"
            >
                <div className="container">
                    <ProjectItem project={projects[4]} />
                </div>
                <div className="container">
                    <ProjectItem project={projects[5]} side="img-right" />
                </div>
                <div className="container">
                    <ProjectItem project={projects[6]} />
                </div>
            </div>
            <div
                className="dark-background mb-5"
                style={{backgroundImage: "url(/images/nodos_background.png)" }}
            >
                <div className="container">
                    <ProjectItem project={projects[7]} side="img-right" />
                </div>
                <div className="container">
                    <ProjectItem project={projects[8]} />
                </div>
                <div className="container">
                    <ProjectItem project={projects[9]} side="img-right" />
                </div>
                
            </div>
            <SeparatorTopComponent background="dark" />
        </section>
    )
}
