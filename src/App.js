import React from 'react';

import Exercise from './exercises/0';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {Exercise === null ? (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Select an exercise to import in <code>src/App.js</code> and save to reload.
          </p>
        </header>
      ) : <Exercise />}
    </div>
  );
}

export default App;
