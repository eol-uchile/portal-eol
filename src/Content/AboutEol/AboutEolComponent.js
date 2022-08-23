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
                    <div className="content-info col-12" data-aos="zoom-in" data-aos-duration="1000">
                    <iframe src="https://player.vimeo.com/video/742048340?h=095d5da93d" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
