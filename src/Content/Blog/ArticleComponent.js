import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { useFetchArticleData } from './ArticlesHooks';
import { LanguageContext } from '../../Extras/Language/LanguageContext';
import './articles.css';
import { SeparatorTopComponent } from '../../Extras/Separators/SeparatorTopComponent';
import { scrollToTop } from '../../Extras/ScrollToTopButton/scrolltop';



export const ArticleComponent = (props) => {
    const { language } = useContext(LanguageContext);

    const [ article, content ] = useFetchArticleData(language, props);
    scrollToTop();
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
                                <i className="fas fa-chevron-circle-left"></i>
                                {" "}<FormattedMessage id="article.goback" />
                            </Link>
                            <div className="row">
                                <div className="col-12 post-info">
                                    <h2><label dangerouslySetInnerHTML={{__html: article.title}}></label></h2>
                                    <p className="h5 description" dangerouslySetInnerHTML={{__html: article.description}}></p>

                                    {
                                        typeof article.author != 'string' ?
                                        (
                                            <div className="row d-flex justify-content-end px-3 my-4"  data-aos="zoom-in" data-aos-duration="1000">
                                                <div className="col-12 col-md-6 d-flex align-items-center px-0 pr-3">
                                                    <p>
                                                        <i className="fas fa-tags"></i>{" "}<FormattedMessage id="article.tags" />:
                                                        {article.tags &&
                                                            article.tags.map(t => (<Link key={t} className="tag" to={`/blog/tags/${t}`}>{t}</Link>))
                                                        }
                                                    </p>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="row">
                                                        <div className="col-12 col-lg-4 text-left text-lg-right px-0">
                                                            <p style={{margin:"7px"}}>Escrito por:</p>
                                                        </div>
                                                        <div className="col-12 col-lg-8 px-0 d-block" style={{minHeight:"120px"}}>
                                                            <div className="team-member p-2 text-right">
                                                                <div className="user-data">
                                                                    <img src={ article.author.image } alt={ article.author.name }/>
                                                                    <span className="name">{ article.author.name }</span>
                                                                    <span className="position">{ article.author.position }</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                        )
                                        :
                                        (
                                            <>
                                                <p><i className="fas fa-user mr-2"></i>{" "}<FormattedMessage id="article.author" />: {article.author}
                                                </p>
                                                <p>
                                                    <i className="fas fa-tags"></i>{" "}<FormattedMessage id="article.tags" />:
                                                    {article.tags &&
                                                        article.tags.map(t => (<Link className="tag" to={`/blog/tags/${t}`}>{t}</Link>))
                                                    }
                                                </p>
                                            </>
                                        )
                                    }
                                    


                                    
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
                                    <p className="post-date"><span>{article.date}</span></p>
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
