import classes from './PageWelcome.module.css';

const pageWelcome = () => {
    return <div className={classes.WelcomePage}>
        <h1>WELCOME!</h1>
        <h3><i>Click on New quiz to start!</i></h3>
    </div>
}

export default pageWelcome;