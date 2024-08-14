import React from 'react';
import { Card } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import "./platforms.css";

export const ManagedPlatformsComponent = () => {
    return (
        <section
            id="managedplatforms"
            style={{backgroundImage: "url(/images/nodos_background.png)" }}
        >
            <div className="container text-center">
                <div className="row">
                    <div className="col-12 mb-3">
                        <h2 className="content-header" data-aos="fade-up">
                            <FormattedMessage id="mp.header" />
                        </h2>
                    </div>
                    <div className="content-info col-md-6 my-auto" data-aos="fade-right" data-aos-duration="1000">
                            <a className="mb-3" href="https://eol.uchile.cl/" target="_blank" rel="noreferrer">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>
                                            <span className="toggle-arrow"><i className="fas fa-external-link-alt"></i></span>
                                            <i className="fas fa-link"></i>
                                            <FormattedMessage id="mp.eol.title" />
                                        </Card.Title>
                                    </Card.Header>
                                </Card>
                            </a>
                            <a className="mb-3" href="https://open.uchile.cl/" target="_blank" rel="noreferrer">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>
                                            <span className="toggle-arrow"><i className="fas fa-external-link-alt"></i></span>
                                            <i className="fas fa-link"></i>
                                            <FormattedMessage id="mp.open.title" />
                                        </Card.Title>
                                    </Card.Header>
                                </Card>
                            </a>
                            <a className="mb-3" href="https://uabierta.uchile.cl/" target="_blank" rel="noreferrer">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>
                                            <span className="toggle-arrow"><i className="fas fa-external-link-alt"></i></span>
                                            <i className="fas fa-link"></i>
                                            <FormattedMessage id="mp.uabierta.title" />
                                        </Card.Title>
                                    </Card.Header>
                                </Card>
                            </a>
                            <a className="mb-3" href="https://cmmeduformacion.uchile.cl/" target="_blank" rel="noreferrer">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>
                                            <span className="toggle-arrow"><i className="fas fa-external-link-alt"></i></span>
                                            <i className="fas fa-link"></i>
                                            <FormattedMessage id="mp.cmmedu.title" />
                                        </Card.Title>
                                    </Card.Header>
                                </Card>
                            </a>
                            <a className="mb-3" href="https://virtual-labx.uchile.cl/" target="_blank" rel="noreferrer">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>
                                            <span className="toggle-arrow"><i className="fas fa-external-link-alt"></i></span>
                                            <i className="fas fa-link"></i>
                                            <FormattedMessage id="mp.virtuallabx.title" />
                                        </Card.Title>
                                    </Card.Header>
                                </Card>
                            </a>
                            <a className="mb-3" href="https://cajalosandes.virtual-labx.cl/" target="_blank" rel="noreferrer">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>
                                            <span className="toggle-arrow"><i className="fas fa-external-link-alt"></i></span>
                                            <i className="fas fa-link"></i>
                                            <FormattedMessage id="mp.virtuallabx-caja.title" />
                                        </Card.Title>
                                    </Card.Header>
                                </Card>
                            </a>
                    </div>
                    <div className="content-info col-md-6 my-auto" data-aos="fade-up" data-aos-duration="1000">
                        <img src="/images/platforms.png" alt="platforms" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    )
}
