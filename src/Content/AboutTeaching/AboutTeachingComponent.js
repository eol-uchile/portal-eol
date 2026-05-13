import React from 'react';
import { FormattedMessage } from 'react-intl';
import "./about.css";
import { VideoItemComponent } from '../Videos/VideoItemComponent';
import { useIntl } from 'react-intl';

export const AboutTeachingComponent = () => {
    const intl = useIntl();
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
                        {intl.messages["teachings.content"].map((line, index) => (
                            <p key={index}>
                                {line}
                            </p>
                        ))}
                    </div>
                    <div className='w-100 mt-5'>
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/-OZu0dlpyR0?si=LvKGtQYdSBptAggP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
