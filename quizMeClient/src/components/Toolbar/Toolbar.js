import { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo/Logo';

import classes from './Toolbar.module.css';

import Aux from '../../hoc/Auxiliary';
import Form from '../UI/Form/Form';
import Config from '../../config.json';

const Toolbar = props => {
    const categories = Config.categories;
    const [newQuizClicked, setNewQuizClicked] = useState(false);
    const [selectedValue, setSelectedValue] = useState(categories[0]);

    return (
        <Aux>
            <div className={classes.Toolbar}>
                <Logo/>
                <div className={classes.Buttons}>
                    <button className={classes.Button} onClick={() => {setNewQuizClicked(true); setSelectedValue(categories[0]); }}>New quiz</button>
                    <Link to={{pathname: '/score', data: {showCategories: true}}} className={classes.Button}>My all time score</Link>
                </div>
            </div>
            {newQuizClicked && 
                <Form backdropShow={newQuizClicked}
                    onCancelClick={() => setNewQuizClicked(false)}
                    onContinueClick={() => setNewQuizClicked(false)}
                    continueData={{pathname: '/new', data: selectedValue}}
                    classesNames={classes.FormNewQiuz}>
                        <p>Please choose a category:</p>
                        <select name='category' onChange={evt => setSelectedValue(evt.target.value)}>
                            {categories.map(category => <option value={category} key={category}>{category}</option>)}
                        </select>
                </Form>
            }
        </Aux>
    );
}

export default Toolbar;