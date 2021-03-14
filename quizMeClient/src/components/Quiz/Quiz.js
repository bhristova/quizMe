
import classes from './Quiz.module.css';

import QASection from './QASection/QASection';

const quiz = ({questions, collectAnswerData, ...rest}) => (
    <div className={classes.Quiz}>
        {questions.map(question => 
            <QASection
                key={question.id} 
                questionData={question} 
                collectAnswerData={(value) => collectAnswerData(value)}/>
        )}
    </div>
);

export default quiz;