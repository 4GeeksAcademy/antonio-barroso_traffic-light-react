import { useState } from 'react';
import './App.css';
import TrafficLight from './components/TrafficLight';
import CrossLight from './components/CrossLight';

function App() {
  return (
    <>
      <div className="app-container">
        <TrafficLight />
        <CrossLight />
      </div>
    </>
  );
}

export default App;
