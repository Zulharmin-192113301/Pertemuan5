import React from 'react';

export default class Home extends React.Component{
    render(){
        return (
          <div>
            <h2>Judul Halaman Home</h2>
            <p>Hai namaku {this.props.nama}</p>
          </div>
        )
      }

}