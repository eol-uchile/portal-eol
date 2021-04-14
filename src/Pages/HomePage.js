import React from 'react';
import { AboutComponent } from '../Content/About/AboutComponent';
import { HeaderComponent } from '../Content/Header/HeaderComponent';
import { ServicesComponent } from '../Content/Services/ServicesComponent';

export const HomePage = () => {
    return (
        <>
            <HeaderComponent />
            <AboutComponent />
            <ServicesComponent />
        </>
    )
}
