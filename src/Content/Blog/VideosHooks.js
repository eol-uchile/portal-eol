import { useEffect, useState } from 'react';
import { blog_videos } from './data';

export const useFetchVideos = (pagination) => {
    const all_videos = blog_videos;
    const [videos, setVideos] = useState({ status: 'idle', list: [] });

    useEffect(() => {
        setVideos({ ...videos, status: 'loading' })
        setVideos({
            status: 'success',
            list: all_videos.slice(
                pagination.page * pagination.page_size,
                (pagination.page + 1) * pagination.page_size
            )
        });
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pagination.page,
        pagination.page_size,
        all_videos
    ]);

    return [videos, all_videos.length];
}

export const useHeightTweets = (nVideos) => {
    const [height, setHight] = useState({status: 'idle', size: 450});

    useEffect(() => {
        setHight({ ...height, status: 'loading' })
        setHight({status: 'success', size: height.size*nVideos});
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        nVideos
    ]);

    return [height];
}