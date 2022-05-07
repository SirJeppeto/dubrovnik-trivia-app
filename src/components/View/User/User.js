import './User.css';
import { useState } from 'react';
import Game from './Game/Game';
import Score from './Score/Score';

const User = () => {
  const [showScore, changeShowScore] = useState(false);

  const toggleScreen = () => {
    changeShowScore(!showScore);
  }

  return (
    <div className={'User' + (showScore ? ' User__score' : '')}>
      <Game toggleScreen={toggleScreen} />
      <Score toggleScreen={toggleScreen} />
    </div>
  );
}

export default User;
