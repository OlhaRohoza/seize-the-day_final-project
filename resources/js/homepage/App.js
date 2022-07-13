import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import Logout from './pages/Logout';
import AppContext from './UserContext';
import axios from 'axios';


import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Registration from './pages/Registration';
import Searchbar from './components/Searchbar';



function App() {

  const [user,setUser] = useState(null);

  const  LoadUser= async()=>{
    
    try {
      const data = await axios.get('/api/user');
      setUser(data.data)
    }
  catch(error) {
    setUser(null)
     
}
        
  }
  useEffect (()=>{
    LoadUser()

  },[]
   )

  return (
    <AppContext.Provider value={ { user, setUser}  }>
      <div>
          
            <Router>
              
                <Navbar />
        
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/registration" element={<Registration/>}/>
                  <Route path="/Logout" element={<Logout/>}/>
                  
                </Routes>
              
              
            </Router>
            <div>
              <Sidebar/>
            </div>
            <div>
              <Searchbar />
            </div>
          
      </div>
    </AppContext.Provider>
  );
}

export default App;
