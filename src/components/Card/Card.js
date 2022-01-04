import React from 'react';
import './Card.css';

export default class Card extends React.Component{
    render() {
        return (
            <div className='kartu'>
                <div className='kepala-kartu'>Kartu Ku</div>
                <div className='badan-kartu'>{this.props.children}</div>
            </div>
        )
    }
}
