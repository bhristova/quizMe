import classes from './Answer.module.css';

const answer = ({answerData, collectAnswerData, ...rest}) => {
    const answerClicked = () => {
        if(answerData.correct) {
            console.log('correct');
        } else {
            console.log('incorrect');
        }
        collectAnswerData(answerData.correct);
    }
    return (
        <button className={classes.Answer} onClick={() => answerClicked()}>
            {answerData.value}
        </button>
    )
};


export default answer;