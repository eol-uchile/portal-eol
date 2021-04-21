import React from 'react';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import './statistics.css';

export const StatisticsComponent = () => {
    return (
        <section id="statistics">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <h2 className="content-header animate__animated animate__fadeIn">
                            Estadísticas Plataformas 2020
                        </h2>
                    </div>
                    <div className="content-info col-md-4">
                        <img 
                            src="/images/statistics_1.svg" 
                            alt="Usuarios registrados" 
                            className="img-fluid animate__animated animate__fadeIn"
                        />
                        <p className="number mt-4 px-3 animate__animated animate__fadeInUp">
                            <CountUp end={310000} delay={0} separator="." prefix="+">
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </p>
                        <p className="title mt-1 px-1 animate__animated animate__fadeIn">
                            Usuarios Registrados
                        </p>
                    </div>
                    <div className="content-info col-md-4">
                        <img 
                            src="/images/statistics_2.svg" 
                            alt="Cursos" 
                            className="img-fluid animate__animated animate__fadeIn"
                        />
                        <p className="number mt-4 px-3 animate__animated animate__fadeInUp">
                            <CountUp end={440} delay={0} separator="." prefix="+">
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </p>
                        <p className="title mt-1 px-1 animate__animated animate__fadeIn">
                            Cursos
                        </p>
                    </div>
                    <div className="content-info col-md-4">
                        <img 
                            src="/images/statistics_3.svg" 
                            alt="Certificados" 
                            className="img-fluid animate__animated animate__fadeIn"
                        />
                        <p className="number mt-4 px-3 animate__animated animate__fadeInUp">
                            <CountUp end={390000} delay={0} separator="." prefix="+">
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </p>
                        <p className="title mt-1 px-1 animate__animated animate__fadeIn">
                            Certificados
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
