import React, { Component , useState } from 'react';

import Quiz from '../../components/Quiz/Quiz';
import FormFinishQuiz from '../../components/Forms/FormFinishQuiz/FormFinishQuiz';

import classes from './PageQuiz.module.css';

import questionsData from '../../assets/data.json';
import { useHistory } from 'react-router';

const PageQuiz  = ({location, ...rest}) => {
    const [data, setData] = useState({rightCount: 0, wrongCount: 0});
    const [finishClicked, setFinishClicked] = useState(false);
    const history = useHistory();

    const getQuestions = () => {
        const category = location.data;
        if (!category) {
            return [];
        }

        return questionsData.find(q => q.category === category).questions;
    }

    const collectAnswerData = answer => {
        if (answer) {
            const oldRightCount = data.rightCount;
            setData({...data, rightCount: oldRightCount + 1});
        } else {
            const oldWrongCount = data.wrongCount;
            setData({...data, wrongCount: oldWrongCount + 1});
        }
    }

    const onFinishClick = evt => {
        if (data.rightCount + data.wrongCount < 3) {
            setFinishClicked(true);
            return;
        }

        const path = '/score';
        history.push(path, data);
    }

    return <div className={classes.QuizPage}>
        <Quiz questions={getQuestions()} collectAnswerData={(value) => collectAnswerData(value)}/>
        <button className={classes.FinishButton} onClick={() => onFinishClick()}>Finish</button>
        {finishClicked && <FormFinishQuiz backdropShow={finishClicked} onCancelClick={() => setFinishClicked(false)} data={data}/>}
    </div>
};

export default PageQuiz;