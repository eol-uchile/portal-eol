import React, { useContext } from 'react';
import { team_members_data } from './data';
import { MemberComponent } from './MemberComponent2';
import { FormattedMessage } from 'react-intl';
import { SeparatorTopComponent } from '../../Extras/Separators/SeparatorTopComponent';
import { LanguageContext } from '../../Extras/Language/LanguageContext';
import { getData } from '../../Extras/GetData/getData';
import './team2.css';

export const TeamComponent = () => {
    const { language } = useContext(LanguageContext);
    const team_members = getData({
        data: team_members_data,
        language: language
    });
    return (
        <section id="team">
            <div className="container main-container text-center">
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
                    { team_members?.map( (member) => (
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
