import React from 'react';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';


import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Registration from './pages/Registration';
import Searchbar from './components/Searchbar';



function App() {
  return (
<div>
     
      <Router>
        
          <Navbar />
  
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/registration" element={<Registration/>}/>
            
          </Routes>
        
        
      </Router>
      <div>
        <Sidebar/>
      </div>
      <div>
        <Searchbar />
      </div>
    
</div>
  );
}

export default App;
