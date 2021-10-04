import { useEffect, useMemo, useState } from 'react';
import { getData } from '../../Extras/GetData/getData';
import { blog_data } from './data';

export const useFetchArticles = (language, props, pagination) => {
    const all_articles = getData({
        data: blog_data,
        language: language
    });
    const [articles, setArticles] = useState({ status: 'idle', list: [] });

    useEffect(() => {
        setArticles({ ...articles, status: 'loading' })
        let articlesMatched = all_articles
        let tag = props.match.params.tag
        if (tag) {
            articlesMatched = all_articles.filter(art => art.tags.includes(tag))
        }
        setArticles({
            status: 'success',
            list: articlesMatched.slice(
                pagination.page * pagination.page_size,
                (pagination.page + 1) * pagination.page_size
            )
        });
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props.match,
        pagination.page,
        pagination.page_size,
        all_articles
    ]);

    return [articles, all_articles.length];
}

const MAX_LENGTH = 4; // show the last MAX_LENGTH articles

export const useFetchLastArticles = (language) => {
    const all_articles = getData({
        data: blog_data,
        language: language
    })

    const nItems = all_articles.length >= MAX_LENGTH ? MAX_LENGTH : all_articles.length

    const articles = useMemo(() => {
        return all_articles.slice(
            all_articles.length - nItems,
            all_articles.length
        ).reverse()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        all_articles
    ]);

    return articles;
}


export const useFetchArticleData = (language, props) => {
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
            let response = await fetch(`${article.post}`); // Gets a promise
            let innerHTML = await response.text();
            innerHTML && setContent({ __html: innerHTML })
        } catch (err) {
            console.log('Fetch error:' + err); // Error handling
        }
    }

    useEffect(() => {
        setArticle({ ...article, status: 'loading' })
        let url = props.match.params.article_path
        let articlesMatched = articles.filter(art => art.post.includes(`/posts/${url}/`))
        if (articlesMatched.length === 1) {
            setArticle({
                status: 'success',
                ...articlesMatched[0]
            })

        } else {
            setArticle({ ...article, status: 'failure' })
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match,
        articles])

    useEffect(() => {
        article.status === 'success' && fetchMyDocument()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [article])

    return [article, content];
}