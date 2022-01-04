import React from 'react';

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {nama : this.props.nama}
  }
  render() {
    return (
      <div>
          <h2>ini adalah Judul halaman home</h2>
          <p>Hai namaku adalah {this.state.nama}</p>
          <button onClick={()=> this.setState({nama: "Yanto"})}>Ganti nama nya</button>
      </div>
    )
  }
}
