import React, {useMemo} from 'react';
import classes from './ResultTestCompetence.module.scss';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import arrayBottom from "../../../assets/UI/arrow-bottom.svg";
import questions from "../../../assets/data/questions.json";

const ResultTestCompetence = ({result}) => {
    const [resultCompetence, setResultCompetence] = React.useState({firstPart: [], secondPart: []});
    const [isShowResult, setIsShowResult] = React.useState({});
    React.useEffect(() => {
        divideArrayPart();
        setIsShow();
    }, []);

    console.log(result.usersResult[0])
    const divideArrayPart = () => {
        if (result.length > 0) {
            console.log(result)
            for (let i = 0; i < result['usersResult']?.length; i++) {
                if (i % 2 === 0) {
                    setResultCompetence(prevState => {
                        return {
                            ...prevState,
                            firstPart: [...prevState.firstPart, result['usersResult'][i]]
                        }
                    })

                } else {
                    setResultCompetence(prevState => {
                        return {
                            ...prevState,
                            firstPart: [...prevState.secondPart, result['usersResult'][i]]
                        }
                    })
                }
            }


        }
    }

    const setIsShow = () => {
        if (result) {
            result['usersResult']?.forEach(elem => {
                setIsShowResult(prevState => {
                    return {
                        ...prevState,
                        [elem.name]: true
                    }
                })
            })
        }
    }

    const openResult = (name) => {
        setIsShowResult(prevState => {
            return {
                ...prevState,
                [name]: !prevState[name]
            }
        })
    }

    const isLittleResult = (result) => {
        if (Number(result) < 5) return true;
    }

    const getWidthProgressBar = (result) => {
        if(result * (maxWidth/100) < 42) {
            return 42;
        }
        return result * (maxWidth/100);
    }

    const maxWidth = useMemo(() => {
        if(window.innerWidth > 1200 ) {
            return 220
        } else return 150;
    }, []);
    return (
        <div>
            результат теста на компетенции
            { (result)
            ?
                <div className={classes.results}>

                    <div className="blocks">
                        {
                            // result.usersResult.map((elem, key) =>
                            //     <div key={key} className={classes.block__competencies}>
                            //
                            //         {
                            result.usersResult.map((competence, key)=>
                                <div key={key} className={classes.block__competencies}>
                                    <div className={classes.competencies__title} onClick={() =>openResult(competence.name)}>
                                        <p className="m-0">{competence.name}</p>

                                        <div className="d-flex justify-content-between">
                                            <div className="progress__back" style={{width: `${maxWidth}px`}}>

                                                <div className="progress__block" style={{width: `${getWidthProgressBar(competence.totalResult)}px`}}>
                                                    {competence.totalResult}%
                                                </div>
                                            </div>

                                            <div>
                                                <img src={arrayBottom}
                                                     id="rotateImage"
                                                     alt="arrow"
                                                     className={isShowResult[competence.name]? classes.arrow : ''}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={classes.competencies__result}>
                                        <TransitionGroup component={null}>
                                            {competence.answers.map((answer, index) => (
                                                isShowResult[competence.name] && (
                                                    <CSSTransition
                                                        key={index}
                                                        timeout={300}
                                                        classNames="fade"
                                                    >
                                                        <div className={classes.competencies__result__answers}>
                                                            <div className={classes.question}>{questions[answer.question].question}</div>
                                                            <div className={`answer ${isLittleResult(answer.answer) ? 'attention' : ''}`}>
                                                                {answer.answer} /10
                                                            </div>
                                                        </div>
                                                    </CSSTransition>
                                                )))}
                                        </TransitionGroup>

                                    </div>
                                </div>


                //         )}
                //     </div>
                            )
                        }

                    </div>
                </div>
            :
                <div>

                </div>
            }
        </div>
    );
};

export default ResultTestCompetence;