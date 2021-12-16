import React from 'react';
import Logo from '../../assets/images/Logo.svg'
import './logo.css'
const Pogo = (props) => {
    return (
        <div className="logo" style={{height:props.height}}>
            <img src={Logo}/>
        </div>
    );
}

export default Pogo;
