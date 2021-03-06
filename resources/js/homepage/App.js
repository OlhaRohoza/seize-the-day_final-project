import React, { Fragment, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import Logout from './pages/LogoutButton';
import AppContext from './UserContext';
import axios from 'axios';

import './App.css'
import { MainContent } from './components/MainContent'

import { BrowserRouter as Router } from 'react-router-dom'
import { Footer } from './components/Footer';




function App() {

  const [user, setUser] = useState(null);
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

      <Router>

        <Fragment>

          <Navbar />
          <div className='main--part'>
            {
              !!user &&
              <Sidebar />
            }
            <MainContent />
          </div>
          <Footer />
        </Fragment>

      </Router>

    </AppContext.Provider>

  );
}

export default App;
