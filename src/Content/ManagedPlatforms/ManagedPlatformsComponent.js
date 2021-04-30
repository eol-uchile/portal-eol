import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import "./platforms.css";

export const ManagedPlatformsComponent = () => {
    return (
        <section id="managedplatforms">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12 mb-3">
                        <h2 className="content-header" data-aos="fade-up">
                            <FormattedMessage id="mp.header" />
                        </h2>
                    </div>
                    <div className="content-info col-md-6 my-auto" data-aos="fade-right" data-aos-duration="1000">
                        <ListGroup className="mt-3">
                            <a className="mb-3 shadow-lg text-left pl-2 rounded-right" href="https://eol.uchile.cl/" target="_blank" rel="noreferrer">
                                <ListGroup.Item>
                                    <FormattedMessage id="mp.eol.title" />
                                </ListGroup.Item>
                            </a>
                            <a className="mb-3 shadow-lg text-left pl-2 rounded-right" href="https://uabierta.uchile.cl/" target="_blank" rel="noreferrer">
                                <ListGroup.Item>
                                    <FormattedMessage id="mp.uabierta.title" />
                                </ListGroup.Item>
                            </a>
                            <a className="mb-3 shadow-lg text-left pl-2 rounded-right" href="https://cmmeduformacion.uchile.cl/" target="_blank" rel="noreferrer">
                                <ListGroup.Item>
                                    <FormattedMessage id="mp.cmmedu.title" />
                                </ListGroup.Item>
                            </a>
                            <a className="mb-3 shadow-lg text-left pl-2 rounded-right" href="https://eduonline.ing.uchile.cl/" target="_blank" rel="noreferrer">
                                <ListGroup.Item>
                                    <FormattedMessage id="mp.eduonline.title" />
                                </ListGroup.Item>
                            </a>
                            <a className="mb-3 shadow-lg text-left pl-2 rounded-right" href="https://virtual-labx.cl/" target="_blank" rel="noreferrer">
                                <ListGroup.Item>
                                    <FormattedMessage id="mp.virtuallabx.title" />
                                </ListGroup.Item>
                            </a>
                        </ListGroup>
                    </div>
                    <div className="content-info col-md-6 my-auto" data-aos="fade-left" data-aos-duration="1000">
                        <img src="https://icountryschool.cl/wp-content/uploads/2020/08/placeholder.png" alt="platforms" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    )
}
