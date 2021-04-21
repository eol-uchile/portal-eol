import React from 'react';
import { Carousel } from 'react-bootstrap';
import './header.css';

export const HeaderComponent = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/images/header_1.jpg"
                alt="Header 1"
                />
                <Carousel.Caption className="animate__animated animate__fadeInLeft">
                    <span className="caption-left">
                        <strong>Evolucionamos</strong>
                        <br/>
                        de <strong>acuerdo</strong> a las
                        <br/>
                        <strong>necesidades</strong>
                        <br/>
                        <strong>pedagógicas</strong>
                    </span>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/images/header_2.jpg"
                alt="Header 2"
                />
                <Carousel.Caption className="animate__animated animate__fadeInRight">
                    <span className="caption-right">
                        <strong>Plataforma</strong> de <strong>gestión</strong>
                        <br/>
                        del <strong>aprendizaje</strong> de la
                        <br/>
                        <strong>Universidad</strong> de <strong>Chile</strong>
                    </span>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
