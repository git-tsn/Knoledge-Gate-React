import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookMark, handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{  // after every load it executes Data for 1 time
        fetch('blogs.json')
        .then( res => res.json())
        .then( data => setBlogs(data))
    }, [])

    // console.log(blogs);

    return (
        <div>
            <h1 className="text-3xl my-12">Blogs : {blogs.length}</h1>
            <hr className="border-indigo-500" />

            <div className="all-blogs lg:grid grid-cols-2">
                {
                    blogs.map( blog => <Blog key={blog.id} blog={blog}
                         handleBookMark={handleBookMark}
                         handleMarkAsRead={handleMarkAsRead}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;