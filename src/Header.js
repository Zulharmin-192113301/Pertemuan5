import React from 'react';
import Home from './views/Home/Home';
import About from './views/About/About';
import Help from './views/Help/Help';



export default class Header extends React.Component{

 constructor(props){
 super(props);
 this.state = {menu : this.props.menu}
 }
 
 render(){

    const Tampil = ()=> {
        if (this.state.tampil == 'home')
        return <Home />
        else if (this.state.tampil == 'about')
        return <About/>
        else if (this.state.tampil == 'help')
        return <Help/>
    }

    return(
 <div>

 <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <a onClick={()=> this.setState({menu : 'home'})} className='nav-link' href='#'>
                    Home
                  </a>
                </li>
    
                <li className='nav-item'>
                  <a onClick={()=> this.setState({menu : 'about'})} className='nav-link' href='#'>
                  About
                  </a>
                </li>
    
                <li className='nav-item'>
                  <a onClick={()=> this.setState({menu : 'help'})} className='nav-link' href='#'>
                   Help 
                  </a>
                </li>
    
              </ul>
            </nav>

 </div>
 )
 }
}