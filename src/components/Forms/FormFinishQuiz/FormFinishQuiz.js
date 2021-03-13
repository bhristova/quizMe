import Form from '../../UI/Form/Form';

const FormFinishQuiz = ({backdropShow, onCancelClick, data, ...rest}) => {
    return (
        <Form 
            backdropShow={backdropShow}
            onCancelClick={onCancelClick}
            continueData={{pathname: '/score', data: data }}>
            <p>Some questions are still unanswered. Are you sure you want to continue?</p>
        </Form>
    );
}

export default FormFinishQuiz;