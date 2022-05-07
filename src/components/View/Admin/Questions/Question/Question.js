import './Question.css';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const Question = (props) => {
    const editQuestion = () => {
        props.setAnswers([props.question.correct, ...props.question.wrong.map((element) => (element))]);
        props.setQuestion(props.question);
    }

    const deleteQuestion = (event) => {
        axios.delete('http://3.64.89.107/question/' + props.question._id, {
            headers: {
                'x-api-key': API_KEY
            }
        })
            .then((res) => {
                props.updateQuestions();
        });
    }

    return (
        <div className='Question'>
            <div className='Question__text'>
                {props.index + '. ' + props.question.question}
            </div>
            <div className='Question__buttons'>
                <button className='Question__buttons__edit' onClick={editQuestion}>edit</button>
                <button className='Question__buttons__delete' onClick={deleteQuestion}>delete</button>
            </div>
        </div>
    )
}

export default Question;