import React from 'react';
import './App.css';
import { IoLogoPlaystation } from 'react-icons/io'

function App() {
  return (
    <div className="App">
      <header className='header'>
        <div className='logo-box'>
          <IoLogoPlaystation className='logo'/> 
        </div>
        <div className='text-box'>
          <h1 className='heading-primary'>
            <span className='heading-primary-main'>PlayStation</span>
            <span className='heading-primary-sub'>is where you cool your mind</span>
          </h1>
            <button className='btn btn-white btn-animated'>Discover our games</button>
        </div>
      </header> 
    </div>
  );
}

export default App;
