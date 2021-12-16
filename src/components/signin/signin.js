import react from 'react';
import React from 'react';
import Logo from '../../assets/images/Logo.svg';
import Button from '../../components/UI/button/button';
import './signin.css';
import image from '../../assets/images/reload_image.jpg';
import { useState,useContext } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { generatePath } from 'react-router';
import { Authcontext } from '../../context/Auth/autuContext';

const Signin = () => {
    const [randomNumber1, setRandomNumber1] = useState(0);
    const [randomNumber2, setRandomNumber2] = useState(0);
    const [sumHolder, setSomeHolder] = useState(0);
    const [captchavalue, setcaptchavalue] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const {dispatch} = useContext(Authcontext);
    const generateCaptcha = () => {
        let number1 = Math.floor(Math.random() * 10) + 1;
        let number2 = Math.floor(Math.random() * 10) + 1;

        setRandomNumber1(number1);
        setRandomNumber2(number2);

        let sum = number1 + number2;
        setSomeHolder(sum)

    }
    useEffect(() => {
        generateCaptcha();
    }, []);
    const validate = () => {
        if (username === '') {
            setErrorMessage('لطفا نام کاربری خود را وارد نمایید');
            return false;
        }
        else if (!username.includes('@') || !username.includes('.')) {
            setErrorMessage('نام کاربری را درست وارد نمایید');
            return false;
        }
        else if (password === '') {
            setErrorMessage('لطقا پسوورد خود را وارد نمایید');
            return false;
        }
        else if (password.length < 5) {
            setErrorMessage('پسوورد نامعتبر است');
            return false;
        }
        setErrorMessage('');
        return true;
    }

    const captchaHandler = (event) => {
        setcaptchavalue(Number(event.target.value))
    }

    const captchaValid = () => {
        if (sumHolder === captchavalue) {
            setErrorMessage('');
            validate();
            const validateresult = validate();
            if (validateresult) {
                fetch('http://192.168.1.109/student/user_login.php', {
                    method: 'POST',
                    headers: {
                        'Accept': 'applicaion/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: username,
                        password: password
                    })
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        if (responseJson === "Data Matched") {
                            dispatch({type:'login',payload:username})
                        }
                        else {
                            setErrorMessage(responseJson)
                        }
                    }).catch((error) => {
                        alert(error);
                    })
            }
        }
        else {
            setErrorMessage('کد امنیتی نامعتبر است');
            return false;
        }
    }
    const usernamehandler = (event) => {
        setusername(event.target.value);
    }
    const passwordhandler = (event) => {
        setpassword(event.target.value);
    }
    return (
        <div className="ali">
            <p style={{ color: "red", fontSize: "20px" }}>{errorMessage}</p>
            <img src={Logo} />
            <input type="text" placeholder="username" value={username} onChange={usernamehandler} />
            <input type="password" placeholder="password" value={password} onChange={passwordhandler} />
            <div className="captcha_view">
                <img src={image} alt="reload" onClick={generateCaptcha} />
                <input type="text" onChange={captchaHandler} />
                <p>{randomNumber1} + {randomNumber2} =</p>
            </div>
            <Button clicked={captchaValid} btnType="success">ورود</Button>
        </div>
    );
}

export default Signin;
