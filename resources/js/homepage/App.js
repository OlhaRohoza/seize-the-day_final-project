import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'



function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <p>Some information</p>
    </>
  );
}

export default App;
