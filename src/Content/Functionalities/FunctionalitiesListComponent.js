import React, { useContext } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { functionalities_data } from './data';
import { LanguageContext } from '../../Extras/Language/LanguageContext';
import { getData } from '../../Extras/GetData/getData';

export const FunctionalitiesListComponent = () => {
    const { language } = useContext(LanguageContext);
    const functionalities = getData({
        data: functionalities_data,
        language: language
    });
    return (
        <Accordion>
            {
                functionalities?.map( ({title, desc}, index) => (
                    <Card key={ index + 1 }>
                        <Accordion.Toggle as={Card.Header} eventKey={ index + 1 }>
                            <div className="card-title">
                                <span className="toggle-arrow"><i className="fas fa-chevron-right"></i></span>
                                <i className="fas fa-plus"></i>
                                { title }
                            </div>
                            <Accordion.Collapse eventKey={ index + 1 }>
                                <>{ desc }</>
                            </Accordion.Collapse>
                        </Accordion.Toggle>
                    </Card>
                ) )
            }
        </Accordion>
    )
}
