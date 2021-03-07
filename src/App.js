import React from 'react';
import './App.css';
import Navbar from './Navbar';


function App() {
  const title = 'Welcome to React App Practice'
  const subtitle = 'A blog mock-up using React'
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <h1>{ title }</h1>
        <h3>{ subtitle }</h3>
        <p></p>
      </div>
    </div>
  );
}

export default App;
