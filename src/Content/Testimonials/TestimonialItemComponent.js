import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Card, Row, Col } from 'react-bootstrap';

export const TestimonialItemComponent = ({ name, position, text, img, setModalData }) => {
    const handleModal = () => {
        setModalData({
            showModal: true,
            data: {
                name: name,
                position: position,
                text: text,
                img: img
            }
        });
    }

    return (
        <div className='item mx-auto'>
            <Card className="mx-4 mx-lg-1">
                <Card.Body className="d-flex flex-column mt-4">
                    <div>
                        <Card.Text>{ text }</Card.Text>
                        <Card.Link href="#"     className="show-more" onClick={handleModal}><FormattedMessage id="testimonials.showmore" /></Card.Link>
                    </div>
                    <Row className="mt-4 testimonial-user-data">
                        <Col xs={12} md={3} lg={3} className="pr-0" >
                            <Card.Img className="p-0" variant="bottom" src={ img }/>
                        </Col>
                        <Col xs={12} md={9} lg={9}>
                            <Card.Title className="text-uppercase">{ name }</Card.Title>
                            <Card.Subtitle className="mb-2">{ position }</Card.Subtitle>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}
