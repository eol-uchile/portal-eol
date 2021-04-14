import React from 'react';
import "./services.css";
import { Services1 } from './Services1';
import { Services2 } from './Services2';

export const ServicesComponent = () => {
    return (
        <section id="services">
            <div className="container text-center">
                <Services1 />
                <Services2 />
            </div>
        </section>
    )
}
