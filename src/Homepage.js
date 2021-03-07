import React from 'react';
import { useState } from 'react';


const Homepage = () => {

  const [blogs, setBlogs] = useState([
    { title: "First Blog", body: "It was the best of times, it was the worst of times", author: "Sarah", id:1 },
    { title: "Second Blog", body: "The story so far: in the beginning, the universe was created. This has made a lot of people very angry and been widely regarded as a bad move", author: "Sarah", id:2 },
    { title: "Third Blog", body: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife", author: "Sarah", id:3 }
  ]);

  return (
    <div className='home'>
    {blogs.map((blog) => (
      <div className='preview' key={blog.id}>
        <h2>{ blog.title }</h2>
        <p>By { blog.author }</p>
      </div>
    ))}
    </div>
  );
}

export default Homepage