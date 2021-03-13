import {useState} from 'react';

import classes from './QASection.module.css';

import Question from './Question/Question';
import Answer from './Answer/Answer';
import Result from './Result/Result';

const QASection = ({questionData, collectAnswerData, ...rest}) => {
    const [answered, setAnswered] = useState(false);
    const [value, setValue] = useState(false);

    const getMessage = () => {
        if(!!value) {
            return 'Correct!';
        }
        return `Incorrect! The answer is "${questionData.answers.find(answer => answer.correct)?.value}"!`
    }

    return (
        <div className={classes.QASection}>
            <Question key={questionData.id}>{questionData.question}</Question>
            {questionData.answers.map(answer => <Answer key={answer.id} answerData={answer} collectAnswerData={(value) => collectAnswerData(value)} setAnswered={(value) => {setAnswered(true); setValue(value);}} answered={answered}></Answer>)}
            {answered && <Result correct={value}>{getMessage()}</Result>}
        </div>
    );
}

export default QASection;