import React from 'react';
import './MenuItems.css';
import Menuitem from './menuitem/MenuItem';
import { Link, isActive } from 'react-router-dom';
const Menuitems = (props) => {

    return (
        <ul className="menu-items" >
            <Menuitem link="/">
                صفحه اصلی
            </Menuitem>
            <Menuitem link={{
                pathname:"/add-student",
                search:"?sort=name",
                hash:"#the-hash",
                state:{fromDashboard:true}
            }} >
                اضافه کردن دانش آموز
            </Menuitem>

        </ul>
        // <nav className="menu-items">
        //     <Link to="/forms">forms</Link> | {' '}
        //     <Link to="/mailbox">email</Link>
        // </nav>
    );
}

export default Menuitems;
