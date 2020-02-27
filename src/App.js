import React from 'react';
import FileChooser from './components/FileChooser';
import './App.css';
import Graph from './components/Graph';


function App() {
  return (
    <div className="App">
      VRAM Software Web App - PoC 1
      <Graph />
      <FileChooser />
    </div>
  );
}

export default App;
