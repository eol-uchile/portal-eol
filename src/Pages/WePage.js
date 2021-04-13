import React from 'react';
import { AboutComponent } from '../Content/About/AboutComponent';
import { MissionAndVisionComponent } from '../Content/MissionAndVision/MissionAndVisionComponent';
import { TeamComponent } from '../Content/Team/TeamComponent';

export const WePage = () => {
    return (
        <>
            <AboutComponent />
            <MissionAndVisionComponent />
            <TeamComponent />
        </>
    )
}
