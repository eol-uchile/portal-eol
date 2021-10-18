import React, { useState } from 'react';
import { useFetchVideos, useHeightTweets } from './VideosHooks';
import { FormattedMessage } from 'react-intl';
import { VideoItemComponent } from './VideoItemComponent';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { SeparatorTopComponent } from '../../Extras/Separators/SeparatorTopComponent';
import { Button } from 'react-bootstrap';

const LOAD_MORE = 2

export const VideosListComponent = () => {
    const [pagination, setPagination] = useState({
        page: 0,
        page_size: 1,
    });
    const [videos, total] = useFetchVideos(pagination);
    const [timeline] = useHeightTweets(pagination.page_size)

    return (
        <section id="videos">
            <div className="container main-container text-center">
                <div className="row">
                    <div className="col-12">
                        <h2 className="content-header" data-aos="fade-up">
                            <FormattedMessage id="videos.header" />
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="content-info col-8">
                        {
                            videos.status === 'loading' ?
                                <div className="d-flex justify-content-center separator-margin">
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Cargando...</span>
                                    </div>
                                </div>
                                :
                                videos.status === 'success' && videos.list.length > 0 ?
                                    <>
                                        <div className="row">
                                            {
                                                videos.list.map((t, k) => (
                                                    <div className="content-info col-12" data-aos="fade-up" data-aos-duration="1000" key={k}>
                                                        <VideoItemComponent
                                                            url={t}
                                                        />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        {videos.list.length < total &&
                                            <div className="row">
                                                <div className="col-12" data-aos="fade-up" data-aos-duration="1000">
                                                    <Button className="show-more" onClick={() => setPagination({ ...pagination, page_size: pagination.page_size + LOAD_MORE })}><FormattedMessage id="videos.showmore" /></Button>
                                                </div>
                                            </div>}
                                    </>
                                    :
                                    <div data-aos="fade-up" data-aos-duration="1000"><FormattedMessage id="videos.empty" /></div>
                        }
                    </div>
                    <div className="content-info col-4">
                        {timeline.status === 'loading' ?
                            <div className="d-flex justify-content-center separator-margin">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Cargando...</span>
                                </div>
                            </div>
                            :
                            timeline.status === 'success' ?
                                <TwitterTimelineEmbed
                                    sourceType="profile"
                                    screenName="VTI_Uchile"
                                    options={{ height: timeline.size }}
                                />
                                : <div data-aos="fade-up" data-aos-duration="1000"><FormattedMessage id="tweets.error" /></div>
                        }
                    </div>
                </div>
            </div>
            <SeparatorTopComponent />
        </section>
    )
}
