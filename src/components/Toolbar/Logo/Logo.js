import classes from './Logo.module.css';

import logoPng from '../../../assets/logo.png'

const logo = props => (
    <img className={classes.Logo} src={logoPng} alt="quizMe" />
);

export default logo;