import React from 'react';
import { FunctionalitiesListComponent } from './FunctionalitiesListComponent';
import { FormattedMessage } from 'react-intl';
import './functionalities.css';

export const FunctionalitiesComponent = () => {
    return (
        <section id="functionalities">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <h2 className="content-header animate__animated animate__fadeInUp">
                            <FormattedMessage id="functionalities.header" />
                        </h2>
                    </div>
                    <div className="col-12">
                        <p className="text-muted pt-2 animate__animated animate__fadeInUp">
                            <FormattedMessage id="functionalities.desc" />
                        </p>
                    </div>
                    <div className="content-info text-justify col-12 animate__animated animate__fadeIn">
                        <FunctionalitiesListComponent />
                    </div>
                </div>
            </div>
        </section>
    )
}
