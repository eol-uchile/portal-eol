import React from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

export const TestimonialModalComponent = ( {showModal, data, setModalData} ) => {
    const handleClose = () => setModalData({
        showModal: false,
        data: {
            name: '',
            position: '',
            text: '',
            img: ''
        }
    });
    const { name, position, text, img } = data;
    return (
        <Modal 
            show={showModal} 
            onHide={handleClose}
            size="lg"
            centered
            className="testimonialModal"
        >
            <Modal.Body>
                <h4 className="text-center pt-3">
                    <FormattedMessage id="testimonials.modal.header" values={{name:name}} />
                </h4>
                <p className="text-center text-uppercase subtitle">{ position }</p>
                <Container>
                    <Row>
                        <Col lg={6} className="modal-col">
                            <img className="img-fluid" src={ img } alt={ name }/>
                        </Col>
                        <Col lg={6} className="modal-col">
                            <p className="text-justify">
                                { text }
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    <FormattedMessage id="testimonials.modal.close" />
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
