import React from 'react';
import { AboutComponent } from '../Content/About/AboutComponent';
import { headers_home } from '../Content/Header/data';
import { HeaderComponent } from '../Content/Header/HeaderComponent';
import { ServicesComponent } from '../Content/Services/ServicesComponent';
import { StatisticsComponent } from '../Content/Statistics/StatisticsComponent';
import { TestimonialsComponent } from '../Content/Testimonials/TestimonialsComponent';

export const HomePage = () => {
    return (
        <>
            <HeaderComponent headers_data = { headers_home } />
            <AboutComponent />
            <ServicesComponent />
            <StatisticsComponent />
            <TestimonialsComponent />
        </>
    )
}
