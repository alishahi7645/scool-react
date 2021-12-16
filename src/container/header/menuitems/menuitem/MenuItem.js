import React from 'react';
import './MenuItem.css';
import { Link,NavLink,isActive } from 'react-router-dom';
const Menuitem = (props) => {
    let classes=[];
    if(props.active){
        classes.push('active')
    }
    return (
        <li className="menu-item">
            <NavLink to={props.link} 
                style={({isActive})=>{
                    return{
                        fontWeight:"bold",
                        color: isActive ? "#c00" : ""
                    }
                }}
            >
                {props.children}
            </NavLink>

        </li>
    );
}

export default Menuitem;
