import {Link} from 'react-router-dom';

import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';

import classes from './Form.module.css';

const form = ({backdropShow, onCancelClick, continueData, classesNames, onContinueClick, ...rest}) => {
    return <Aux>
            <Backdrop show={backdropShow}></Backdrop>
            <div className={[classesNames, classes.Form].join(' ')}>
                {rest.children}
                <div className={classes.Buttons}>
                    <button className={[classes.Button, classes.ButtonCancel].join(' ')} onClick={onCancelClick}>Cancel</button>
                    <Link to={{pathname: continueData.pathname, data: continueData.data}} className={[classes.Button, classes.ButtonContinue].join(' ')} onClick={onContinueClick}>Continue</Link>
                </div>
            </div>
        </Aux>;
}

export default form;