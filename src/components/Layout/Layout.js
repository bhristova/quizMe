import {Route} from 'react-router-dom';

import React from 'react';

import Toolbar from '../Toolbar/Toolbar';
import PageQuiz from '../../containers/PageQuiz/PageQuiz';
import PageChart from '../../containers/PageChart/PageChart';

import Aux from '../../hoc/Auxiliary';

const layout = (props) => (
    <Aux>
        <Toolbar/>
        <main>
            <Route path="/new" exact component={PageQuiz}/>
            <Route path="/score" exact component={PageChart}/>
        </main>
    </Aux>
);

export default layout;