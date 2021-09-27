import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import "./about.css";

export const AboutComponent = () => {
    return (
        <section id="about">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h2 className="content-header" data-aos="fade-up">
                            <FormattedMessage id="about.header" />
                        </h2>
                    </div>
                    <div className="col-md-6 mt-2" data-aos="fade-up" data-aos-duration="1000">
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title><FormattedMessage id="abouteol.header" /></Card.Title>
                                <Card.Text>
                                    <FormattedMessage id="abouteol.content" />
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to={`/we`}>
                                    <Button className="show-more"><FormattedMessage id="about.showmore" /></Button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div className="col-md-6 mt-2" data-aos="fade-up" data-aos-duration="1000">
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title><FormattedMessage id="openedx.header" /></Card.Title>
                                <Card.Text>
                                    <FormattedMessage id="openedx.content" />
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link  to={`/platform`}>
                                    <Button className="show-more"><FormattedMessage id="about.showmore" /></Button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
