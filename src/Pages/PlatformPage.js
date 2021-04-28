import React from 'react';
import { FunctionalitiesComponent } from '../Content/Functionalities/FunctionalitiesComponent';
import { ManagedPlatformsComponent } from '../Content/ManagedPlatforms/ManagedPlatformsComponent';
import { OpenedXComponent } from '../Content/OpenedX/OpenedXComponent';

export const PlatformPage = () => {
    return (
        <>
            <OpenedXComponent />
            <ManagedPlatformsComponent />
            <FunctionalitiesComponent />
        </>
    )
}
