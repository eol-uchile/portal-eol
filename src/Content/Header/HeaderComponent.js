import React, { useContext } from 'react';
import { Carousel } from 'react-bootstrap';
import Parser from 'html-react-parser';
import { headers_data } from './data';
import './header.css';
import { getData } from '../../Extras/GetData/getData';
import { LanguageContext } from '../../Extras/Language/LanguageContext';

export const HeaderComponent = () => {
    const { language } = useContext(LanguageContext);
    const headers = getData({
        data: headers_data,
        language: language
    });
    return (
        <Carousel fade>

            { headers?.map( (header) => (
                <Carousel.Item key={header.url}>
                    <img
                    className="d-block w-100"
                    src={header.url}
                    alt="Header"
                    />
                    <Carousel.Caption className="animate__animated animate__fadeInLeft">
                        <span className="caption-left">
                            { Parser(header.title) }
                        </span>
                    </Carousel.Caption>
                </Carousel.Item>
            ) ) }
        </Carousel>
    )
}
