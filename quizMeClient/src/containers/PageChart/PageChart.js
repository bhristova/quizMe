import React, { useEffect, useState } from 'react';

import Chart from '../../components/Chart/Chart';
import Aux from '../../hoc/Auxiliary';
import Config from '../../config.json';

import classes from './PageChart.module.css';

const PageChart = ({location, ...rest}) => {
    const [scoreData, setScoreData] = useState([]);
    const [category, setCategory] = useState('all');
    const [showCategories, setShowCategories] = useState(true);
    const categories = ['all', ...Config.categories];

    useEffect(() => {
        let stateData = location.data || location.state;
        if (stateData && (stateData.hasOwnProperty('correctCount') || stateData.hasOwnProperty('incorrectCount'))) {
            setShowCategories(false);
            setScoreData({
                correctCount: stateData.correctCount, 
                incorrectCount: stateData.incorrectCount
            });
            return;
        }
        setShowCategories(true);

        const result = {
            correctCount: 0, 
            incorrectCount: 0
        };
        const sessionStorageKeys = Object.keys(sessionStorage);

        const keyCorrect = category !== 'all' ? `${category}Correct` : 'Correct';
        const keyInorrect = category !== 'all' ? `${category}Incorrect` : 'Incorrect';

        const correctDataKeys = sessionStorageKeys.filter(key => key.endsWith(keyCorrect));
        const incorrectDataKeys = sessionStorageKeys.filter(key => key.endsWith(keyInorrect));

        correctDataKeys.map(key => result.correctCount += (parseInt(sessionStorage.getItem(key)) || 0));
        incorrectDataKeys.map(key => result.incorrectCount += (parseInt(sessionStorage.getItem(key)) || 0));

        setScoreData(result);
    }, [category, location.data, location.state]);

    return <Chart scoreData={scoreData}>
            {showCategories ? 
            <Aux>
                <p className={classes.Label}>Choose a category...</p>
                <select name='categories' onChange={evt => setCategory(evt.target.value)}>
                    {categories.map(category => (<option value={category} key={category}>{category}</option>))}
                </select> 
            </Aux>
            : null}
        </Chart>
};

export default PageChart;