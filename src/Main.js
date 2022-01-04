
import React, { Component } from 'react';
import Card from './components/Card/Card';
import Input from './components/Input/Input';


export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            namamu : '',
            status :''
        }
    }

    render(){
        return (
            <React.Fragment>
               <h2 style={{width: '550px', margin : 'auto', textAlign : 'center', color :'#4d90fe'}}>
            Sistem Informasi E-biz
            </h2>
            
            <Input getValues={(name, value)=> this.setState({[name] : value}) }/>
 
            <Card.Container>
                <Card.Header>{this.state.your_name}</Card.Header>
                <Card.Body> <p>{this.state.status}</p> </Card.Body>
            </Card.Container>

            </React.Fragment>


        );
    }

}