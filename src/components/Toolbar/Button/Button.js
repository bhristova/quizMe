import {Link} from 'react-router-dom';

import classes from './Button.module.css';

const button = ({name, link, ...rest}) => (
    <Link
        to={link}
        className={classes.Button}>
        {name}
    </Link>
);

export default button;