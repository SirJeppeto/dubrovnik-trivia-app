import './Game.css';
import Overlay from './Overlay/Overlay';
import Playground from './Playground/Playground';
import { useState } from 'react';

const Game = (props) => {
  const [startShow, setStartShow] = useState(true);

  return (
    <div className='Game'>
      {
        (startShow ? <Overlay startShow={startShow} toggleScreen={props.toggleScreen} setStartShow={setStartShow} />  : <Playground toggleScreen={props.toggleScreen} setStartShow={setStartShow} />)
      }
    </div>
  );
}

export default Game;