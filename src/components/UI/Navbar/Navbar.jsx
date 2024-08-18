import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import classes from "./Navbar.module.scss";
import {UserContext} from "../../../context/UserContext";

const Navbar = () => {
    const {onLogout} = useContext(UserContext);

    return (
        <div className={classes.navbar}>
            <div className={classes.navbar__links}>
                <Link to="/about">О сайте</Link>
                <Link to="/login">Вход</Link>
                <Link to="/register">Регистрация</Link>
            </div>

            <div>
                <button onClick={onLogout}>Выйти</button>
            </div>
        </div>
    );
};

export default Navbar;