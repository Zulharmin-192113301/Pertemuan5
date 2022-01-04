import React, { Component } from 'react';
import Card from './components/Card/Card';
import Input from './components/Input/Input';
import './css/bootstrap.min.css';
import Home from './views/Home/Home';
import About from './views/About/About';
import Help from './views/Help/Help';


export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            tampil : 'home',
            namamu : '',
            status :''
        }
    }

    render(){    
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
            <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
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
    
        
        
            <React.Fragment>
                <h2 style={{width:'550px', margin:'auto', textAlign:'center', color:'#4d90fe'}}>Sistem Informasi E Biz</h2>

                <Input getValues={(name,value)=> this.setState({[name] : value})}/>
            
                <Card>
                    {this.state.namamu}
                    <p>{this.state.status}</p>
                </Card> 



            </React.Fragment>

            </div>
        );
    }

}
