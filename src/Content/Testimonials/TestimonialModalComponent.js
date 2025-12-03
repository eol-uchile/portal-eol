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
                <img src="/images/testimonials/doble_quotation.svg" alt="" className='double-quotation'/>
                <div className='d-flex justify-content-end'>
                    <Button className="close-button" variant="primary" onClick={handleClose}>
                        X
                    </Button>
                </div>
      
                <Container>
                    <Row>
                        <Col lg={6} className="modal-col pl-5 pr-4">
                            <p className="text-start">{ text }</p>
                        </Col>
                        <Col lg={6} className="modal-col text-start">
                            <div className='text-center'>
                                <img className="img-fluid  mb-4" src={ img } alt={ name }/>
                                <h4 className="text-center pt-3 text-uppercase">
                                    {name}
                                    </h4>
                                <p className="text-center subtitle">{ position }</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    )
}
