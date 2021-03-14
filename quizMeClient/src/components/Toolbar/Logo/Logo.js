import { Link } from 'react-router-dom';

import classes from './Logo.module.css';

import logoPng from '../../../assets/logo.png'

const logo = props => <Link to="/">
        <img className={classes.Logo} src={logoPng} alt="quizMe" />
    </Link>;

export default logo;