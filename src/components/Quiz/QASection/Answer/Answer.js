
import classes from './Answer.module.css';

const answer = ({answerData, collectAnswerData, setAnswered, answered, ...rest}) => {
    // const [answered, setAnswered] = useState(false);

    const answerClicked = () => {
        if(answerData.correct) {
            console.log('correct');
        } else {
            console.log('incorrect');
        }
        setAnswered(answerData.correct);
        collectAnswerData(answerData.correct);
    }
    return (
        <button disabled={answered} className={classes.Answer} onClick={() => answerClicked()}>
            {answerData.value}
        </button>
    )
};


export default answer;