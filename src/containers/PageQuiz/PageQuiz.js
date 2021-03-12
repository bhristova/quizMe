import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Quiz from '../../components/Quiz/Quiz';

import classes from './PageQuiz.module.css';

import data from '../../assets/data.json';

class pageQuiz extends Component{
    state = {
        data: {
            rightCount: 0,
            wrongCount: 0
        }
    };

    getQuestions(category) {
        return data.find(q => q.category === category).questions;
    }

    collectAnswerData(answer) {
        if (answer) {
            const oldRightCount = this.state.data.rightCount;
            this.setState({data: {...this.state.data, rightCount: oldRightCount + 1}});
        } else {
            const oldWrongCount = this.state.data.wrongCount;
            this.setState({data: {...this.state.data, wrongCount: oldWrongCount + 1}});
        }
    }

    render() {
        return <div className={classes.QuizPage}>
            <Quiz questions={this.getQuestions('animals')} collectAnswerData={() => this.collectAnswerData()}/>
            <Link to={{pathname: '/score', scoreData: this.state.data}} className={classes.FinishButton}>Finish</Link>
        </div>
    }
};

export default pageQuiz;