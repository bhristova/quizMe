import classes from './Result.module.css';

const result = ({correct, ...rest}) => {
    const className = correct ? classes.Correct : classes.Incorrect;
    return (
        <div className={[classes.Result, className].join(' ')}>
            {rest.children}
        </div>
    );
}

export default result;