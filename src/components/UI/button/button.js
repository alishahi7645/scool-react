import React from "react";
import './button.css';
import Students from "../../student/students/students";
import propTypes from 'prop-types'
const Button = (props) => {
    let Clasess = ["Button"];
    switch (props.btnType) {
        case "danger":
            Clasess.push("Danger");
            break;
        case "success":
            Clasess.push("Success");
            break;
        case "black":
            Clasess.push("Black");
            break;
        default: break;
    }
    return (
        <button
            className={Clasess.join(' ')}
            onClick={props.clicked}
        >
            {props.children}
        </button>
    )
}
export default Button;
Button.propTypes={
    children:propTypes.string.isRequired,
    clicked:propTypes.func,
    btnType:propTypes.string.isRequired
}
