
import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Home from './views/Home/Home';

function Pesan() {
  return <p>Ini adalah Pesannya</p>
}

class App extends Component {
  render(){
    return (
      <div>
        <Pesan/>
        <Home />
      </div>
    )
  }
}

export default App;