import React from 'react';
import { useState, useEffect } from 'react';
import Bloglist from './Bloglist'

const Homepage = () => {

  const [blogs, setBlogs] = useState([
    { title: "First Blog", body: "It was the best of times, it was the worst of times", author: "Charles Dickens", id:1 },
    { title: "Second Blog", body: "The story so far: in the beginning, the universe was created. This has made a lot of people very angry and been widely regarded as a bad move", author: "Douglas Adams", id:2 },
    { title: "Third Blog", body: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife", author: "Jane Austen", id:3 }
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

useEffect(() => {
  console.log('use effect ran')
});

  return (
    <div className='home'>
      <Bloglist blogs={blogs} title='All Blogs' handleDelete={handleDelete}/>
      <Bloglist blogs={blogs.filter((blog) => blog.author === 'Jane Austen')} title="Jane's Blogs"/>
    </div>
  );
}

export default Homepage