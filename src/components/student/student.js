import React, { useEffect } from 'react';
import Students from './students/students';
import './students/student.css';
import PropTypes from 'prop-types';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Homepages from '../../pages/HomePages';
const Student = (props) => {
    useEffect(() => {
        console.log(props)
    }, [props.Studentlist])
    // props.studentList? props.studentList.map():null
    let students = props.Studentlist ? props.Studentlist.map((student, index) =>
        <ErrorBoundary key={index}>
            <Students

                id={student.student_id}
                name={student.student_name}
                classNumber={student.student_class}
                phoneNumber={student.student_phone_number}
                email={student.student_email}
                deleted={() => props.deleted(student.student_id)}
                edited={() => props.edited(student.student_id, student.student_name, student.student_class, student.student_phone_number, student.student_email)}

            />

        </ErrorBoundary>


    ) : null;

    if (props.toggle) {
        return (
            <div className="student-section">
                {
                    students
                }
            </div>
        )
    }
    return students
}
export default React.memo(Student);
Student.propTypes = {
    studentsList: PropTypes.array.isRequired,
    nameChanged: PropTypes.func.isRequired,
    deleted: PropTypes.func.isRequired,
    toggle: PropTypes.bool.isRequired
}