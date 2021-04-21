import React from 'react';
import { FormattedMessage } from 'react-intl';
import "./openedx.css";

export const OpenedXComponent = () => {
    return (
        <section id="openedx">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <h2 className="content-header">
                            <FormattedMessage id="openedx.header" />
                        </h2>
                    </div>
                    <div className="col-12">
                        <p className="text-muted pt-2">
                        <FormattedMessage id="openedx.desc" /> (<a href="https://open.edx.org/" target="_blank" rel="noreferrer">https://open.edx.org/</a>)
                        </p>
                    </div>
                    <div className="content-info col-12">
                        <p>
                            <FormattedMessage id="openedx.content.one" />
                        </p>
                        <p>
                            <FormattedMessage id="openedx.content.two" />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
