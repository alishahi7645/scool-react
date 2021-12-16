import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import './toolbar.css'
import Pogo from '../../../components/logo/logo';
import Menuitems from '../menuitems/MenuItems';
import Button from '../../../components/UI/button/button';
import Modal from '../../../components/UI/modal/modal';
import Signin from '../../../components/signin/signin';
import { useState } from 'react/cjs/react.development';
import Sidedrawer from '../sidedrawer/sidedrawer';
import {FaInbox, FaRegCalendarAlt, FaRegCalendar, FaChevronDown,FaBars } from 'react-icons/fa';
import {Authcontext} from '../../../context/Auth/autuContext';
import {Themecontext} from '../../../context/theme/theme';
const Toolbar = () => {
    const [opensidrawer, setopensidrawer]=useState(false);
    const [showmodal, setshowmodal] = useState(false);
    const authcontext = useContext(Authcontext);

    const themecontext = useContext(Themecontext);
    const {Lightteme,Dark,Light} = themecontext;
    const theme = Lightteme ? Light : Dark;

    const modalHandler = () => {
        setshowmodal(!showmodal)
    }
    console.log(showmodal);
    const modalClosed = () => {
        setshowmodal(false)
    }
    
    const drawerHandler =()=>{
        setopensidrawer(true);
    }
    const closedrawer=()=>{
        setopensidrawer(false);
    }

    const Navigate = useNavigate();
    const logout=()=>{
        authcontext.dispatch({type:'logout'});
        if(!logout){
            
            Navigate('/', {replace:true} )
        }
    }
    let auth =false;
    const userInfo = JSON.parse(localStorage.getItem('user'));
    if(userInfo){
        auth=true;
    }

    
    return (
        <header className="toolbar" style={{background:theme.bg,color:theme.syntax}}>
            <Sidedrawer show={opensidrawer} closedrawer={closedrawer}/>
            <div onClick={drawerHandler} className="icon"> <FaBars /> </div>
            <Pogo height="90%" />
            <nav className="shownav">
                <Menuitems />
            </nav>
            <div className="shownav">
                {auth?<Button btnType="success" clicked={logout}>خروج</Button>:<Button btnType="success" clicked={modalHandler}>ورود</Button>}
            </div> 


            <Modal
                show={showmodal}
                modalClosed={modalClosed}
            >
                <Signin />
            </Modal>

        </header>
    );
}

export default Toolbar;
