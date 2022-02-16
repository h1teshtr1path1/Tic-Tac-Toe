// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Square from './components/Square';

function App() {
  var size = 5
  return (
    <div className="App">
      
      <Square size = {size}/>
    </div>
  );
}

export default App;
