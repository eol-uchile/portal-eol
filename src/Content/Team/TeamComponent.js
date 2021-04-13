import React from 'react';
import { team_members } from './data';
import { MemberComponent } from './MemberComponent';
import { FormattedMessage } from 'react-intl';
import './team.css';

export const TeamComponent = () => {
    return (
        <section id="team">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <h2 className="content-header">
                            <FormattedMessage id="teams.header" />
                        </h2>
                    </div>
                    <div className="col-12">
                        <p className="text-muted pt-2">
                            <FormattedMessage id="teams.desc" />
                        </p>
                    </div>
                </div>
                <div className="row">
                    { team_members.map( (member) => (
                        <MemberComponent 
                            key={member.email}
                            {...member}
                        />
                    ) ) }
                </div>
            </div>
        </section>
    )
}
