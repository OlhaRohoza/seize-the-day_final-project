import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css'



function App() {
  return (
    <>
      <Navbar />
      <div className='main--part'>
        <Sidebar />
      </div>

      <p>Some information</p>
    </>
  );
}

export default App;
