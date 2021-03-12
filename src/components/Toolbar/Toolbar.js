import Button from './Button/Button';
import Logo from './Logo/Logo';

import classes from './Toolbar.module.css';

const toolbar = props => (
    <div className={classes.Toolbar}>
        <Logo/>
        <div className={classes.Buttons}>
            <Button name='New quiz' link='/new'></Button>
            <Button name='My all time score' link='./score'></Button>
        </div>
    </div>
);

export default toolbar;