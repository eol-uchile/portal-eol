import React, { useContext, useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { LanguageContext } from '../../Extras/Language/LanguageContext';
import { getData } from '../../Extras/GetData/getData';
import { blog_data } from './data';
import { Link } from 'react-router-dom';
import './blog.css';


export const ArticleComponent = (props) => {
    const { language } = useContext(LanguageContext);
    const articles = getData({
        data: blog_data,
        language: language
    });
    const [article, setArticle] = useState({
        status: 'idle',
        title: '',
        date: '',
        author: '',
        tags: [],
        post: ''
    })

    const [content, setContent] = useState({
        __html: null
    })

    async function fetchMyDocument() {
        try {
            let response = await fetch(`/${article.post}`); // Gets a promise
            let innerHTML = await response.text();
            innerHTML && setContent({ __html: innerHTML })
        } catch (err) {
            console.log('Fetch error:' + err); // Error handling
        }
    }

    useEffect(() => {
        setArticle({ ...article, status: 'loading' })
        if (props.match.params.article_path[0] <= articles.length && props.match.params.article_path[0] >= 0) {
            setArticle({
                status: 'success',
                ...articles[props.match.params.article_path[0] - 1]
            })

        } else {
            setArticle({ ...article, status: 'failure' })
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match])

    useEffect(() => {
        article.status === 'success' && fetchMyDocument()
    }, [article])

    return (
        <section id='article'>
            {article.status === 'loading' ?
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Cargando...</span>
                    </div>
                </div>
                : article.status === 'success' ? (<div className="container" data-aos="fade-up" data-aos-duration="1000">
                    <Link className="goback" to='/blog'>
                        <i className="fas fa-chevron-left"></i>
                        {" "}<FormattedMessage id="article.goback" />
                    </Link>
                    <div className="row">
                        <div className="col-12">
                            <h2>{article.title}</h2>
                            <p><i class="fas fa-user"></i>{" "}<FormattedMessage id="article.author" />: {article.author}</p>
                            <p><i class="fas fa-tags"></i>{" "}<FormattedMessage id="article.tags" />: {" "}
                                {article.tags.map((tag) =>
                                    <span>{tag}{" "}</span>
                                )}
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
                            <p><i class="fas fa-calendar-alt"></i>{" "}<FormattedMessage id="article.published" />: {article.date}</p>
                        </div>
                    </div>
                </div>) : <h2 data-aos="fade-up" data-aos-duration="1000">404: <FormattedMessage id="article.notfound" /></h2>}
        </section>
    )
}
