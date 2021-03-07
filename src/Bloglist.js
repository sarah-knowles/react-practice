import React from 'react';

const Bloglist = ({ blogs, title, handleDelete }) => {
 
  return (
    <div className='bloglist'>
      <h2>{ title }</h2>
      {blogs.map((blog) => (
      <div className='preview' key={blog.id}>
        <h2>{ blog.title }</h2>
        <p>By { blog.author }</p>
        <button className='deleteButton' onClick={() => handleDelete(blog.id)}>Delete</button>
    </div>
    ))}
    </div>
  )
}

export default Bloglist