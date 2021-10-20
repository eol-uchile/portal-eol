import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

export const ArticleItemComponent = ({ post, img, img_large, tags, title, date, is_first }) => {
    const [redirect, setRedirect] = useState(false);
    return (
        <div
            className="article"
            style={{
                backgroundImage: `url(${is_first ? img_large: img})`,
            }}
            onClick={() => setRedirect(true)}
        >
            <div
                className="article-content"
            >
                {tags.map(t => (<span>{t}</span>))}
                <h2>{title}</h2>
                <p>{date}</p>
            </div>
            {
                redirect 
                ?
                <Redirect push to={`/blog/${post.slice(1, post.indexOf('/post_'))}`} />
                : 
                null
            }
        </div>
    )
}
