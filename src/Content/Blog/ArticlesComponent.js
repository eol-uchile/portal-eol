import { blog_data } from './data';
import React, { useContext, useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ItemListComponent } from './ItemListComponent';
import { SeparatorTopComponent } from '../../Extras/Separators/SeparatorTopComponent';
import { getData } from '../../Extras/GetData/getData';
import Pagination from '../../Extras/GetData/Pagination';
import { LanguageContext } from '../../Extras/Language/LanguageContext';

export const ArticlesComponent = React.memo(() => {
    const { language } = useContext(LanguageContext);
    const [articles, setArticles] = useState([]);

    const [pagination, setPagination] = useState({
        page: 0,
        page_size: 6,
    });

    useEffect(() => {
        setArticles(
            getData({
                data: blog_data,
                language: language
            }).slice(
                pagination.page * pagination.page_size,
                (pagination.page + 1) * pagination.page_size
            )
        );
    }, [
        pagination.page,
        pagination.page_size,
        language,
    ]);

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
                {articles.length > 0 ?
                    <div>
                        <div className="row">
                            {articles.map((t, k) => (
                                <div className="content-info col-4" data-aos="fade-up" data-aos-duration="1000" >
                                    <ItemListComponent
                                        key={k}
                                        {...t}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <Pagination
                                    count={blog_data[language].length}
                                    page_size={pagination.page_size}
                                    page={pagination.page}
                                    setStatePage={(p) => setPagination({ ...pagination, page: p })}
                                    size="md"
                                    label="articles"
                                    displayFirst
                                    displayLast
                                />
                            </div>
                        </div>
                    </div>
                    : <div data-aos="fade-up" data-aos-duration="1000"><FormattedMessage id="articles.empty" /></div>
                }
            </div>
            <SeparatorTopComponent />
        </section>
    )
})
