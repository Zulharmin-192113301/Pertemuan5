import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './App.css';
import Home from './views/Home/Home';
import About from './views/About/About';
import Help from './views/Help/Help';


class App extends Component {
  constructor() {
    super();

    this.state = {
      tampil : 'home'
    }
  }

  render() {
    const Tampil = ()=> {
      if (this.state.tampil == 'home')
      return <Home nama="Budi Suryana" />
      else if (this.state.tampil == 'about')
      return <About/>
      else if (this.state.tampil == 'help')
      return <Help/>
    }
  
  return (
    <div>
        <nav className='navbar navbar-expand-sm bg-dark navbar-secondary'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a onClick={()=> this.setState({tampil : 'home'})} className='nav-link' href='#'>
                Home
              </a>
            </li>

            <li className='nav-item'>
              <a onClick={()=> this.setState({tampil : 'about'})} className='nav-link' href='#'>
              About
              </a>
            </li>

            <li className='nav-item'>
              <a onClick={()=> this.setState({tampil : 'help'})} className='nav-link' href='#'>
               Help 
              </a>
            </li>

          </ul>
        </nav>

        <Tampil />

    </div>
  )

    }
  }


export default App;