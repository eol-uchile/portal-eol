import React from 'react';
import { FormattedMessage } from 'react-intl';

export const TeachingItem = ({teaching, side="img-left"}) => {
    
    return (
        <div className="row py-4 px-3">
            <div className= {side !== "img-left" ? "col-md-5 col-lg-6 order-lg-12" : "col-md-5 col-lg-6"} data-aos="fade-up" data-aos-duration="1000">
                <img 
                    src={teaching.image}
                    alt={teaching.name} 
                    className="img-fluid"
                />
            </div>
            <div className="col-md-7 col-lg-6 py-3 py-md-0" data-aos="fade-up" data-aos-duration="1000">
                <h3 className="mb-4 text-left"><FormattedMessage id="teachings.teaching" />: {teaching.name}</h3>
                <ul>
                    { teaching.org && (
                        <li>
                            <strong>
                                <FormattedMessage id="teachings.org" />:
                            </strong>
                            {teaching.org}
                        </li>
                    ) }
                    { teaching.tier && (
                        <li>
                            <strong>
                                <FormattedMessage id="teachings.tier" />:
                            </strong>
                            {teaching.tier}
                        </li>
                    ) }
                    { teaching.year && (
                        <li>
                            <strong>
                                <FormattedMessage id="teachings.year" />:
                            </strong>
                            {teaching.year}
                        </li>
                    ) }
                    { teaching.description && (
                        <li>
                            <strong>
                                <FormattedMessage id="teachings.description" />:
                            </strong>
                            {teaching.description}
                        </li>
                    ) }
                    { teaching.participants && (
                        <li>
                            <strong>
                                <FormattedMessage id="teachings.participants" />:
                            </strong>
                            {teaching.participants}
                        </li>
                    ) }
                </ul>
            </div>
        </div>
    )
}
