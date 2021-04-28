import React from 'react';
import { FunctionalitiesListComponent } from './FunctionalitiesListComponent';
import './functionalities.css';

export const FunctionalitiesComponent = () => {
    return (
        <section id="functionalities">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <h2 className="content-header animate__animated animate__fadeInUp">
                            Funcionalidades e Integraciones
                        </h2>
                    </div>
                    <div className="col-12">
                        <p className="text-muted pt-2 animate__animated animate__fadeInUp">
                            A pesar de ser una plataforma bastante completa en lo que respecta a las funcionalidades, nuestro equipo de ingeniería constantemente está desarrollando y adaptando nuevas soluciones acorde a las necesidades que van presentando los docentes y estudiantes de nuestra Universidad.
                        </p>
                    </div>
                    <div className="content-info text-justify col-12 animate__animated animate__fadeIn">
                        <FunctionalitiesListComponent />
                    </div>
                </div>
            </div>
        </section>
    )
}
