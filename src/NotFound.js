import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='NotFound'>
      <h2>Page Not Found...</h2>
      <Link to='/'>Take me Home</Link>
    </div>
  );
}

export default NotFound;