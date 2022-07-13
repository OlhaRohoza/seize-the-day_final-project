import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import Logout from './pages/LogoutButton';
import AppContext from './UserContext';
import axios from 'axios';

import './App.css'
import EntriesContext from './context/EntriesContext';
import { MainContent } from './components/MainContent'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'




function App() {

  const [user, setUser] = useState(null);
  const [entries, setEntries] = useState([]);

  const loadUser = async () => {

    try {
      const data = await axios.get('/api/user');
      setUser(data.data)
    }
    catch (error) {
      setUser(null)

    }

  }
  useEffect(() => {
    loadUser()

  }, []
  )

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <EntriesContext.Provider value={{ entries, setEntries }}>

        <Router>

          <div>

            <Navbar />

              
              <div className='main--part'>
                {
                  !!user && <Sidebar />
                }
                
                <MainContent />
              </div>


          </div>

        </Router>
      </EntriesContext.Provider>
    </AppContext.Provider>


    // return (


    //   <Router>
    //     <Navbar />

    //   </Router>


  );
}

export default App;
