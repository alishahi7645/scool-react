import React, { useState, useContext } from 'react';
import Logo from '../../../components/logo/logo';
import Menuitems from '../menuitems/MenuItems';
import './sidedrawer.css';
import Button from '../../../components/UI/button/button';
import Backdrop from '../../../components/UI/backdrop/backdrop';
import { Authcontext } from '../../../context/Auth/autuContext';
import { Themecontext } from '../../../context/theme/theme';
import { useNavigate } from 'react-router';
const Sidedrawer = (props) => {
    let classes = ['sidedrawer', 'closed'];
    if (props.show) {
        classes = ['sidedrawer', 'open']
    }



    const [opensidrawer, setopensidrawer] = useState(false);
    const [showmodal, setshowmodal] = useState(false);
    const authcontext = useContext(Authcontext);

    const themecontext = useContext(Themecontext);
    const { Lightteme, Dark, Light } = themecontext;
    const theme = Lightteme ? Light : Dark;

    const modalHandler = () => {
        setshowmodal(!showmodal)
    }
    const modalClosed = () => {
        setshowmodal(false)
    }
    const drawerHandler = () => {
        setopensidrawer(true);
    }
    const closedrawer = () => {
        setopensidrawer(false);
    }

    const Navigate = useNavigate();
    const logout = () => {
        authcontext.dispatch({ type: 'logout' });
        if (!logout) {

            Navigate('/', { replace: true })
        }
    }
    let auth = false;
    const userInfo = JSON.parse(localStorage.getItem('user'));
    if (userInfo) {
        auth = true;
    }

    return (
        <React.Fragment>
            <Backdrop show={props.show} modalClosed={props.closedrawer} />
            <div className={classes.join(' ')} >
                <Logo height="10%" />
                <nav>
                    <Menuitems />
                </nav>
                <div className="buttonshow">
                    {auth ? <Button btnType="success" clicked={logout}>خروج</Button> : <Button btnType="success" clicked={modalHandler}>ورود</Button>}
                    {/* <Button btnType="success" clicked={() => alert('hello my frien')}>ورود</Button> */}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Sidedrawer;
