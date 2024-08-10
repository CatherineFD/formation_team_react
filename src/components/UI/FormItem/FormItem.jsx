import React from 'react';
import classes from './FormItem.module.scss';

const FormItem = ({children, label, isError, showErrorSign}) => {
    return (
        <div className={`${classes.form__item} ${isError ? classes.error: ''}`}>
            <label className="form__label">{ label }</label>
            {children}

            { (isError && showErrorSign) &&
                <img alt="" src="../../../assets/form/alert.svg"/>
            }
        </div>
    );
};

export default FormItem;