import React from 'react';
import { SeparatorTopComponent } from '../../Extras/Separators/SeparatorTopComponent';
import { FormattedMessage } from 'react-intl';
import './analytics.css';


export const AnalyticsComponent = () => {
    return (
        <section id="analytics">
            <div className="container main-container text-center">
                <div className="row">
                    <div className="col-12">
                        <h2 className="content-header animate__animated animate__fadeInUp">
                        <FormattedMessage id="analytics.header" />
                        </h2>
                    </div>
                    <div className="col-12">
                        <p className="text-muted pt-2 animate__animated animate__fadeInUp">
                        <FormattedMessage id="analytics.desc" />
                        </p>
                    </div>
                </div>
                <div className="row align-items-end">
                    <div className="col-md-6 animate__animated animate__fadeIn">
                        <img src="/images/analytics_1.svg" alt="graphic_1" className="img-fluid" />
                    </div>
                    <div className="col-md-6 animate__animated animate__fadeIn">
                        <img src="/images/analytics_2.svg" alt="graphic_2" className="img-fluid" />                        
                    </div>
                    <div className="disclaimer col-12 animate__animated animate__fadeIn mt-2">
                        <p>
                        <FormattedMessage id="analytics.disclaimer" /> 
                        </p>                      
                    </div>
                </div>
            </div>

            <SeparatorTopComponent />
        </section>
    )
}
