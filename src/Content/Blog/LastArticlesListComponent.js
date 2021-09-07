import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { ArticleItemComponent } from './ArticleItemComponent';
import { useFetchLastArticles } from './ArticlesHooks';
import { LanguageContext } from '../../Extras/Language/LanguageContext';
import { scrollToTop } from '../../Extras/ScrollToTopButton/scrolltop';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const LastArticlesListComponent = React.memo(() => {
    const { language } = useContext(LanguageContext);
    const articles = useFetchLastArticles(language);
    const options = {
        loop: false,
        rewind: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: [
            "<div class='nav-btn prev-slide'><i class='fa fa-chevron-left'></i></div>",
            "<div class='nav-btn next-slide'><i class='fa fa-chevron-right'></i></div>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1300: {
                items: 4,
            }
        }
    }
    return (
        <section id="last-articles">
            <div className="container main-container text-center">
                <div className="row">
                    <div className="col-12">
                        <h2 className="content-header" data-aos="fade-up">
                            <FormattedMessage id="blog.header" />
                            {" "}
                            <Link onClick={scrollToTop} className="show-all" to={`/blog`}>
                                <FormattedMessage id="blog.showall" />
                            </Link>
                        </h2>
                    </div>
                    <div className="content-info col-12">
                        <OwlCarousel className='owl-theme owl-dot mx-auto' data-aos="fade-up" data-aos-duration="1000" {...options}>
                            {
                                articles?.map((t, k) => (
                                    <ArticleItemComponent
                                        key={k}
                                        {...t}
                                    />
                                ))
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
})
