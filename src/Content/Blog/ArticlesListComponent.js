import React, { useContext, useState } from 'react';
import { useFetchArticles } from './ArticlesHooks';
import { FormattedMessage } from 'react-intl';
import { LanguageContext } from '../../Extras/Language/LanguageContext';
import { ArticleItemComponent } from './ArticleItemComponent';
import { SeparatorTopComponent } from '../../Extras/Separators/SeparatorTopComponent';
import { Button } from 'react-bootstrap';

const LOAD_MORE = 6

export const ArticlesListComponent = (props) => {
    const { language } = useContext(LanguageContext);
    const [pagination, setPagination] = useState({
        page: 0,
        page_size: 6,
    });
    const [articles, total] = useFetchArticles(language, props, pagination);

    return (
        <section id="articles">
            <div className="container main-container text-center">
                <div className="row">
                    <div className="col-12">
                        <h2 className="content-header" data-aos="fade-up">
                            <FormattedMessage id="articles.header" />
                            {props.match.params.tag && `: Filtrados por ${props.match.params.tag}`}
                        </h2>
                    </div>
                </div>
                {
                    articles.status === 'loading' ?
                        <div className="d-flex justify-content-center separator-margin">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Cargando...</span>
                            </div>
                        </div>
                        :
                        articles.status === 'success' && articles.list.length > 0 ?
                            <>
                                <div className="row">
                                    {
                                        articles.list.map((t, k) => (
                                            <div className="content-info col-4" data-aos="fade-up" data-aos-duration="1000" key={k}>
                                                <ArticleItemComponent
                                                    {...t}
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                                {articles.list.length < total &&
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
            {props.match.params.tag && <SeparatorTopComponent />}
        </section>
    )
}
