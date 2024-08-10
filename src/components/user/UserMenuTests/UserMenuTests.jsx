import React from 'react';
import classes from "./UserMenuTests.module.scss";

const UserMenuTests = ({numberTest, onClick}) => {
    return (
        <div className={`${classes.user__menu} justify-content-between justify-content-md-center mb-4`}>
            <div className={`${ numberTest === 1 ? 'activeTest' : '' }user__menu__item`} onClick={event => {onClick(event, 1)}}>
                Профиль гения
            </div>

            {/*!$route.params.id*/}
            <div className={`${ numberTest === 2 ? 'activeTest' : '' } user__menu__item`} onClick={event => {onClick(event, 2)}}>
                Уровни осознанности
            </div>

            <div className={`${ numberTest === 3 ? 'activeTest' : '' } user__menu__item`}
                 onClick={event => {onClick(event, 3)}}>
            Тест на компетенции
        </div>
        </div>
    );
};

export default UserMenuTests;