import React from 'react';

const Bloglist = ({ blogs, title }) => {
 
  return (
    <div className='bloglist'>
      <h2>{ title }</h2>
      {blogs.map((blog) => (
      <div className='preview' key={blog.id}>
        <h2>{ blog.title }</h2>
        <p>By { blog.author }</p>
    
    </div>
    ))}
    </div>
  )
}

export default Bloglist