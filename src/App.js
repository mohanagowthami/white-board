import React from 'react';
import logo from './logo.svg';
import './App.css';
import WhiteBoard from './components/whiteBoard';
import Tools from './components/tools';
import History from './components/history';
function App() {
  return (
    <div id='main'>
      <div id='container'>
        <Tools />
        <WhiteBoard />
      </div>
      <History />
    </div>
  );
}

export default App;
