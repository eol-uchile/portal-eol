import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { useFetchArticleData } from './ArticlesHooks';
import { LanguageContext } from '../../Extras/Language/LanguageContext';
import './articles.css';
import { SeparatorTopComponent } from '../../Extras/Separators/SeparatorTopComponent';


export const ArticleComponent = (props) => {
    const { language } = useContext(LanguageContext);
    const [ article, content ] = useFetchArticleData(language, props);

    return (
        <section id='article'>
            {
                article.status === 'loading' ?
                    <div className="d-flex justify-content-center separator-margin">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Cargando...</span>
                        </div>
                    </div>
                : 
                    article.status === 'success' ? (
                        <div className="container separator-margin" data-aos="fade-up" data-aos-duration="1000">
                            <Link className="goback" to='/blog'>
                                <i class="fas fa-chevron-circle-left"></i>
                                {" "}<FormattedMessage id="article.goback" />
                            </Link>
                            <div className="row">
                                <div className="col-12 post-info">
                                    <h2>{article.title}</h2>
                                    <p class="h5">{article.description}</p>
                                    <p><i className="fas fa-user mr-2"></i>{" "}<FormattedMessage id="article.author" />: {article.author}</p>
                                    <p><i className="fas fa-tags"></i>{" "}<FormattedMessage id="article.tags" />: {" "}
                                        <span>{ article.tags?.join() }</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div>
                                        <div dangerouslySetInnerHTML={content} ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <p className="post-date"><span>{ article.date}</span></p>
                                </div>
                            </div>
                        </div>
                    )
                    : 
                        <h2 data-aos="fade-up" data-aos-duration="1000" className="separator-margin">404: <FormattedMessage id="article.notfound" /></h2>
            }
            <SeparatorTopComponent />
        </section>
    )
}
