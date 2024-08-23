import React from 'react';
import { AboutTeachingComponent } from '../Content/AboutTeaching/AboutTeachingComponent';
import { headers_teachings } from '../Content/Header/data';
import { HeaderComponent } from '../Content/Header/HeaderComponent';
import { TeachingListComponent } from '../Content/Teaching/TeachingList';

export const TeachingPage = () => {
    return (
        <>
            <HeaderComponent headers_data = { headers_teachings } />
            <AboutTeachingComponent />
            <TeachingListComponent />
        </>
    )
}
