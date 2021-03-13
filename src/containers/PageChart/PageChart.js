import React, { Component } from 'react';

import Chart from '../../components/Chart/Chart';

import classes from './PageChart.module.css';

class pageChart extends Component{
    render() {
        const scoreData = this.props.location.data || {rightCount: this.props.location.state?.rightCount, wrongCount: this.props.location.state?.wrongCount};
        return <Chart scoreData={scoreData }/>
    }
};

export default pageChart;