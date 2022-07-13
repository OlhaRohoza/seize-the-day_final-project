import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import Logout from './pages/Logout';
import AppContext from './UserContext';
import axios from 'axios';


import './App.css'
import EntriesContext from './context/EntriesContext';
import { MainContent } from './components/MainContent'
import { BrowserRouter as Router } from 'react-router-dom';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Registration from './pages/Registration';
import Searchbar from './components/Searchbar';



function App() {

  const [user, setUser] = useState(null);
  const [entries, setEntries] = useState([]);

  const LoadUser = async () => {

    try {
      const data = await axios.get('/api/user');
      setUser(data.data)
    }
    catch (error) {
      setUser(null)

    }

  }
  useEffect(() => {
    LoadUser()

  }, []
  )

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <EntriesContext.Provider value={{ entries, setEntries }}>


        <div>

          <Router>

            <Navbar />
            <div className='main--part'>
              <Sidebar />
              <MainContent />
            </div>

            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/Logout" element={<Logout />} />

            </Routes>


          </Router>
          <div>
            <Sidebar />
          </div>
          <div>
            <Searchbar />
          </div>

        </div>
      </EntriesContext.Provider>
    </AppContext.Provider>


    // return (


    //   <Router>
    //     <Navbar />

    //   </Router>


  );
}

export default App;
