import axios from 'axios';
import { useState } from 'react';
import './PlaygroundScore.css';

const API_KEY = process.env.REACT_APP_API_KEY;

const PlaygroundScore = (props) => {
    const [status, setStatus] = useState({
        text: ''
    });

    const send = () => {
        const username = document.querySelector('.PlaygroundScore__form__input').value;

        if(username === null) return;

        const body = {
            username: username,
            score: props.score
        };
        
        axios.post('http://3.64.89.107/score', body, {
            headers: {
                'x-api-key': API_KEY
            }
        })
            .then((res) => {
                setStatus({
                    text: 'successful'
                });
        })
            .catch((error) => {
                setStatus({
                    text: 'unsuccessful'
                });
        });
    }

    return (
        <div className='PlaygroundScore'>
            <p className='PlaygroundScore__home' onClick={props.toggle}>&#60; restart</p>
            <p className='PlaygroundScore__scores' onClick={props.toggleScreen}>scores &#62;</p>
            <p className='PlaygroundScore__cong'>congratulations</p>
            <p className='PlaygroundScore__score'>Your score is: {props.score}</p>
            {
                (
                    status.text !== '' ? <p className='PlaygroundScore__status'>{status.text}</p> : 
                        <div className='PlaygroundScore__form'>
                            <input type='text' name='username' className='PlaygroundScore__form__input' placeholder='username'></input>
                            <button className='PlaygroundScore__form__submit' onClick={send}>&#62;</button>
                        </div>
                )
            }
        </div>
    );
}

export default PlaygroundScore;