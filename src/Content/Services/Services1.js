import React from 'react';
import { FormattedMessage } from 'react-intl';

export const Services1 = () => {
    return (
        <div className="row">
            <div className="col-12">
                <h2 className="content-header" data-aos="fade-up">
                    <FormattedMessage id="services_1.header" />
                </h2>
            </div>
            <div className="col-12">
                <p className="pt-2" data-aos="fade-up">
                    <FormattedMessage id="services_1.desc" />
                </p>
            </div>

            <div className="content-info col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="1000">
                <img 
                    src="/images/services_1_1.svg" 
                    alt="Servicios 1" 
                    className="img-fluid"
                />
                <p className="title mt-4 px-3">
                    <FormattedMessage id="services_1.1.title" />
                </p>
                <p className="info mt-1 px-1">
                    <FormattedMessage id="services_1.1.info" />
                </p>
            </div>
            <div className="content-info col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="1000">
                <img 
                    src="/images/services_1_2.svg" 
                    alt="Servicios 2" 
                    className="img-fluid"
                />
                <p className="title mt-4 px-3">
                    <FormattedMessage id="services_1.2.title" />
                </p>
                <p className="info mt-1 px-1">
                    <FormattedMessage id="services_1.2.info" />
                </p>
            </div>
            <div className="content-info col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="1000">
                <img 
                    src="/images/services_1_3.svg" 
                    alt="Servicios 3" 
                    className="img-fluid"
                />
                <p className="title mt-4 px-3">
                    <FormattedMessage id="services_1.3.title" />
                </p>
                <p className="info mt-1 px-1">
                    <FormattedMessage id="services_1.3.info" />
                </p>
            </div>
            <div className="content-info col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="1000">
                <img 
                    src="/images/services_1_4.svg" 
                    alt="Servicios 4" 
                    className="img-fluid"
                />
                <p className="title mt-4 px-3">
                    <FormattedMessage id="services_1.4.title" />
                </p>
                <p className="info mt-1 px-1">
                    <FormattedMessage id="services_1.4.info" />
                </p>
            </div>
        </div>
    )
}
