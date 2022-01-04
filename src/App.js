import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

function Pesan() {
   return <p>Ini adalah Pesannya</p>
}

class App extends Component {
  render(){
    return (
      <div>
        <Pesan/>
      </div>
    )
  }
}

export default App;