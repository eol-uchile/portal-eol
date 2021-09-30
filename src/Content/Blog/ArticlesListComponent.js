import React, { useContext, useState } from 'react';
import { useFetchArticles } from './ArticlesHooks';
import { FormattedMessage } from 'react-intl';
import { LanguageContext } from '../../Extras/Language/LanguageContext';
import { ArticleItemComponent } from './ArticleItemComponent';
import { SeparatorTopComponent } from '../../Extras/Separators/SeparatorTopComponent';
import { Button } from 'react-bootstrap';

const LOAD_MORE = 6;

export const ArticlesListComponent = React.memo(() => {
    const { language } = useContext(LanguageContext);
    const [pagination, setPagination] = useState({
        page: 0,
        page_size: 6,
    });
    const [articles, total] = useFetchArticles(pagination, language);

    return (
        <section id="articles">
            <div className="container main-container text-center">
                <div className="row">
                    <div className="col-12">
                        <h2 className="content-header" data-aos="fade-up">
                            <FormattedMessage id="articles.header" />
                        </h2>
                    </div>
                </div>
                {
                    articles.length > 0 ?
                        <>
                            <div className="row">
                                {
                                    articles.map((t, k) => (
                                        <div className="content-info col-4" data-aos="fade-up" data-aos-duration="1000" key={k}>
                                            <ArticleItemComponent
                                                {...t}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                            {articles.length < total &&
                                <div className="row">
                                    <div className="col-12" data-aos="fade-up" data-aos-duration="1000">
                                        <Button className="show-more" onClick={() => setPagination({ ...pagination, page_size: pagination.page_size + LOAD_MORE })}><FormattedMessage id="articles.showmore" /></Button>
                                    </div>
                                </div>}
                        </>
                        :
                        <div data-aos="fade-up" data-aos-duration="1000"><FormattedMessage id="articles.empty" /></div>
                }
            </div>
            <SeparatorTopComponent />
        </section>
    )
})
