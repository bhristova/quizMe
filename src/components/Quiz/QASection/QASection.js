import classes from './QASection.module.css';

import Question from './Question/Question';
import Answer from './Answer/Answer';

const qaSection = ({questionData, collectAnswerData, ...rest}) => (
    <div className={classes.QASection}>
        <Question key={questionData.id}>{questionData.question}</Question>
        {questionData.answers.map(answer => <Answer key={answer.id} answerData={answer} collectAnswerData={() => collectAnswerData()}></Answer>)}
    </div>
);

export default qaSection;