import React from 'react';


const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>Practice Blog</h1>
      <div classNmae='links'>
        <a href='/'>Home</a>
        <a href='/create'>New Blog</a>
      </div>
    </nav>
  );
}

export default Navbar;