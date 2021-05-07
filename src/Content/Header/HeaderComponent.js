import React, { useContext } from 'react';
import { Carousel } from 'react-bootstrap';
import Parser from 'html-react-parser';
import './header.css';
import { getData } from '../../Extras/GetData/getData';
import { LanguageContext } from '../../Extras/Language/LanguageContext';

export const HeaderComponent = ( { headers_data } ) => {
    const { language } = useContext(LanguageContext);
    const headers = getData({
        data: headers_data,
        language: language
    });
    const showControls = headers?.length > 1;
    return (
        <Carousel fade controls={showControls} indicators={showControls}>

            { headers?.map( (header) => (
                <Carousel.Item key={header.url}>
                    <img
                    className="d-block w-100"
                    src={header.url}
                    alt="Header"
                    />
                    <Carousel.Caption className="animated fadeInLeft">
                        <span className={ header.align }>
                            { Parser(header.title) }
                        </span>
                    </Carousel.Caption>
                </Carousel.Item>
            ) ) }
        </Carousel>
    )
}
