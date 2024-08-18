import React from 'react';
import classes from './ResultTestCompetence.scss';

const ResultTestCompetence = ({result}) => {
    return (
        <div>
            результат теста на компетенции
            { (result)
            ?
                <div className={classes.results}>
                    результат теста на компетенции
                </div>
            :
                <div></div>
            }
        </div>
    );
};

export default ResultTestCompetence;