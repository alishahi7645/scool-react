import React,{useContext} from 'react';
import App from '../App';
import { useEffect } from 'react/cjs/react.development';
import Button from '../components/UI/button/button';
import './styles/Editstudent.css'
import { useLocation, useParams,useNavigate } from 'react-router-dom';
import { Authcontext } from '../context/Auth/autuContext';
const Editstudent = (props) => {

    const { authenticated } = useContext(Authcontext);
    
    const Navigate = useNavigate();
    useEffect(()=>{
        if(!authenticated){
            alert('لطفا برای ویرایش دانش آموز وارد حساب کاربری خود شوید')
            Navigate('/', {replace:false} )
        }
    },[]);


    const editstudent = () => {
        alert('edited')
    }
    const match = useParams();
    const locaition = useLocation();
    console.log(props.locaition);
    console.log(locaition);
    console.log(match);
    return (
        <div className="newstudent">
            <h1>ویرایش دانش آموز</h1>
            <label>: نام و نام خانوادگی</label>
            <input type="text" />

            <label>: کلاس</label>
            <input type="text" />

            <label>: شماره تلفن</label>
            <input type="number" />

            <label>: ایمیل</label>
            <input type="email" />
            <br />
            <Button clicked={editstudent} btnType="success">ویرایش</Button>
        </div>
    );
}

export default Editstudent;
