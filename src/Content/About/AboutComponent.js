import React from 'react';
import { FormattedMessage } from 'react-intl';
import "./about.css";

export const AboutComponent = () => {
    return (
        <section id="about">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <h2 className="content-header animate__animated animate__fadeInUp">
                            <FormattedMessage id="about.header" />
                        </h2>
                    </div>
                    <div className="content-info col-12">
                        <p>
                            <FormattedMessage id="about.content.one" />
                        </p>
                        <p>
                            <FormattedMessage id="about.content.two" />
                        </p>
                        <p>
                            <FormattedMessage id="about.content.three" />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
