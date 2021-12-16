import React from 'react';
import './modal.css';
import Signin from '../../signin/signin';
import Backdrop from '../backdrop/backdrop';
import react from 'react';
const Modal = (props) => {
    return (
        <React.Fragment>
            <Backdrop show={props.show} modalClosed={props.modalClosed}/>
            <div className="modal"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                {props.children}

            </div>
        </React.Fragment>
    );
}

export default Modal;
