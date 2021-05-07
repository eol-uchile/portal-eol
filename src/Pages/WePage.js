import React from 'react';
import { AboutComponent } from '../Content/About/AboutComponent';
import { headers_we } from '../Content/Header/data';
import { HeaderComponent } from '../Content/Header/HeaderComponent';
import { MissionAndVisionComponent } from '../Content/MissionAndVision/MissionAndVisionComponent';
import { TeamComponent } from '../Content/Team/TeamComponent';

export const WePage = () => {
    return (
        <>
            <HeaderComponent headers_data = { headers_we } />
            <AboutComponent />
            <MissionAndVisionComponent />
            <TeamComponent />
        </>
    )
}
