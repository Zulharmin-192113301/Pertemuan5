import React, { Component } from 'react';
import Card from './components/Card/Card';
import Input from './components/Input/Input';
import Header from './Header';
import './css/bootstrap.min.css';




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
    
        return (

            <div>
               <Header menu='home'/>      
      
        
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