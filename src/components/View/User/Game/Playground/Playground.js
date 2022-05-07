import './Playground.css';
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Question from './Question/Question';
import axios from 'axios';
import PlaygroundScore from './PlaygroundScore/PlaygroundScore';
import Timer from './Timer/Timer';

const API_KEY = process.env.REACT_APP_API_KEY;

const aspectRatio = window.innerWidth / window.innerHeight;

const randomizeArray = (array) => {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

const Playground = (props) => {
  const [index, setIndex] = useState(0);
  const [alreadyClicked, setAlreadyClicked] = useState(false);
  const [showScoreInput, setShowScoreInput] = useState(false);
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [stop, setStop] = useState(false);
  const [correct, setCorrect] = useState(true);

  const load = () => {
    axios.get('http://3.64.89.107/question/random', {
      headers: {
          'x-api-key': API_KEY
      }
    })
      .then((res) => {
        const questions = res.data.map(question => ({
          key: question._id,
          question: question.question,
          answers: randomizeArray([
            {
              text: question.correct,
              correct: true
            },
            ...randomizeArray(question.wrong).slice(0, 3).map(text => ({
              text: text,
              correct: false
            }))
          ])
        }));
        
        setQuestions(questions);
        setLoading(false);
    });
  };

  useEffect(() => load(), []);

  const clickedAnswer = (setColor, correct) => {
    setCorrect(correct);
    setStop(true);
    setAlreadyClicked(true);

    setTimeout(() => {
        setColor();
        setAlreadyClicked(false);

        if(index === questions.length - 1) {
          setShowScoreInput(true);
          setLoading(true);
          return;
        }

        setStop(false);
        setIndex(index + 1);
    }, 1010);
  }
    
  const timeOut = (time, setTime) => {
    if(correct) setScore(score + time);

    if(index === questions.length - 1) {
      setShowScoreInput(true);
      setLoading(true);
      return;
    }

    setStop(false);
    setTime(10);
    setIndex(index + 1);
  }

  const toggle = () => {
    setScore(0);
    setIndex(0);
    setStop(false);
    setCorrect(true);
    load();
    setShowScoreInput(false);
  }
      
  return (
    <div className='Playground'>
      {
        (showScoreInput ? <PlaygroundScore score={score} toggleScreen={props.toggleScreen} toggle={toggle} /> :
          (loading ? <p className='Playground__loading'>loading</p> :
            <div className='Playground__game'>
              <Timer timeOut={timeOut} stop={stop} />
              <p className='Playground__game__score'>score: {score}</p>
              <Canvas orthographic={true} camera={{near: 20, far: 150, zoom: aspectRatio * 16, position: [-20, 20, 100]}}>
                <ambientLight intensity={0.2} />
                <directionalLight color='white' intensity={0.6} position={[5, 5, 5]} />
                <OrbitControls />
                <Question index={index} question={questions[index]} clickedAnswer={clickedAnswer} alreadyClicked={alreadyClicked}/>
              </Canvas>
            </div> 
          )
        )
      }
    </div>
  )
}

export default Playground;


