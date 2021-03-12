import classes from './Question.module.css';

const question = (props) => (
    <div className={classes.Question}>
        {props.children}
    </div>
);

export default question;