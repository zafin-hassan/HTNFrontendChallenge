import React from 'react';
import Navbar from './components/Navbar'
import Calendar from './components/Calendar'

import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <Navbar account=""/> 

        <h1>Event Calendar</h1>
        <h3>Saturday, March 13</h3>
      </div>
      <Calendar />
    </div>
  );
}

export default App;
