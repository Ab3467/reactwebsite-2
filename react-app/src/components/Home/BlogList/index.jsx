import React from 'react';
import BlogItem from '../BlogList/blogitem/index';

const BlogList = ({ blogs }) => {
    return (
        <div className='blogList-wrap'>
            {blogs.map((blog) => (
                <BlogItem blog={blog} />
            ))}
        </div>
    );
};

export default BlogList;
