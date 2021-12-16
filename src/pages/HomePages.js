import React, { useState, useEffect, useRef, useContext } from 'react';
import Student from '../components/student/student'
import Button from '../components/UI/button/button';
import newstudent from '../components/student/newstudent/newstudent';
import { useLocation, useParams, useNavigate } from 'react-router';
import axios from 'axios';
import student from '../components/student/student';
import { Authcontext } from '../context/Auth/autuContext';
import { Studentcontext } from '../context/student/studentcontex';
const Homepages = (props) => {
    const { authenticated } = useContext(Authcontext);
    const inputEl = useRef(null);
    const [searchBarValue, setSearchBarValue] = useState('');
    const { dispatch, studentsState } = useContext(Studentcontext);
    console.log(studentsState);

    const searchFilterFunction = (event) => {
        const itemData = arrayHolder.filter((item) => {
            const itemData = item.name.toUpperCase();
            const textData = event.target.value.toUpperCase();
            return itemData.indexOf(textData) > -1

        })

        setSearchBarValue(event.target.value);
    }


    const [arrayHolder, setarrayHolder] = useState([]);
    const [loading, setloading] = useState(false);
    const [toggle, settoggle] = useState(false);

    const [errormessage , seterrormessage] =useState(''); 
    useEffect(() => {
        // setarrayHolder(studentsState);
        inputEl.current.focus();
        if(authenticated){
            fetch('http://192.168.1.109/student/showStudent.php')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: 'fetch', payload: responseJson })
                setarrayHolder(responseJson);
                // dispatch({type:'fetch',payload:responseJson});
                // setarrayHolder(responseJson);
            })
        }else{
            seterrormessage('برای مشاهده اطلاعات دانش آموز ابتدا وارد حساب کاربری خود شوید');
        }
    }, []);
    useEffect(() => {

    }, [studentsState])


    const deletStudents = (id) => {
        fetch('http://192.168.1.109/student/deleteStudent.php', {
            method: 'POST',
            headers: {
                'Accept': 'applicaion/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                student_id: id
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: 'remove', id: id })
            }).catch((error) => {
                alert(error)
            })
    }
    const toggleHandler = () => {
        console.log(toggle);
        settoggle(!toggle);
    }
    const Edited = (id, name, phoneNumber, classNumber, email) => {
        console.log(Edited);
        const locaition = useLocation();

        props.history.push(
            {
              pathname:'/student/'+id,
              state:{
                id:id,
                name:name,
                classNumber:classNumber,
                phoneNumber:phoneNumber,
                email:email
              }
            }
            );

    }

    return (
        <React.Fragment>
            <input placeholder="search student by students name" type="text" value={searchBarValue} onChange={searchFilterFunction} ref={inputEl} style={{ marginTop: '60px' }} />
            <Button clicked={toggleHandler} btnType="black">
                تغییر وضعیت نمایش دانش آموزان
            </Button>
            <p style={{color:"red" , fontSize:"35px"}}>{errormessage}</p>
            <Student
                Studentlist={studentsState}
                // nameChange={nameChangeHandler}
                // classNumberchange={classNumberchangehandler}
                // phoneNumberchange={phoneNumberchangehandler}
                // emailChange={emailChangehandler}
                deleted={deletStudents}
                toggle={toggle}
                edited={Edited}
            />



        </React.Fragment>
    );
}

export default Homepages;
