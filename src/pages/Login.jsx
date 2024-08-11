import React, {useContext} from 'react';
import FormItem from "../components/UI/FormItem/FormItem";
import FormButton from "../components/UI/FormButton/FormButton";
import '../style/Login.scss';
import LoginService from "../API/LoginService";
import {UserContext} from "../context/UserContext";

const Login = () => {
    const [isEmailError, setIsEmailError] = React.useState(false);
    const [isPasswordError, setIsPasswordError] = React.useState(false);

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const {login} = useContext(UserContext);

    const handlerChangeEmail = (event) => {
        setEmail(event.target.value.trim());
    }

    const handlerChangePassword = (event) => {
        setPassword(event.target.value.trim());
    }

    const handleKeyDown = (event) => {
        if (event.key === ' ') {
            event.preventDefault();
        }
    };

    const loginUser = async (e) => {
        e.preventDefault();
        const response = login(email, password);
        console.log(response);
    }

    return (
        <div id="login" className="login container">
            <div className="form__main bg-white my-4 d-flex flex-column align-items-center">
                <h3 className="title">Вход</h3>

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
                        <div className="password__container">
                        <input
                            id="password"
                            value={password}
                            onChange={handlerChangePassword}
                            onKeyDown={handleKeyDown}
                            className="form__input"
                            type="email"/>
                        </div>
                    </FormItem>


                    <FormButton isAnyError={false} title={'Войти'} isLoading={false} onClick={loginUser}></FormButton>
                </form>

                <div className="login__create">Нет аккаунта? <br/>
                    <a href="#" >Создать новый аккаунт</a>
                </div>

            </div>
        </div>
    );
};

export default Login;