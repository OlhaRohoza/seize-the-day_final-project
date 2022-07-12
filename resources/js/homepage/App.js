import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css'
import EntriesContext from './context/EntriesContext';
import { MainContent } from './components/MainContent'
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  const [entries, setEntries] = useState([]);

  return (

    <EntriesContext.Provider value={{ entries, setEntries }}>
      <Router>
        <Navbar />
        <div className='main--part'>
          <Sidebar />
          <MainContent />
        </div>
      </Router>
    </EntriesContext.Provider>

  );
}

export default App;
