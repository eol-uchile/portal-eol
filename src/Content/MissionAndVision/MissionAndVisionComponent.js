import React from 'react';
import { FormattedMessage } from 'react-intl';
import "./mv.css";

export const MissionAndVisionComponent = () => {
    return (
        <section 
            id="missionvision"
            style={{backgroundImage: "url(/images/nodos_background.png)" }}
        >
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <h2 className="content-header" data-aos="fade-up">
                            <FormattedMessage id="mv.header" />
                        </h2>
                    </div>
                    <div className="content-info col-md-6">
                        <img 
                            src="/images/mission.svg" 
                            alt="Misión" 
                            className="img-fluid"
                            data-aos="zoom-in-up" data-aos-duration="1000"
                        />
                        <p className="mt-4 px-3" data-aos="zoom-in" data-aos-duration="1000">
                            <FormattedMessage id="mv.mission" />
                        </p>
                    </div>
                    <div className="content-info col-md-6">
                        <img 
                            src="/images/vision.svg" 
                            alt="Visión" 
                            className="img-fluid"
                            data-aos="zoom-in-down" data-aos-duration="1000"
                        />
                        <p className="mt-4 px-3" data-aos="zoom-in" data-aos-duration="1000">
                            <FormattedMessage id="mv.vision" />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
