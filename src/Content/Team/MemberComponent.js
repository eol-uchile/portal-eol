import React from 'react';
import { Figure } from 'react-bootstrap';
import Parser from 'html-react-parser';

export const MemberComponent = ({ name, email, position, description, links}) => {
    return (
        <div className="col-md-6 col-lg-4 p-3 mx-auto">
            <div className="team-member">
                <Figure>
                    <Figure.Image
                        className="img-responsive"
                        alt={ name }
                        src="http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg" 
                    />
                    <Figure.Caption className="p-3">
                        <div>
                            <p>{ Parser(description) }</p>
                            <ul>
                                <li><a href={ `mailto:${email}` } target="_blank" rel="noreferrer"><i className="fas fa-envelope fa-2x"></i></a></li>
                                { links.linkedin && (
                                    <li><a href={links.linkedin} target="_blank" rel="noreferrer"><i className="fa fa-linkedin fa-2x"></i></a></li>
                                ) }
                                { links.github && (
                                    <li><a href={links.github} target="_blank" rel="noreferrer"><i className="fa fa-github fa-2x"></i></a></li>
                                ) }
                            </ul>
                        </div>
                    </Figure.Caption>
                </Figure>
                <h4 className="name">{ name }</h4>
                <p className="position">{ position }</p>
            </div>
        </div>
    )
}
