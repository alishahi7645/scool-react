import React from 'react';
import './student.css';
import App from '../../../App';
import Student from '../student';
import Button from '../../UI/button/button';
import propTypes from 'prop-types';
import react from 'react';
import { Link } from 'react-router-dom';
const Students = (props) => {
    console.log(props);

    return (
        <div className="students">
            <label>شماره دانش آموزی :{props.id}</label>

            <label> نام و نام خانوادگی :{props.name} </label>
            {/* <input type="text" value={props.name} onChange={props.nameChange} /> */}

            <label> کلاس :{props.classNumber} </label>
            {/* <input type="text" value={props.classNumber} onChange={props.classNumberchange} /> */}

            <label>  شماره تلفن :{props.phoneNumber}</label>
            {/* <input type="number" value={props.phoneNumber} onChange={props.phoneNumberchange} /> */}

            <label>  ایمیل :{props.email}</label>
            {/* <input type="email" value={props.email} onChange={props.emailChange} /> */}

            <label>
                <Button btnType="danger" clicked={props.deleted}>
                    حذف
                </Button>
                <Link to={"/student/"+props.id}>
                    <Button btnType="black" >
                        ویرایش
                    </Button>
                </Link>
            </label>
        </div>
    );
}

export default react.memo(Students);

Students.propTypes = {
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    classNumber: propTypes.string.isRequired,
    phoneNumber: propTypes.string.isRequired,
    email: propTypes.string.isRequired,
    deleted: propTypes.func.isRequired
}