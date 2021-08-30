import { blog_data } from './data';
import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ItemListComponent } from './ItemListComponent';
import { SeparatorTopComponent } from '../../Extras/Separators/SeparatorTopComponent';
import { getData } from '../../Extras/GetData/getData';
import { LanguageContext } from '../../Extras/Language/LanguageContext';

export const ArticlesComponent = React.memo(() => {
    const { language } = useContext(LanguageContext);
    const articles = getData({
        data: blog_data,
        language: language
    });
    return (
        <section id="articles">
            <div className="container main-container text-center">
                <div className="row">
                    <div className="col-12">
                        <h2 className="content-header" data-aos="fade-up">
                            <FormattedMessage id="articles.header" />
                        </h2>
                    </div>
                    {articles?.map((t, k) => (
                        <div className="content-info col-4" data-aos="fade-up" data-aos-duration="1000" >
                            <ItemListComponent
                                key={k}
                                {...t}
                            />
                        </div>
                    ))}

                </div>
            </div>
            <SeparatorTopComponent />
        </section>
    )
})
