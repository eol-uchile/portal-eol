import React from 'react';
import { AboutOpenedXComponent } from '../Content/AboutOpenedX/AboutOpenedXComponent';
import { AnalyticsComponent } from '../Content/Analytics/AnalyticsComponent';
import { FunctionalitiesComponent } from '../Content/Functionalities/FunctionalitiesComponent';
import { headers_platform } from '../Content/Header/data';
import { HeaderComponent } from '../Content/Header/HeaderComponent';
import { ManagedPlatformsComponent } from '../Content/ManagedPlatforms/ManagedPlatformsComponent';

export const PlatformPage = () => {
    return (
        <>
            <HeaderComponent headers_data = { headers_platform } />
            <AboutOpenedXComponent />
            <ManagedPlatformsComponent />
            <FunctionalitiesComponent />
            <AnalyticsComponent />
        </>
    )
}
