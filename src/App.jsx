import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Blogs from "./components/Blogs/Blogs";

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookMark = (blog) => {
    setBookmarked([...bookmarked, blog]);
  };
  
  const handleMarkAsRead = (time, id) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    handleRemoveFromBookmark(id);
  }

  const handleRemoveFromBookmark = (id) => {
    const remainingBookmark = bookmarked.filter((mark)=>mark.id !== id);
    setBookmarked(remainingBookmark);
  }

  return (
    <>
      <Navbar></Navbar>

      <div className="main-container md:flex space-y-12 text-center gap-8 m-4 sm:m-8 mt-8">
        <div className="left-container border-2 border-indigo-500 shadow-lg rounded-4xl">
          <Blogs key={bookmarked.id} handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
        <div className="right-container border-2 border-indigo-500 shadow-lg rounded-4xl lg:w-[30%]">
          <div className="my-8 text-xl space-y-4">
            <h1>Reading Time : {readingTime}</h1>
            <h1>Bookmarked count : {bookmarked.length}</h1>
          </div>
          <hr className="border-indigo-500" />

          <div className="m-8 mx-16 space-y-4">
            {bookmarked.map((marked) => (
              <p 
              className="bg-gray-700 text-teal-300 p-4 text-lg border-2 
              border-blue-500 shadow-lg rounded-2xl" key={marked.id}>{marked.title}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
