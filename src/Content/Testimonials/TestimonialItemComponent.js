import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Card } from 'react-bootstrap';

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
                <Card.Img className="m-2" variant="top" src={ img } />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{ name }</Card.Title>
                    <Card.Subtitle className="mb-2 text-uppercase">{ position }</Card.Subtitle>
                    <div className="mt-auto">
                        <Card.Text>{ text }</Card.Text>
                        <Button 
                            className="show-more"
                            onClick={handleModal}
                        >
                            <FormattedMessage id="testimonials.showmore" />
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
