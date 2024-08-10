import React from 'react';
import classes from "./ButtonSetting.module.scss";

const ButtonSetting = ({onClick}) => {
    return (
        <div>
            <a  className="classes.setting" onClick={(e) => onClick(e)}>
                <img alt="setting" src="../../../assets/UI/setting.svg"/>
            </a>
        </div>
    );
};

export default ButtonSetting;