import React from 'react';
import { AboutEolComponent } from '../Content/AboutEol/AboutEolComponent';
import { headers_we } from '../Content/Header/data';
import { HeaderComponent } from '../Content/Header/HeaderComponent';
import { HistoryComponent } from '../Content/History/HistoryComponent';
import { MissionAndVisionComponent } from '../Content/MissionAndVision/MissionAndVisionComponent';
import { TeamComponent } from '../Content/Team/TeamComponent';

export const WePage = () => {
    return (
        <>
            <HeaderComponent headers_data = { headers_we } />
            <AboutEolComponent />
            <MissionAndVisionComponent />
            <HistoryComponent />
            <TeamComponent />
        </>
    )
}
