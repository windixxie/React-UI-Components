import React from 'react';
import ActionButton from './ActionButton'
import NumberButton from './NumberButton'
import './Button.scss';


const ButtonContainer = props =>{

    return (
    <>
        <div className="container button-container">
           <ActionButton testing={props.testing} large symbol={props.symbols[0]}/>
           <NumberButton testing={props.testing} red symbol={props.symbols[14]}/>
        </div>
        <div className="container button-container">
           <NumberButton testing={props.testing} basic symbol={props.symbols[8]}/>
           <NumberButton testing={props.testing} basic symbol={props.symbols[9]}/>
           <NumberButton testing={props.testing} basic symbol={props.symbols[10]}/>
           <NumberButton testing={props.testing} red symbol={props.symbols[13]}/>
        </div>
        <div className="container button-container">
           <NumberButton testing={props.testing} basic symbol={props.symbols[5]}/>
           <NumberButton testing={props.testing} basic symbol={props.symbols[6]}/>
           <NumberButton testing={props.testing} basic symbol={props.symbols[7]}/>
           <NumberButton testing={props.testing} red symbol={props.symbols[12]}/>
        </div>
        <div className="container button-container">
           <NumberButton testing={props.testing} basic symbol={props.symbols[2]}/>
           <NumberButton testing={props.testing} basic symbol={props.symbols[3]}/>
           <NumberButton testing={props.testing} basic symbol={props.symbols[4]}/>
           <NumberButton testing={props.testing} red symbol={props.symbols[11]}/>
        </div>
        <div className="container button-container">
           <ActionButton testing={props.testing} large symbol={props.zero}/>
           <NumberButton testing={props.testing} red symbol={props.symbols[15]}/>
        </div>
        </>
    )
}

export default ButtonContainer 