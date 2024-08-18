import React, {useContext} from 'react';
import "../style/Login.scss";
import FormItem from "../components/UI/FormItem/FormItem";
import FormButton from "../components/UI/FormButton/FormButton";
import LoginService from "../API/LoginService";
import {UserContext} from "../context/UserContext";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [isEmailError, setIsEmailError] = React.useState(false);
    const [isPasswordError, setIsPasswordError] = React.useState(false);
    const [isFirstNameError, setIsFirstNameError] = React.useState(false);
    const [isLastNameError, setIsLastNameError] = React.useState(false);
    const [isPhoneError, setIsPhoneError] = React.useState(false);

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const {onRegister} = useContext(UserContext);
    const router = useNavigate();

    const handlerChangeEmail = (event) => {
        setEmail(event.target.value.trim());
    }
    const handlerChangePassword = (event) => {
        setPassword(event.target.value.trim());
    }
    const handlerChangeFirstName = (event) => {
        setFirstName(event.target.value.trim());
    }
    const handlerChangeLastName = (event) => {
        setLastName(event.target.value.trim());
    }
    const handlerChangePhone = (event) => {
        setPhone(event.target.value.trim());
    }

    const handleKeyDown = (event) => {
        if (event.key === ' ') {
            event.preventDefault();
        }
    };

    const registerUser = async (e) => {
        e.preventDefault();
        onRegister(email, password, firstName, lastName, phone);
    }

    return (
        <div id="login" className="login container">
            <div className="form__main bg-white my-4 d-flex flex-column align-items-center">
                <h3 className="title">Регистрация</h3>
                <form className="form ">
                    <FormItem isError={isEmailError} label={'Электронная почта'}>
                        <input
                            id="email"
                            value={email}
                            onChange={handlerChangeEmail}
                            onKeyDown={handleKeyDown}
                            className="form__input"
                            type="email"/>
                    </FormItem>

                    <FormItem isError={isPasswordError} label={'Пароль'}>
                        <input
                            id="password"
                            value={password}
                            onChange={handlerChangePassword}
                            onKeyDown={handleKeyDown}
                            className="form__input"
                            type="email"
                        />
                    </FormItem>
                    <div id="passwordHelpBlock" className="form-text">
                        Ваш пароль должен состоять из 8-30 символов, может содержать цифры и не должен содержать пробелов, специальных
                        символов или эмодзи.
                    </div>


                    <FormItem isError={isFirstNameError} label={'Имя'}>
                        <input id="firstName"
                               value={firstName}
                               className="form__input"
                               type="text"
                               onKeyDown={handleKeyDown}
                               onChange={handlerChangeFirstName}
                        />
                    </FormItem>

                    <FormItem isError={isLastNameError} label={'Фамилия'}>
                        <input id="lastName"
                               value={lastName}
                               className="form__input"
                               type="text"
                               onKeyDown={handleKeyDown}
                               onChange={handlerChangeLastName}
                        />
                    </FormItem>

                    <FormItem isError={isPhoneError} label={'Номер телефона'}>
                        <input id="lastName"
                               value={phone}
                               className="form__input"
                               type="text"
                               onKeyDown={handleKeyDown}
                               onChange={handlerChangePhone}
                        />
                    </FormItem>

                    <FormButton isAnyError={false} title={'Зарегистрироваться'} isLoading={false} onClick={registerUser}></FormButton>

                    <div className="login__create">Уже зарегистрированы?
                        <a onClick={() => {router('/login')}}>Войти</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;