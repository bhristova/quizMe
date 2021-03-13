import classes from './Chart.module.css';

import Bar from './Bar/Bar';

const chart = ({scoreData, ...rest}) => {
    const allCount = scoreData?.wrongCount + scoreData?.rightCount || 0;
    const onePercentHeight = 100 / allCount;

    return (<div className={classes.Chart}>
        <Bar correct={false} height={onePercentHeight * scoreData?.wrongCount * 2}>Incorrect</Bar>
        <Bar correct={true} height={onePercentHeight * scoreData?.rightCount * 2}>Correct</Bar>
    </div>)
};

export default chart;