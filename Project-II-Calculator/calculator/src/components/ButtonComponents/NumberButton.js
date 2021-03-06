import React from 'react';
import './Button.scss';


const NumberButton = props => {
    return (
        <button 
        onClick={e => props.testing(props.symbol)}
        className={
            props.red ? 'basic basic--red' : 'basic basic--small'
        }>{props.symbol}</button>
    )
}

export default NumberButton;