import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { useFetchArticleData } from './ArticlesHooks';
import { LanguageContext } from '../../Extras/Language/LanguageContext';
import './articles.css';


export const ArticleComponent = (props) => {
    const { language } = useContext(LanguageContext);
    const [ article, content ] = useFetchArticleData(language, props);

    return (
        <section id='article'>
            {
                article.status === 'loading' ?
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Cargando...</span>
                        </div>
                    </div>
                : 
                    article.status === 'success' ? (
                        <div className="container" data-aos="fade-up" data-aos-duration="1000">
                            <Link className="goback" to='/blog'>
                                <i className="fas fa-chevron-left"></i>
                                {" "}<FormattedMessage id="article.goback" />
                            </Link>
                            <div className="row">
                                <div className="col-12">
                                    <h2>{article.title}</h2>
                                    <p><i className="fas fa-user"></i>{" "}<FormattedMessage id="article.author" />: {article.author}</p>
                                    <p><i className="fas fa-tags"></i>{" "}<FormattedMessage id="article.tags" />: {" "}
                                        {
                                            article.tags?.map((tag) =>
                                                <span key={tag}>{tag}{" "}</span>
                                            )
                                        }
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
                                    <p><i className="fas fa-calendar-alt"></i>{" "}<FormattedMessage id="article.published" /> {article.date}</p>
                                </div>
                            </div>
                        </div>
                    )
                    : 
                        <h2 data-aos="fade-up" data-aos-duration="1000">404: <FormattedMessage id="article.notfound" /></h2>
            }
        </section>
    )
}
