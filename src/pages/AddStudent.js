import React, { useState, useEffect, useContext } from 'react';
import { useMatch, useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import Newstudent from '../components/student/newstudent/newstudent';
import axios from 'axios';
import { Authcontext } from '../context/Auth/autuContext';
import { Navigate,useNavigate } from 'react-router';

const Addstudent = (props) => {

   


    const { authenticated } = useContext(Authcontext);
    
    const Navigate = useNavigate();
    let auth =false;
    const userInfo = JSON.parse(localStorage.getItem('user'));
    if(userInfo){
        auth=true;
    }
    useEffect(()=>{
        if(!auth){
            alert('لطفا برای اضافه کردن دانش آموز لطفا وارد حساب کاربری خود شوید')
            Navigate('/', {replace:false} )
        }
    },[]);
    console.log(Navigate);

    const [studentName, setstudentName] = useState('');
    const [studentClass, setstudentClass] = useState('');
    const [studentNumber, setstudentNumber] = useState('');
    const [studentEmail, setstudentEmail] = useState('');
    const [result, setredirect] = useState(false);

    const studentNameHandler = (event) => {
        setstudentName(event.target.value);
    }
    const studentClassHandler = (event) => {
        setstudentClass(event.target.value);
    }
    const studentNumberHandler = (event) => {
        setstudentNumber(event.target.value);
    }
    const studentEmailHandler = (event) => {
        setstudentEmail(event.target.value);
    }


    const addStudent = () => {
        fetch('http://192.168.1.109/student/insertStudent.php',{
            method:'POST',
            headers:{
                'Accept' : 'applicaion/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                student_name:studentName,
                studet_class:studentClass,
                student_phone_number:studentNumber,
                student_email:studentEmail
            })
        }).then((response)=>response.json())
            .then((responseJson)=>{
                if(responseJson==='succefull'){
                    props.history.replace('/')
                }
                else{
                    setredirect(responseJson)
                }
            }).catch((error)=>{
                setredirect(error)
            })
    }

    return (
        <React.Fragment>

            
            <Newstudent
                studentName={studentName}
                studentClass={studentClass}
                studentNumber={studentNumber}
                studentEmail={studentEmail}
                studentNameHandler={studentNameHandler}
                studentClassHandler={studentClassHandler}
                studentNumberHandler={studentNumberHandler}
                studentEmailHandler={studentEmailHandler}
                addStudent={addStudent}

            />
            
        </React.Fragment>
    );
}

export default Addstudent;
