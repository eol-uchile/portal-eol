import React from 'react';
import { AnalyticsComponent } from '../Content/Analytics/AnalyticsComponent';
import { FunctionalitiesComponent } from '../Content/Functionalities/FunctionalitiesComponent';
import { headers_platform } from '../Content/Header/data';
import { HeaderComponent } from '../Content/Header/HeaderComponent';
import { ManagedPlatformsComponent } from '../Content/ManagedPlatforms/ManagedPlatformsComponent';
import { OpenedXComponent } from '../Content/OpenedX/OpenedXComponent';

export const PlatformPage = () => {
    return (
        <>
            <HeaderComponent headers_data = { headers_platform } />
            <OpenedXComponent />
            <ManagedPlatformsComponent />
            <FunctionalitiesComponent />
            <AnalyticsComponent />
        </>
    )
}
