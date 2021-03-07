import React from 'react';
import { useState, useEffect } from 'react';
import Bloglist from './Bloglist'

const Homepage = () => {

  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  fetch('http://localhost:8000/blogs')
  .then(res => {
    return res.json()
  })
  .then(data => {
    setBlogs(data);
    setIsLoading(false);
  });
}, []);

  return (
    <div className='home'>
      { isLoading && <div>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title='All Blogs' />}
      {/* <Bloglist blogs={blogs.filter((blog) => blog.author === 'Jane Austen')} title="Jane's Blogs"/> */}
    </div>
  );
}

export default Homepage