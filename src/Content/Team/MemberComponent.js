import React from 'react';
import Parser from 'html-react-parser';

export const MemberComponent = ({ name, email, position, description, links}) => {
    return (
        <div className="col-md-4 col-lg-3 p-3 mx-auto">
            <div 
            className="team-member card mx-auto"
            style={{backgroundImage: "url(/images/team/example.jpg)" }}>
                <div className="card-body"></div>
                <div className="card-footer">
                    <div className="user-data">
                        <div className="limited-height">
                            <p className="name">{ name }</p>
                            <p className="position">{ position }</p>
                        </div>
                        <p className="description">{ Parser(description) }</p>
                        <ul>
                            { email && (
                                <a href={ `mailto:${email}` } target="_blank" rel="noreferrer"><li><i className="fas fa-envelope fa-2x"></i></li></a>
                            ) }
                            { links.linkedin && (
                                <a href={links.linkedin} target="_blank" rel="noreferrer"><li><i className="fa fa-linkedin fa-2x"></i></li></a>
                            ) }
                            { links.github && (
                                <a href={links.github} target="_blank" rel="noreferrer"><li><i className="fa fa-github fa-2x"></i></li></a>
                            ) }
                            { links.behance && (
                                <a href={links.behance} target="_blank" rel="noreferrer"><li><i className="fa fa-behance fa-2x"></i></li></a>
                            ) }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
