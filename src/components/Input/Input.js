import React, { Component } from 'react';
import './Input.css';

export default class Input extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='input'>
                <input type='text' name='namamu' placeholder='Masukkan nama kamu' onChange={(ev)=> this.props.getValues(ev.target.name, ev.target.value)} />
                <input type='text' name='status' placeholder='Masukkan status kamu' onChange={(ev)=> this.props.getValues(ev.target.name, ev.target.value)} />
            </div>
        )
    }
}