import React from 'react';
import { FormattedMessage } from 'react-intl';
import "./history.css";

export const HistoryComponent = () => {
    return (
        <section id="history">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <h2 className="content-header" data-aos="fade-up">
                            <FormattedMessage id="history.header" />
                        </h2>
                    </div>
                    <div className="content-info col-12" data-aos="zoom-in" data-aos-duration="1000">
                        <img 
                            src="/images/history.svg" 
                            alt="Historia" 
                            className="img-fluid mb-4"
                        />
                        <p>
                            <FormattedMessage id="history.content.one" />
                        </p>
                        <p>
                            <FormattedMessage id="history.content.two" />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
