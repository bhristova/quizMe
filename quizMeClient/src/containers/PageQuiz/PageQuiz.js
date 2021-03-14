import React, { useState, useEffect } from 'react';

import Quiz from '../../components/Quiz/Quiz';
import Form from '../../components/UI/Form/Form';

import {getQuestionsByCategory} from '../../api/QuestionApi';

import classes from './PageQuiz.module.css';

import { useHistory } from 'react-router';

const PageQuiz  = ({location, ...rest}) => {
    const numberOfQuestions = 5;
    const [data, setData] = useState({correctCount: 0, incorrectCount: 0});
    const [questionsData, setQuestionsData] = useState([]);
    const [finishClicked, setFinishClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        setIsLoading(true);
        const category = location.data;

        const getQuestions = async () => {
            try {
                const result = await getQuestionsByCategory(category, numberOfQuestions)
                setQuestionsData(result);
            } catch (err) {
                setQuestionsData([]);
            } finally {
                setIsLoading(false);
            }
        }
        
        getQuestions();
    }, [location.data]);

    const collectAnswerData = answer => {
        if (answer) {
            const oldcorrectCount = data.correctCount;
            setData({...data, correctCount: oldcorrectCount + 1});
        } else {
            const oldincorrectCount = data.incorrectCount;
            setData({...data, incorrectCount: oldincorrectCount + 1});
        }
    }

    const onFinishClick = evt => {
        if (data.correctCount + data.incorrectCount < numberOfQuestions) {
            setFinishClicked(true);
            return;
        };
        saveToSessionStorage();
        const path = '/score';
        history.push(path, data);
    }

    const isSessionStorageEnabled = () => {
        try {
            sessionStorage.setItem('testKey', 1);
            sessionStorage.removeItem('testKey');
            return true;
        } catch {
            return false;
        }
    }

    const saveToSessionStorage = () => {
        if (isSessionStorageEnabled()) {
            const category = location.data;
            const keyCorrectCount = `${category}Correct`;
            const keyIncorrectCount = `${category}Incorrect`;

            const oldCorrectCount = sessionStorage.getItem(keyCorrectCount);
            const oldIncorrectCount = sessionStorage.getItem(keyIncorrectCount);

            const newCorrectCount = data.correctCount + (parseInt(oldCorrectCount) || 0);
            const newIncorrectCount = data.incorrectCount + (parseInt(oldIncorrectCount) || 0);

            sessionStorage.setItem(keyCorrectCount, newCorrectCount);
            sessionStorage.setItem(keyIncorrectCount, newIncorrectCount);
        }
    }

    return isLoading ? 
        <div>...Loading data</div> : 
        <div className={classes.QuizPage}>
        <Quiz questions={questionsData} collectAnswerData={(value) => collectAnswerData(value)}/>
        <button className={classes.FinishButton} onClick={() => onFinishClick()}>Finish</button>
        {finishClicked &&
            <Form 
                backdropShow={finishClicked}
                onCancelClick={() => setFinishClicked(false)}
                onContinueClick={() => saveToSessionStorage()}
                continueData={{pathname: '/score', data: {...data, showCategories: false}}}>
                <p>Some questions are still unanswered. Are you sure you want to continue?</p>
            </Form>
        }
    </div>
    
};

export default PageQuiz;