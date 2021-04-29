import React from 'react';
import { AnalyticsComponent } from '../Content/Analytics/AnalyticsComponent';
import { FunctionalitiesComponent } from '../Content/Functionalities/FunctionalitiesComponent';
import { ManagedPlatformsComponent } from '../Content/ManagedPlatforms/ManagedPlatformsComponent';
import { OpenedXComponent } from '../Content/OpenedX/OpenedXComponent';

export const PlatformPage = () => {
    return (
        <>
            <OpenedXComponent />
            <ManagedPlatformsComponent />
            <FunctionalitiesComponent />
            <AnalyticsComponent />
        </>
    )
}
