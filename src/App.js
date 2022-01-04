import React, { Component } from 'react';
import './App.css';

function bilanghai(){
  return "Hai Dunia"
}

class App extends Component {

  bilanghalo() {
    return " Hallo Dunia"
  }

  render(){
    return (
      <>
      <p>Bilang Hai : <b>{bilanghai()}</b></p>
      <p>Bilang Hallo : <b>{this.bilanghalo()}</b></p>
      </>
    )
  }


}

export default App;