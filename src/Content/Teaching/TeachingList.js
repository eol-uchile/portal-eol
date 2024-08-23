import React, { useContext } from 'react';
import { LanguageContext } from '../../Extras/Language/LanguageContext';
import { getData } from '../../Extras/GetData/getData';
import { teaching_data } from './data';
import "./teachings.css";
import { TeachingItem } from './TeachingItem';
import { SeparatorTopComponent } from '../../Extras/Separators/SeparatorTopComponent';

export const TeachingListComponent = () => {
    const { language } = useContext(LanguageContext);
    const teachings = getData({
        data: teaching_data,
        language: language
    });
    return (
        <section
            id="teachingslist"
        >
            <div
                className="dark-background py-5"
                style={{backgroundImage: "url(/images/nodos_background.png)" }}
            >
                <div className="container">
                    <TeachingItem teaching={teachings[0]} />
                </div>
                <div className="container">
                    <TeachingItem teaching={teachings[1]} side="img-right" />
                </div>
            </div>

            <div
                className="light-background py-5"
            >
                <div className="container">
                    <TeachingItem teaching={teachings[2]} />
                </div>
                <div className="container">
                    <TeachingItem teaching={teachings[3]} side="img-right" />
                </div>
            </div>

            <div
                className="light2-background py-5"
            >
                <div className="container">
                    <TeachingItem teaching={teachings[4]} />
                </div>
                <div className="container">
                    <TeachingItem teaching={teachings[5]} side="img-right" />
                </div>

            </div>
            <div
                className="dark-background py-5"
                style={{backgroundImage: "url(/images/nodos_background.png)" }}
            >
                 <div className="container">
                    <TeachingItem teaching={teachings[6]} />
                </div>
                <div className="container">
                    <TeachingItem teaching={teachings[7]} side="img-right" />
                </div>

            </div>

            <div
                className="light-background py-5"
            >
                <div className="container">
                    <TeachingItem teaching={teachings[8]} />
                </div>
                <div className="container">
                    <TeachingItem teaching={teachings[9]} side="img-right"/>
                </div>

            </div>

            <div
                className="light2-background py-5"
            >
                <div className="container">
                    <TeachingItem teaching={teachings[10]}  />
                </div>
                <div className="container">
                    <TeachingItem teaching={teachings[11]} side="img-right"/>
                </div>

            </div>
            <div
                className="dark-background py-5"
                style={{backgroundImage: "url(/images/nodos_background.png)" }}
            >
                <div className="container">
                    <TeachingItem teaching={teachings[12]} />
                </div>
                <div className="container">
                    <TeachingItem teaching={teachings[13]}  side="img-right"/>
                </div>
            </div>

            <div
                className="light-background py-5"
            >
                <div className="container">
                    <TeachingItem teaching={teachings[14]} />
                </div>
                <div className="container">
                    <TeachingItem teaching={teachings[15]} side="img-right" />
                </div>
            </div>
            <div
                className="light2-background"
            >
                <div className="container">
                    <TeachingItem teaching={teachings[16]} />
                </div>
            </div>

            <SeparatorTopComponent background="light" />
        </section>
    )
}
