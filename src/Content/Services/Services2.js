import React from 'react';
import { FormattedMessage } from 'react-intl';

export const Services2 = () => {
    return (
        <div className="row mt-5 pt-4">
            <div className="col-12">
                <h2 className="content-header" data-aos="fade-up">
                    <FormattedMessage id="services_2.header" />
                </h2>
            </div>
            <div className="col-12">
                <p className="pt-2" data-aos="fade-up">
                    <FormattedMessage id="services_2.desc" />
                </p>
            </div>

            <div className="content-info col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="1000">
                <img 
                    src="/images/services_2_1.svg" 
                    alt="Servicios 1" 
                    className="img-fluid"
                />
                <p className="title mt-4 px-3">
                    <FormattedMessage id="services_2.1.title" />
                </p>
                <p className="info mt-1 px-1">
                    <FormattedMessage id="services_2.1.info" /> (<a href="https://www.rutadigital.cl/" target="_blank" rel="noreferrer">https://www.rutadigital.cl/</a>).
                </p>
            </div>
            <div className="content-info col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="1000">
                <img 
                    src="/images/services_2_2.svg" 
                    alt="Servicios 2" 
                    className="img-fluid"
                />
                <p className="title mt-4 px-3">
                    <FormattedMessage id="services_2.2.title" />
                </p>
                <p className="info mt-1 px-1">
                    <FormattedMessage id="services_2.2.info" /> (<a href="http://dgd.uchile.cl" target="_blank" rel="noreferrer">http://dgd.uchile.cl</a>).
                </p>
            </div>
            <div className="content-info col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="1000">
                <img 
                    src="/images/services_2_3.svg" 
                    alt="Servicios 3" 
                    className="img-fluid"
                />
                <p className="title mt-4 px-3">
                    <FormattedMessage id="services_2.3.title" />
                </p>
                <p className="info mt-1 px-1">
                    <FormattedMessage id="services_2.3.info" />
                </p>
            </div>
            <div className="content-info col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="1000">
                <img 
                    src="/images/services_2_4.svg" 
                    alt="Servicios 4" 
                    className="img-fluid"
                />
                <p className="title mt-4 px-3">
                    <FormattedMessage id="services_2.4.title" />
                </p>
                <p className="info mt-1 px-1">
                    <FormattedMessage id="services_2.4.info" />
                </p>
            </div>
        </div>
    )
}
