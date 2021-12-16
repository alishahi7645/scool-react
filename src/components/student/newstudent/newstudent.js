import React from 'react';
import './newstudent.css';
import Button from '../../UI/button/button';
import propTypes from 'prop-types';
import react from 'react';
import { useEffect } from 'react/cjs/react.development';
import { useParams,useLocation } from 'react-router';
const Newstudent = (props) => {
    const { studentName, studentClass, studentNumber, studentEmail } = props;
    const {studentNameHandler , studentClassHandler , studentNumberHandler , studentEmailHandler , addStudent} = props;
    useLocation(()=>{
        console.log(props);
    })
    return (
        <div className="newstudent">
            <h1>اضافه کردن دانش آموز</h1>
            <label>: نام و نام خانوادگی</label>
            <input type="text" value={studentName} onChange={studentNameHandler}/>

            <label>: کلاس</label>
            <input type="text" value={studentClass} onChange={studentClassHandler}/>

            <label>: شماره تلفن</label>
            <input type="number" value={studentNumber} onChange={studentNumberHandler}/>

            <label>: ایمیل</label>
            <input type="email" value={studentEmail} onChange={studentEmailHandler}/>

            <Button clicked={addStudent} btnType="success">اضافه کردن</Button>
        </div>
    );
}

export default react.memo(Newstudent) ;

Newstudent.propTypes={
    studentName:propTypes.string.isRequired,
    studentClass:propTypes.string.isRequired,
    studentNumber:propTypes.string.isRequired,
    studentEmail:propTypes.string.isRequired,
    addStudent:propTypes.func.isRequired
}
