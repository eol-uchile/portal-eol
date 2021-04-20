import React, { useState } from 'react';
import './testimonials.css';
import { TestimonialModalComponent } from './TestimonialModalComponent';
import { TestimonialListComponent } from './TestimonialListComponent';

export const TestimonialsComponent = () => {

    const [modalData, setModalData] = useState({
        showModal: false,
        data: {
            name: '',
            position: '',
            text: '',
            img: ''
        }
    });

    return (
        <>
            <TestimonialListComponent setModalData={ setModalData } />
            <TestimonialModalComponent {...modalData} setModalData={ setModalData } />
        </>
    )
}
