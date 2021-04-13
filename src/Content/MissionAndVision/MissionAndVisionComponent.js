import React from 'react';
import { FormattedMessage } from 'react-intl';
import "./mv.css";

export const MissionAndVisionComponent = () => {
    return (
        <section id="missionvision">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <h2 className="content-header">
                            <FormattedMessage id="mv.header" />
                        </h2>
                    </div>
                    <div className="content-info col-md-6">
                        <img 
                            src="/images/mission.svg" 
                            alt="Misión" 
                            className="img-fluid"
                        />
                        <p className="mt-4 px-3">
                            <FormattedMessage id="mv.mission" />
                        </p>
                    </div>
                    <div className="content-info col-md-6">
                        <img 
                            src="/images/vision.svg" 
                            alt="Visión" 
                            className="img-fluid"
                        />
                        <p className="mt-4 px-3">
                            <FormattedMessage id="mv.vision" />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
