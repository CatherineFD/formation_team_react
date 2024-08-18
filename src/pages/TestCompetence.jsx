import React, {useEffect, useMemo} from 'react';
import {UserContext} from "../context/UserContext";
import questions from "../assets/data/questions.json";
import '../style/TestCompetence.scss';
import btnBack from "../assets/UI/back.svg";
import btnNext from "../assets/UI/next.svg"
import {useNavigate} from "react-router-dom";
import TestServer from "../API/TestServer";


const TestCompetence = () => {
    const [isPageBlocked, setIsPageBlocked] = React.useState(false);
    const [isNeedGiveAnswer, setIsNeedGiveAnswer] = React.useState(false);
    // const [questions, setQuestions] = React.useState([]);
    const [mixQuestion, setMixQuestion] = React.useState([]);
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [selectedCount, setSelectedCount] = React.useState(null);
    const [hoverSelectCount, setHoverSelectCount] = React.useState(0);
    const [results, setResults] = React.useState([]);
    const {getUsername, getPassword} = React.useContext(UserContext);
    const router = useNavigate();

    const arrayAnswers = Array.from({ length: 10 }, (_, index) => index + 1);

    const mixQuestions = (array) => {
        for (let i = array?.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        clearAnswer(array);
        return array;
    }
    const clearAnswer = (array) => {
        for (let elem of array) {
            elem["answer"] = "";
        }
    }

    const changeAnswer = (currentQuestion, index) => {
        setSelectedCount(index);
        setIsNeedGiveAnswer(false);

        setMixQuestion(prevQuestions => {
            const updatedQuestions = [...prevQuestions];

            updatedQuestions[currentQuestion] = {
                ...updatedQuestions[currentQuestion],
                answer: index
            };
            return updatedQuestions;
        });

    }

    const nextQuestion = () => {
        if (currentQuestion < mixQuestion.length - 1 && mixQuestion[currentQuestion].answer !== "") {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedCount(null);
            setHoverSelectCount(null);
        } else {
            setIsNeedGiveAnswer(true);
        }
    }

    const prevQuestion = () => {
        setIsNeedGiveAnswer(false);
        if(currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    const addListeners = () => {
        const btnAnswers = document.getElementById('answers');

        btnAnswers.addEventListener("mouseover", (event) => {
            let target = event.target;
            if (target.tagName === 'BUTTON' ) {
                setHoverSelectCount(target.innerText);
                // this.selectedCount = target.innerText;
            }
        });

        btnAnswers.addEventListener("mouseout", (event) => {
            let target = event.target;

            if (target.tagName === 'DIV' ) {
                setHoverSelectCount(null);
            }
        });
    }

    const sendResults= () => {
       setIsPageBlocked(true);

        mixQuestion.forEach(question => {
            results.push({
                number: question.number,
                answer: question.answer
            })
        })
        TestServer.saveResultTestCompetence(results, getUsername, getPassword)
            .then(() =>router('/user'))
            .catch(err => console.log(err));

    }


    useEffect(() => {
        let questions1 = mixQuestions(questions);
        setMixQuestion(questions1);
        addListeners();
    }, [])

    const isSelectedButton = useMemo(() => {
        return  mixQuestion[currentQuestion]?.answer ? mixQuestion[currentQuestion].answer : selectedCount
    }, [currentQuestion, selectedCount]);




    return (
        <div id="test" className={`${isPageBlocked ? 'page-blocked': ''} test m-3`} >
            <div className={`${isNeedGiveAnswer ? 'shake' : ''} test__content`}>
                <div className="test__text-content">
                    <div className="test__question text-center">
                        {mixQuestion[currentQuestion]?.question}
                    </div>

                    {isNeedGiveAnswer &&
                        <div className="alert alert-danger" role="alert">
                            Вы не можете пропустить вопрос
                        </div>
                    }

                    <div className="test__answers">
                        <div id="circles-container" className="answers">



                            <div id="answers" className="ans__buttons" >
                                {arrayAnswers.map(index => {
                                    const isActive = index <= isSelectedButton;
                                    const isHover = index <= hoverSelectCount && selectedCount == null;
                                    const buttonClass = `answers__button ${isActive ? 'active' : ''} ${isHover ? 'hoverCount' : ''}`;


                                    return (<button key={index}
                                        className={buttonClass}
                                        onClick={() => changeAnswer(currentQuestion, index)}
                                    >
                                        {index}
                                    </button>)
                                }

                                )}
                        </div>

                        <div id="not-agree" className="answers__text">
                            Абсолютно<br/>не согласен
                        </div>

                        <div id="agree" className="answers__text">
                            Полностью<br/>согласен
                        </div>

                    </div>
                </div>
                </div>
            </div>

            <div className="test__control">

                <button id="back" className="control__button" onClick={prevQuestion}>
                    <img className="control__arrow back" src={btnBack} alt="back"/>
                </button>
                {(currentQuestion < questions.length - 1) &&
                <button id="next" className="control__button" onClick={nextQuestion}>
                    <img className="control__arrow next" src={btnNext} alt="next"/>
                </button>
                }

                {(currentQuestion === questions.length - 1) &&
                    <button id="finish" className="control__button finish" onClick={sendResults}>Завершить</button>
                }
            </div>
        </div>
    );
};

export default TestCompetence;