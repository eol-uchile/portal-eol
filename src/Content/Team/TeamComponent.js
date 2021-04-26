import React from 'react';
import { team_members } from './data';
import { MemberComponent } from './MemberComponent2';
import { FormattedMessage } from 'react-intl';
import './team2.css';
import { SeparatorTopComponent } from '../../Extras/Separators/SeparatorTopComponent';

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

            <SeparatorTopComponent />
        </section>
    )
}
