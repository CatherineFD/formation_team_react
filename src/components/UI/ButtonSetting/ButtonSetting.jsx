import React from 'react';
import classes from "./ButtonSetting.module.scss";
import setting_img from "../../../assets/UI/setting.svg";

const ButtonSetting = ({onClick}) => {
    return (
        <div className={classes.container}>
            <a className={classes.setting} onClick={(e) => onClick(e)}>
                <img alt="setting" src={setting_img}/>
            </a>
        </div>
    );
};

export default ButtonSetting;