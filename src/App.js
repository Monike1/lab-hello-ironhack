import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Mainarticle from './components/Mainarticle';
import Button from './components/Button';
import Card from './components/Card';


function App() {
   
  return (
    <div class="layout">
      <header class="App-header">
        <div class="container">
          <Navbar />
          <Title />
          <Mainarticle />
          <Button />
        </div>
      </header>
      <section class="cards-container">
        <Card class="card" image="icons/icon1.png" alt="Icon 1" title="Declarative" paragraph="React makes it painless to create interactive UIs"/>
        <Card class="card" image="icons/icon2.png" alt="Icon 2" title="Components" paragraph="Some text"/>
        <Card class="card" image="icons/icon3.png" alt="Icon 3" title="Single-Way" paragraph="Some text"/>
        <Card class="card" image="icons/icon4.png" alt="Icon 4" title="JSX" paragraph="Some text"/>
      </section>
   </div>
  );
}

export default App;
