import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ItemListComponent = ({ post, title, img }) => {
    return (
        <Card >
            <Card.Img variant="top" src={img} />
            <Card.Body >
                <Card.Title>{title}</Card.Title>
                <div >
                    <Link className="show-more" to={`/blog/${post.slice(1, post.indexOf('/post_'))}`}>
                        <FormattedMessage id="blog.showmore" />
                    </Link>
                </div>
            </Card.Body>
        </Card>
    )
}
