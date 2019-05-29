import React from 'react';
import './Button.scss';



const ActionButton = props =>{

    return (

        <button 
        onClick={e => props.testing(props.symbol)}
        className={props.large ? "basic basic--large " : 'basic basic--small'
        }>{props.symbol}</button>
    )
}

export default ActionButton;

