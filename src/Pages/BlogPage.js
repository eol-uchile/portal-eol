import React, { useState } from 'react';
import { headers_teaching_assistance } from '../Content/Header/data';
import { HeaderComponent } from '../Content/Header/HeaderComponent';
import { ArticlesComponent } from '../Content/Blog/ArticlesComponent';

export const BlogPage = () => {
    return (
        <>
            <HeaderComponent headers_data = { headers_teaching_assistance } />
            <ArticlesComponent/>
        </>
    )
}
