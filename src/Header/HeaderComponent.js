import React from 'react';
import { Carousel } from 'react-bootstrap';

export const HeaderComponent = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://eol.uchile.cl/static/eol-uchile-2020/images/banner/banner00.897d60bec44d.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
