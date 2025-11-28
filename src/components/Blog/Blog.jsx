import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
  return (
    <div className="p-4 mx-auto my-4 md:p-12 w-50 sm:w-[100%]">
      <div className="card bg-gray-700 shadow-md">
        <figure>
          <img src={blog.cover} alt="Shoes"/>
        </figure>
        <div className="card-body text-start">
          <div className="author lg:flex justify-between items-center">
            <img className="w-16 rounded-full" src={blog.author_img} alt="" />
            <h3>{blog.author}</h3>
            <button className="cursor-pointer" onClick={()=>handleBookMark(blog)}><FaBookmark size={25} />Bookmark</button>
          </div>
          <h2 className="card-title">{blog.title}</h2>
          <p>{blog.explanation}</p>
          <div className="lg:flex">
            {blog.hashtags.map((hash) => (
              <p key={hash[0]}>#_{hash}</p>
            ))}
          </div>
          <div className="flex">
            <button className="btn btn-primary"
            onClick={()=>handleMarkAsRead(blog.reading_time,blog.id)}>Mark as Read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;