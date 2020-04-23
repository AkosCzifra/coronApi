import React from 'react';
import './App.css';
import IndexPage from './pages/index.js';
import { StatsProvider } from './context/StatsContext.js';

function App() {
  return (
    <div className="App">
      <StatsProvider>
        <IndexPage />
      </StatsProvider>
      
    </div>
  );
}

export default App;
