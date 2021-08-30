import React from 'react';
import { FormattedMessage } from 'react-intl';

export const ProjectItem = ({project, side="img-left"}) => {
    return (
        <div className="row py-4 px-3">
            <div className= {side !== "img-left" ? "col-md-5 col-lg-6 order-lg-12" : "col-md-5 col-lg-6"} data-aos="fade-up" data-aos-duration="1000">
                <img 
                    src={project.image}
                    alt={project.name} 
                    className="img-fluid"
                />
            </div>
            <div className="col-md-7 col-lg-6 py-3 py-md-0" data-aos="fade-up" data-aos-duration="1000">
                <h3 className="mb-4 text-left"><FormattedMessage id="projects.project" />: {project.name}</h3>
                <ul>
                    { project.org && (
                        <li>
                            <strong>
                                <FormattedMessage id="projects.org" />:
                            </strong>
                            {project.org}
                        </li>
                    ) }
                    { project.tier && (
                        <li>
                            <strong>
                                <FormattedMessage id="projects.tier" />:
                            </strong>
                            {project.tier}
                        </li>
                    ) }
                    { project.year && (
                        <li>
                            <strong>
                                <FormattedMessage id="projects.year" />:
                            </strong>
                            {project.year}
                        </li>
                    ) }
                    { project.description && (
                        <li>
                            <strong>
                                <FormattedMessage id="projects.description" />:
                            </strong>
                            {project.description}
                        </li>
                    ) }
                    { project.courses && (
                        <li>
                            <strong>
                                <FormattedMessage id="projects.courses" />:
                            </strong>
                            {project.courses}
                        </li>
                    ) }
                    { project.participants && (
                        <li>
                            <strong>
                                <FormattedMessage id="projects.participants" />:
                            </strong>
                            {project.participants}
                        </li>
                    ) }
                </ul>
            </div>
        </div>
    )
}