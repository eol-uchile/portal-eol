import React from 'react';
import { FormattedMessage } from 'react-intl';
import "./eol.css";

export const AboutEolComponent = () => {
    return (
        <section id="about-eol">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <h2 className="content-header" data-aos="fade-up">
                            <FormattedMessage id="abouteol.header" />
                        </h2>
                    </div>
                    <div className="content-info col-12" data-aos="zoom-in" data-aos-duration="1000">
                        <p>
                            <FormattedMessage id="abouteol.content.one" />
                        </p>
                        <p>
                            <FormattedMessage id="abouteol.content.two" />
                        </p>
                        <p>
                            <FormattedMessage id="abouteol.content.three" />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
