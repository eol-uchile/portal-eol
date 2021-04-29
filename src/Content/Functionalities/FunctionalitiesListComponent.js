import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

export const FunctionalitiesListComponent = () => {
    return (
        <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <div className="card-title">
                        <span className="toggle-arrow"><i className="fas fa-chevron-right"></i></span>
                        <i className="fas fa-plus"></i>
                        <FormattedMessage id="functionalities.list.cert.title" />
                    </div>
                    <Accordion.Collapse eventKey="0">
                        <>
                            <FormattedMessage id="functionalities.list.cert.desc" />
                        </>
                    </Accordion.Collapse>
                </Accordion.Toggle>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    <div className="card-title">
                        <span className="toggle-arrow"><i className="fas fa-chevron-right"></i></span>
                        <i className="fas fa-plus"></i>
                        <FormattedMessage id="functionalities.list.scorm.title" />
                        
                    </div>
                    <Accordion.Collapse eventKey="1">
                        <>
                            <FormattedMessage id="functionalities.list.scorm.desc" />
                        </>
                    </Accordion.Collapse>
                </Accordion.Toggle>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                    <div className="card-title">
                        <span className="toggle-arrow"><i className="fas fa-chevron-right"></i></span>
                        <i className="fas fa-plus"></i>
                        <FormattedMessage id="functionalities.list.lti.title" />                        
                    </div>
                    <Accordion.Collapse eventKey="2">
                        <>
                        <FormattedMessage id="functionalities.list.lti.desc" />
                        </>
                    </Accordion.Collapse>
                </Accordion.Toggle>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                    <div className="card-title">
                        <span className="toggle-arrow"><i className="fas fa-chevron-right"></i></span>
                        <i className="fas fa-plus"></i>
                        <FormattedMessage id="functionalities.list.invideoquiz.title" /> 
                    </div>
                    <Accordion.Collapse eventKey="3">
                        <>
                        <FormattedMessage id="functionalities.list.invideoquiz.desc" />
                        </>
                    </Accordion.Collapse>
                </Accordion.Toggle>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                    <div className="card-title">
                        <span className="toggle-arrow"><i className="fas fa-chevron-right"></i></span>
                        <i className="fas fa-plus"></i>
                        <FormattedMessage id="functionalities.list.forum.title" /> 
                    </div>
                    <Accordion.Collapse eventKey="4">
                        <>
                        <FormattedMessage id="functionalities.list.forum.desc" /> 
                        </>
                    </Accordion.Collapse>
                </Accordion.Toggle>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="5">
                    <div className="card-title">
                        <span className="toggle-arrow"><i className="fas fa-chevron-right"></i></span>
                        <i className="fas fa-plus"></i>
                        <FormattedMessage id="functionalities.list.ucursos.title" /> 
                    </div>
                    <Accordion.Collapse eventKey="5">
                        <>
                        <FormattedMessage id="functionalities.list.ucursos.desc" /> 
                        </>
                    </Accordion.Collapse>
                </Accordion.Toggle>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="6">
                    <div className="card-title">
                        <span className="toggle-arrow"><i className="fas fa-chevron-right"></i></span>
                        <i className="fas fa-plus"></i>
                        <FormattedMessage id="functionalities.list.uchile.title" /> 
                    </div>
                    <Accordion.Collapse eventKey="6">
                        <>
                        <FormattedMessage id="functionalities.list.uchile.desc" /> 
                        </>
                    </Accordion.Collapse>
                </Accordion.Toggle>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="7">
                    <div className="card-title">
                        <span className="toggle-arrow"><i className="fas fa-chevron-right"></i></span>
                        <i className="fas fa-plus"></i>
                        <FormattedMessage id="functionalities.list.gobpass.title" /> 
                    </div>
                    <Accordion.Collapse eventKey="7">
                        <>
                        <FormattedMessage id="functionalities.list.gobpass.desc" /> 
                        </>
                    </Accordion.Collapse>
                </Accordion.Toggle>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="8">
                    <div className="card-title">
                        <span className="toggle-arrow"><i className="fas fa-chevron-right"></i></span>
                        <i className="fas fa-plus"></i>
                        <FormattedMessage id="functionalities.list.googledocs.title" /> 
                    </div>
                    <Accordion.Collapse eventKey="8">
                        <>
                        <FormattedMessage id="functionalities.list.googledocs.desc" /> 
                        </>
                    </Accordion.Collapse>
                </Accordion.Toggle>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="9">
                    <div className="card-title">
                        <span className="toggle-arrow"><i className="fas fa-chevron-right"></i></span>
                        <i className="fas fa-plus"></i>
                        <FormattedMessage id="functionalities.list.youtube.title" /> 
                    </div>
                    <Accordion.Collapse eventKey="9">
                        <>
                        <FormattedMessage id="functionalities.list.youtube.desc" /> 
                        </>
                    </Accordion.Collapse>
                </Accordion.Toggle>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="10">
                    <div className="card-title">
                        <span className="toggle-arrow"><i className="fas fa-chevron-right"></i></span>
                        <i className="fas fa-plus"></i>
                        <FormattedMessage id="functionalities.list.zoom.title" /> 
                    </div>
                    <Accordion.Collapse eventKey="10">
                        <>
                        <FormattedMessage id="functionalities.list.zoom.desc" /> 
                        </>
                    </Accordion.Collapse>
                </Accordion.Toggle>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="11">
                    <div className="card-title">
                        <span className="toggle-arrow"><i className="fas fa-chevron-right"></i></span>
                        <i className="fas fa-plus"></i>
                        <FormattedMessage id="functionalities.list.sence.title" /> 
                    </div>
                    <Accordion.Collapse eventKey="11">
                        <>
                        <FormattedMessage id="functionalities.list.sence.desc" /> 
                        </>
                    </Accordion.Collapse>
                </Accordion.Toggle>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="12">
                    <div className="card-title">
                        <span className="toggle-arrow"><i className="fas fa-chevron-right"></i></span>
                        <i className="fas fa-plus"></i>
                        <FormattedMessage id="functionalities.list.perusall.title" /> 
                    </div>
                    <Accordion.Collapse eventKey="12">
                        <>
                        <FormattedMessage id="functionalities.list.perusall.desc" /> 
                        </>
                    </Accordion.Collapse>
                </Accordion.Toggle>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="13">
                    <div className="card-title">
                        <span className="toggle-arrow"><i className="fas fa-chevron-right"></i></span>
                        <i className="fas fa-plus"></i>
                        <FormattedMessage id="functionalities.list.payment.title" /> 
                    </div>
                    <Accordion.Collapse eventKey="13">
                        <>
                        <FormattedMessage id="functionalities.list.payment.desc" /> 
                        </>
                    </Accordion.Collapse>
                </Accordion.Toggle>
            </Card>
            
        </Accordion>
    )
}
