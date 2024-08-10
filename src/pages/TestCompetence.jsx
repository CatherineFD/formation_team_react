import React from 'react';

const TestCompetence = () => {
    const [isPageBlocked, setIsPageBlocked] = React.useState(false);
    const [isNeedGiveAnswer, setIsNeedGiveAnswer] = React.useState(false);
    const [questions, setQuestions] = React.useState([]);
    const [currentQuestion, setCurrentQuestion] = React.useState(0);

    return (
        <div id="test" className={`${isPageBlocked ? 'page-blocked': ''} test m-3`} >
            <div className={`${isNeedGiveAnswer ? 'shake' : ''} test__content`}>
                <div className="test__text-content">
                    <div className="test__question text-center">
                        {questions[currentQuestion].question}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestCompetence;