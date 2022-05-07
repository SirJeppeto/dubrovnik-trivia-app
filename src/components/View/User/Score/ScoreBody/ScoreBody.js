import './ScoreBody.css';
import ScoreItem from './ScoreItem/ScoreItem';

const ScoreBody = (props) => {
  return (
    <div className='ScoreBody'>
      <ScoreItem rank='#' username='USERNAME' score='SCORE' />
      {
        (props.loading ? <p className='ScoreBody__loading'>loading</p> : props.scores.slice(0, 10).map(score => <ScoreItem key={score.key} rank={score.rank + '. '} username={score.username} score={score.score} />))
      }
    </div>
  );
}

export default ScoreBody;
