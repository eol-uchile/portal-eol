import React from 'react';
import { headers_teaching_assistance } from '../Content/Header/data';
import { HeaderComponent } from '../Content/Header/HeaderComponent';
import { ArticlesListComponent } from '../Content/Blog/ArticlesListComponent';
import { VideosListComponent } from '../Content/Blog/VideosListComponent';

export const BlogPage = (props) => {
    return (
        <>
            <HeaderComponent headers_data={headers_teaching_assistance} />
            <ArticlesListComponent {...props}/>
            <VideosListComponent />
        </>
    )
}
