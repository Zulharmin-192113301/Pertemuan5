import React, { Component } from 'react';
import './App.css';
import Home from './views/Home/Home';

function Pesan(props) {
  return <p>Hai {props.nama}</p>
}

class App extends Component {
  render(){
    return (
      <div>
        <Pesan nama='Budi'/>
        <Home nama='Doni'/>
      </div>
    )
  }
}

export default App;