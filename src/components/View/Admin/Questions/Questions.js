import './Questions.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Question from './Question/Question';

const API_KEY = process.env.REACT_APP_API_KEY;

const Questions = () => {
    const [question, setQuestion] = useState({question: '', correct: '', wrong: []});
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [answer, setAnswer] = useState('');
    const [adding, setAdding] = useState(false);

    const saveQuestion = () => {

        if(question.question.trim() === '') {
            alert('No text entered for question!');
            return;
        }
        
        if(answers.length < 2) {
            alert('Need to have at least two answers to save!');
            return;
        }

        axios.put('http://3.64.89.107/question/' + question._id, question, {
            headers: {
                'x-api-key': API_KEY
            }
        })
            .then((res) => {
                setQuestion({question: '', correct: '', wrong: []});
                setAdding(false);
                updateQuestions();
        });
            
    }

    const updateQuestions = () => {
        axios.get('http://3.64.89.107/question', {
            headers: {
                'x-api-key': API_KEY
            }
        })
            .then((res) => {
                setQuestions(res.data);
        });
    }

    const addAnswer = (event) => {
        event.preventDefault();

        const newQuestion = {...question};

        if(answers.length !== 0) {
            newQuestion.wrong = [...newQuestion.wrong, answer];
        } else {
            newQuestion.correct = answer;
        }
        
        

        setQuestion(newQuestion);
        setAnswers([...answers, answer]);
        setAnswer('');
    }

    const changedRadioButton = (index) => {
        const temp = answers.map(element => element);

        [temp[0], temp[index]] = [temp[index], temp[0]];

        const newQuestion = {...question};
        
        newQuestion.correct = temp[0];
        newQuestion.wrong = temp.slice(1);

        setQuestion(newQuestion);
        setAnswers(temp);
    }

    const editAnswer = (event, index) => {
        const temp = answers.map(element => element);

        temp[index] = event.target.value;

        const newQuestion = {...question};

        newQuestion.correct = temp[0];
        newQuestion.wrong = temp.slice(1);

        setQuestion(newQuestion);
        setAnswers(temp);
    }

    const deleteAnswer = (index) => {
        const temp = answers.map(element => element);

        temp.splice(index, 1);

        const newQuestion = {...question};

        newQuestion.correct = temp[0];
        newQuestion.wrong = temp.slice(1);

        setQuestion(newQuestion);
        setAnswers(temp);
    }

    useEffect(() => {
        updateQuestions();
    }, [])

    useEffect(() => {
        setAnswer('');
        setAnswers([]);
        setQuestion({question: '', correct: '', wrong: []});
    }, [adding])

    return (
        <div className='Questions'>
            {
                (
                    !adding
                ?
                    (
                        question.question === ''
                    ?
                        <div className='Questions__home'>
                            <div className='Questions__home__head'>
                                <p className='Questions__home__head__title'>Questions</p>
                                <button onClick={event => setAdding(true)} className='Questions__home__head__add'>Add</button>
                            </div>
                            <ul className='Questions__home__list'>
                                {questions.map((question, index) => <li className='Questions__home__list__item' key={question._id}><Question index={index + 1} setAnswers={setAnswers} setQuestion={setQuestion} updateQuestions={updateQuestions} question={question} /></li>)}
                            </ul>
                        </div>
                    :
                        <div className='Questions__edit'>
                            <textarea className='Questions__edit__textarea' name='question' rows='3' cols='60' defaultValue={question.question} onChange={(event) => { setQuestion({...question, question: event.target.value}) }} required />
                            {
                                answers.map((element, index) => 
                                    <div key={index} className='Questions__edit__items'>
                                        <input className='Questions__edit__items__radio' type='radio' checked={index === 0} name='answers' onChange={(event) => changedRadioButton(index)}  />
                                        <input className='Questions__edit__items__text' type='text' value={element} onChange={(event) => editAnswer(event, index)} />
                                        <input className='Questions__edit__items__delete' type='button' value='delete' onClick={(event) => deleteAnswer(index)} />
                                    </div>
                                )
                            } 
                            <form onSubmit={addAnswer} className='Questions__edit__add'>
                                <input className='Questions__edit__add__text' type='text' onChange={(event) => { setAnswer(event.target.value) }} placeholder='add an answer' value={answer} required />
                                <input className='Questions__edit__add__add' type='submit' value='add' />
                            </form>
                            <div className='Questions__edit__buttons'>
                                <button className='Questions__edit__buttons__save' onClick={() => {saveQuestion()}}>Save</button>
                                <button className='Questions__edit__buttons__cancel' onClick={() => {setQuestion({question: '', correct: '', wrong: []})}}>Cancel</button>
                            </div>
                        </div>
                    )
                :
                    <div className='Questions__add'>
                        <textarea className='Questions__add__textarea' name='question' rows='3' cols='60' defaultValue={question.question} onChange={(event) => { setQuestion({...question, question: event.target.value}) }} />
                        {
                            answers.map((element, index) => 
                                <div key={index} className='Questions__add__items'>
                                    <input className='Questions__add__items__radio' type='radio' checked={index === 0} name='answers' onChange={(event) => changedRadioButton(index)}  />
                                    <input className='Questions__add__items__text' type='text' value={element} onChange={(event) => editAnswer(event, index)} />
                                    <input className='Questions__add__items__delete' type='button' value='delete' onClick={(event) => deleteAnswer(index)} />
                                </div>
                            )
                        } 
                        <form  className='Questions__add__add' onSubmit={addAnswer}>
                            <input className='Questions__add__add__text' type='text' onChange={(event) => { setAnswer(event.target.value) }} placeholder='add an answer' value={answer} required />
                            <input className='Questions__add__add__add' type='submit' value='add' />
                        </form>
                        <div className='Questions__add__buttons'>
                            <button className='Questions__add__buttons__save' onClick={() => {saveQuestion()}}>Save</button>
                            <button className='Questions__add__buttons__cancel' onClick={() => {setAdding(false)}}>Cancel</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Questions;
