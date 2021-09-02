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
        img: '',
        date: '',
        author: '',
        text: '',
        tags: '',
    })
    useEffect(() => {
        setArticle({ ...article, status: 'loading' })
        if (props.match.params.article_id <= articles.length && props.match.params.article_id >= 0) {
            setArticle({
                status: 'success',
                ...articles[props.match.params.article_id - 1]
            })
        } else {
            setArticle({ ...article, status: 'failure' })
        }
    }, [props.match])
    return (
        <section id='article'>
            {article.status == 'loading' ?
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Cargando...</span>
                    </div>
                </div>
                : article.status == 'success' ? (<div className="container" data-aos="fade-up" data-aos-duration="1000">
                    <Link className="goback" to='/blog'>
                        <i className="fas fa-chevron-left"></i>
                        {" "}<FormattedMessage id="article.goback" />
                    </Link>
                    <img className="w-100" src={article.img} alt="Article image" />
                    <div className="row">
                        <div className="col-12">
                            <h2>{article.title}</h2>
                            <p><i class="fas fa-calendar-alt"></i>{" "}<FormattedMessage id="article.published" />: {article.date}</p>
                            <p><i class="fas fa-user"></i>{" "}<FormattedMessage id="article.author" />: {article.author}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>{article.text}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p><i class="fas fa-tags"></i>{" "}<FormattedMessage id="article.tags" />: {" "}
                                {article.tags.map((tag) =>
                                    <span>{tag}</span>
                                )}</p>
                        </div>
                    </div>
                </div>) : <h2 data-aos="fade-up" data-aos-duration="1000"><FormattedMessage id="article.notfound" /></h2>}
        </section>
    )
}
