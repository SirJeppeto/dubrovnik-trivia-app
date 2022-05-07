import './ScoreItem.css';

const ScoreItem = (props) => {
  return (
    <div className='ScoreItem'>
        <p className='ScoreItem__rank'>{props.rank}</p>
        <p className='ScoreItem__username'>{props.username}</p>
        <p className='ScoreItem__score'>{props.score}</p>
    </div>
  );
}

export default ScoreItem;
