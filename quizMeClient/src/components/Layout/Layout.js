import {Route} from 'react-router-dom';

import React from 'react';

import Toolbar from '../Toolbar/Toolbar';
import PageQuiz from '../../containers/PageQuiz/PageQuiz';
import PageChart from '../../containers/PageChart/PageChart';
import PageWelcome from '../../containers/PageWelcome/PageWelcome';

import Aux from '../../hoc/Auxiliary';

const layout = props => (
    <Aux>
        <Toolbar/>
        <main>
            <Route path="/new" exact component={PageQuiz}/>
            <Route path="/score" data={{showCategories: true}} exact component={PageChart}/>
            <Route path="/" exact component={PageWelcome}/>
        </main>
    </Aux>
);

export default layout;