import React from 'react';
import {Link} from "react-router-dom";
import classes from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.navbar__links}>
                <Link to="/about">О сайте</Link>
                <Link to="/">Вход</Link>
                <Link to="/register">Регистрация</Link>
            </div>
        </div>
    );
};

export default Navbar;