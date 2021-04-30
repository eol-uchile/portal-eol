import React from 'react';
import { Card } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import "./platforms.css";

export const ManagedPlatformsComponent = () => {
    return (
        <section id="managedplatforms">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <h2 className="content-header" data-aos="fade-up">
                            <FormattedMessage id="mp.header" />
                        </h2>
                    </div>
                    <div className="content-info col-md-6" data-aos="fade-up" data-aos-duration="1000">
                        <a href="https://eol.uchile.cl/" target="_blank" rel="noreferrer">
                            <Card body className="h-100 shadow">
                                <div className="mt-auto">
                                    <img 
                                        src="/images/platforms_eol.png" 
                                        alt="EOL" 
                                        className="img-fluid"
                                    />
                                    <p className="mt-4 px-3">
                                        <FormattedMessage id="mp.eol.title" />
                                    </p>
                                </div>
                            </Card>
                        </a>
                    </div>
                    <div className="content-info col-md-6" data-aos="fade-up" data-aos-duration="1000">
                        <a href="https://eduonline.ing.uchile.cl/" target="_blank" rel="noreferrer">
                            <Card body className="h-100 shadow">
                                <div className="mt-auto">
                                    <img 
                                        src="/images/platforms_eduonline.png" 
                                        alt="EduOnline" 
                                        className="img-fluid"
                                    />
                                    <p className="mt-4 px-3">
                                        <FormattedMessage id="mp.eduonline.title" />
                                    </p>
                                </div>
                            </Card>
                        </a>
                    </div>
                    <div className="content-info col-md-6" data-aos="fade-up" data-aos-duration="1000">
                        <a href="https://uabierta.uchile.cl/" target="_blank" rel="noreferrer">
                            <Card body className="h-100 shadow">
                                <div className="mt-auto">
                                    <img 
                                        src="/images/platforms_uabierta.png" 
                                        alt="UAbierta" 
                                        className="img-fluid"
                                    />
                                    <p className="mt-4 px-3">
                                        <FormattedMessage id="mp.uabierta.title" />
                                    </p>
                                </div>
                            </Card>
                        </a>
                    </div>
                    <div className="content-info col-md-6" data-aos="fade-up" data-aos-duration="1000">
                        <a href="https://cmmeduformacion.uchile.cl/" target="_blank" rel="noreferrer">
                            <Card body className="h-100 shadow">
                                <div className="mt-auto">
                                    <img 
                                        src="/images/platforms_cmmedu.png" 
                                        alt="CMM Eduformación" 
                                        className="img-fluid"
                                    />
                                    <p className="mt-4 px-3">
                                        <FormattedMessage id="mp.cmmedu.title" />
                                    </p>
                                </div>
                            </Card>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
