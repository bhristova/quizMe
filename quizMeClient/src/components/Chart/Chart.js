import classes from './Chart.module.css';

import Bar from './Bar/Bar';

const chart = ({scoreData, ...rest}) => {
    const allCount = scoreData?.incorrectCount + scoreData?.correctCount || 0;
    const onePercentHeight = 100 / allCount;
    const heightCorrect = onePercentHeight * scoreData?.correctCount * 2;
    const heightIncorrect = onePercentHeight * scoreData?.incorrectCount * 2;

    return <div className={classes.Chart}>
        <div className={classes.Bars}>
            <Bar correct={false} height={heightIncorrect} scoreData={scoreData?.incorrectCount}>Incorrect</Bar>
            <Bar correct={true} height={heightCorrect} scoreData={scoreData?.correctCount}>Correct</Bar>
        </div>
        {rest.children}
    </div>;
};

export default chart;