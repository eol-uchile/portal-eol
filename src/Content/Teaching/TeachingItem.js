import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                    { teaching.effort && (
                        <li>
                            <strong>
                                <FormattedMessage id="teachings.effort" />:
                            </strong>
                            {teaching.effort}
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
                    { teaching.link && (
                        <li>
                            <Link to={{ pathname:`${teaching.link}`}} target="_blank">  
                                <Button className="show-more">
                                    <FormattedMessage id="teachings.showmore" />
                                </Button>
                            </Link>
                        </li>
                    ) }
                </ul>
            </div>
        </div>
    )
}
