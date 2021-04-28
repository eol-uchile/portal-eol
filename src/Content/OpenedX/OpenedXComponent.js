import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import "./openedx.css";

export const OpenedXComponent = () => {
    const [visible, setVisible] = useState(false);
    const handleVisible = () => setVisible(true);
    return (
        <section id="openedx">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <h2 className="content-header animate__animated animate__fadeInUp">
                            <FormattedMessage id="openedx.header" />
                        </h2>
                    </div>
                    <div className="col-12">
                        <p className="text-muted pt-2 animate__animated animate__fadeInUp">
                            <FormattedMessage id="openedx.desc" /> (<a href="https://open.edx.org/" target="_blank" rel="noreferrer">https://open.edx.org/</a>)
                        </p>
                    </div>
                    <div className="content-info col-12">
                        <p>
                            <FormattedMessage id="openedx.content.one" />
                        </p>
                        <p>
                            <FormattedMessage id="openedx.content.two" />
                        </p>
                        { 
                            !visible && (
                                <Button 
                                    className="show-more"
                                    onClick={ handleVisible }
                                >
                                    <FormattedMessage id="openedx.content.showmore" />
                                </Button>
                            )
                        }
                    </div>
                    {
                        visible && (
                            <>
                                <div className="col-12 animate__animated animate__fadeInUp">
                                    <p>
                                        <FormattedMessage id="openedx.content.three" />
                                    </p>
                                </div>
                                <div className="col-md-6 animate__animated animate__fadeInLeft">
                                    <Card className="h-100 shadow">
                                        <Card.Body>
                                            <Card.Title>LMS (Learning Management System)</Card.Title>
                                            <Card.Text>
                                                <FormattedMessage id="openedx.content.lms" />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-md-6 animate__animated animate__fadeInRight">
                                    <Card className="h-100 shadow">
                                        <Card.Body>
                                            <Card.Title>CMS (Content Management System)</Card.Title>
                                            <Card.Text>
                                                <FormattedMessage id="openedx.content.cms" />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </section>
    )
}
