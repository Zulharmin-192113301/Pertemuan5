import React, { Component } from 'react';
import Card from './Input.css';

export default class Input extends Component {
    constructor(){
        super();

        this.state ={status : ''}
    }

    render() {
        return (
            <div className='input'>
                <input type='text' name='status' placeholder='Masukkan Status kamu' onChange={(ev)=> this.setState({status :ev.target.value})} />
                <p>Status kamu : {this.state.status}</p>
            </div>
        )
    }
}