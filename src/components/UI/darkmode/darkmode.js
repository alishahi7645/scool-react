import React,{useContext} from 'react';
import { useState } from 'react/cjs/react.development';
import './darkmode.css';
import darkmode from '../../../assets/images/darkmode.png'
import { Themecontext } from '../../../context/theme/theme';
const Darkmode = () => {
    const themecontext= useContext(Themecontext);
    const themeHandler=()=>{
        themecontext.ChangeTheme();
    }
    return (
        <div className="darkmode">
              <img src={darkmode} onClick={themeHandler}/>
        </div>
    );
}

export default Darkmode;
