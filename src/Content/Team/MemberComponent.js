import React from 'react';
import Parser from 'html-react-parser';

export const MemberComponent = ({ name, email, position, image, links}) => {
    return (
        <div className="col-md-6 col-lg-4 p-3 mx-auto">
            <div 
            className="team-member py-2">
                <div className="user-data">
                    <img src={ image } />
                    <span className="name">{ name }</span>
                    <span className="position">{ position }</span>
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
    )
}
