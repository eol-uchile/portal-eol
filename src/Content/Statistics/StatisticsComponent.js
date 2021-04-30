import React from 'react';
import { FormattedMessage } from 'react-intl';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import './statistics.css';

export const StatisticsComponent = () => {
    return (
        <section id="statistics">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <h2 className="content-header" data-aos="fade-up">
                            <FormattedMessage id="statistics.header" />
                        </h2>
                    </div>
                    <div className="content-info col-md-4" data-aos="fade-up" data-aos-duration="1000">
                        <img 
                            src="/images/statistics_1.svg" 
                            alt="Usuarios registrados" 
                            className="img-fluid"
                        />
                        <p className="number mt-4 px-3">
                            <CountUp end={310000} delay={0} separator="." prefix="+">
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </p>
                        <p className="title mt-1 px-1">
                            <FormattedMessage id="statistics.users" />
                        </p>
                    </div>
                    <div className="content-info col-md-4" data-aos="fade-up" data-aos-duration="1000">
                        <img 
                            src="/images/statistics_2.svg" 
                            alt="Cursos" 
                            className="img-fluid"
                        />
                        <p className="number mt-4 px-3">
                            <CountUp end={440} delay={0} separator="." prefix="+">
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </p>
                        <p className="title mt-1 px-1">
                            <FormattedMessage id="statistics.courses" />
                        </p>
                    </div>
                    <div className="content-info col-md-4" data-aos="fade-up" data-aos-duration="1000">
                        <img 
                            src="/images/statistics_3.svg" 
                            alt="Certificados" 
                            className="img-fluid"
                        />
                        <p className="number mt-4 px-3">
                            <CountUp end={390000} delay={0} separator="." prefix="+">
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </p>
                        <p className="title mt-1 px-1">
                            <FormattedMessage id="statistics.certificates" />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
