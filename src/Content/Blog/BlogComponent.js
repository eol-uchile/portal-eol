import { blog_data } from './data';
import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ItemListComponent } from './ItemListComponent';
import { SeparatorTopComponent } from '../../Extras/Separators/SeparatorTopComponent';
import { getData } from '../../Extras/GetData/getData';
import { LanguageContext } from '../../Extras/Language/LanguageContext';

export const BlogComponent = React.memo(() => {
    const { language } = useContext(LanguageContext);
    const articles = getData({
        data: blog_data,
        language: language
    });
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
        <section id="blog">
            <div className="container main-container text-center">
                <div className="row">
                    <div className="col-12">
                        <h2 className="content-header" data-aos="fade-up">
                            <FormattedMessage id="blog.header" />
                        </h2>
                    </div>
                    <div className="content-info col-12">
                        <OwlCarousel className='owl-theme owl-dot mx-auto' data-aos="fade-up" data-aos-duration="1000" {...options}>
                            {articles?.map((t, k) => (
                                <ItemListComponent
                                    key={k}
                                    {...t}
                                />
                            ))}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
})
