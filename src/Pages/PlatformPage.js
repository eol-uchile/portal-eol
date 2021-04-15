import React from 'react';
import { ManagedPlatformsComponent } from '../Content/ManagedPlatforms/ManagedPlatformsComponent';
import { OpenedXComponent } from '../Content/OpenedX/OpenedXComponent';

export const PlatformPage = () => {
    return (
        <>
            <OpenedXComponent />
            <ManagedPlatformsComponent />
        </>
    )
}
