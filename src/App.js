import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Mainarticle from './components/Mainarticle';
import Button from './components/Button';

function App() {
   
  return (
    <header class="App-header">
      <div class="container">
        <Navbar />
        <Title />
        <Mainarticle />
        <Button />
      </div>
    </header>
  );
}

export default App;
