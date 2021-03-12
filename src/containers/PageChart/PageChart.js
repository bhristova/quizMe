import React, { Component } from 'react';

import classes from './PageChart.module.css';

class pageChart extends Component{
    render() {
        return <div>{this.props.location.scoreData?.wrongCount}</div>;
    }
};

export default pageChart;