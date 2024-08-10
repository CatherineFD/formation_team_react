import React from 'react';
import classes from "./FormButton.module.scss";

const FormButton = ({isAnyError, isLoading, title, onClick}) => {
    return (
        <div>
            <button
                className={`${classes.button} ${isAnyError? classes.disabled : ''}`}
                type="submit"
                onClick={event => onClick(event)}
            >
                {isLoading
                    ?
                    <span>
                      <span aria-hidden="true" className="spinner-grow spinner-grow-sm" role="status"></span>
                      <span aria-hidden="true" className="spinner-grow spinner-grow-sm mx-2 " role="status"></span>
                      <span aria-hidden="true" className="spinner-grow spinner-grow-sm" role="status"></span>
                    </span>
                    :
                    <span>{title}</span>
                }
            </button>

        </div>
    );
};

export default FormButton;