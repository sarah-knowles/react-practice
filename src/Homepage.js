import React from 'react';
import Bloglist from './Bloglist'
import useFetch from './useFetch';

const Homepage = () => {

  const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

  return (
    <div className='home'>
      { error && <div>{error}</div>}
      { isLoading && <div>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title='All Blogs' />}
      {/* <Bloglist blogs={blogs.filter((blog) => blog.author === 'Jane Austen')} title="Jane's Blogs"/> */}
    </div>
  );
}

export default Homepage