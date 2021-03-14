import React from 'react';

import classes from './Backdrop.module.css';

const backdrop = ({show, ...rest}) => show ? <div className={classes.Backdrop}></div> : null;

export default backdrop;