import Config from '../config.json';
const entityName = 'question';

const getQuestionsByCategory = (category, numberOfQuestions) => {
    return new Promise((resolve, reject) => {
        fetch(`${Config.serverAddress}:${Config.port}/api/${entityName}/${category}?count=${numberOfQuestions}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin' : '*',
            }
        })
        .then(response => resolve(response.json()))
        .catch(err => {
            console.error(err); 
            reject(err)
        });
    });  
};

export {getQuestionsByCategory};