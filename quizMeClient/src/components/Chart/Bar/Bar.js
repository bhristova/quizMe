import classes from './Bar.module.css';

const bar = ({scoreData, height, correct, ...rest}) => {
    const barClass = correct ? classes.Correct : classes.Incorrect;
    const barClassLabel = correct ? classes.CorrectLabel : classes.IncorrectLabel;
    const barHeight = height || 0;

    return (
        <div>
            <div className={[classes.Bar, barClass].join(' ')} style={{height: barHeight}}>
                <span className={classes.Tooltip}>{scoreData}</span>
            </div>
            <p className={[classes.Label, barClassLabel].join(' ')}>{rest.children}</p>
        </div>
    );
}

export default bar;