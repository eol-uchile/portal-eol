import React from 'react';
import { FormattedMessage } from 'react-intl';
import "./about.css";

export const AboutTeachingComponent = () => {
    return (
        <section id="about-teaching">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <h2 className="content-header" data-aos="fade-up">
                            <FormattedMessage id="teachings.header" />
                        </h2>
                    </div>
                    <div className="content-info col-12" data-aos="zoom-in" data-aos-duration="1000">
                        <p>
                            <FormattedMessage id="teachings.content" />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
