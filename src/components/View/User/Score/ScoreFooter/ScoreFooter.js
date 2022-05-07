import './ScoreFooter.css';

const ScoreFooter = (props) => {
  return (
    <div className='ScoreFooter'>
      <p className={(props.first ? 'hidden' : '')} onClick={props.previousPage}>&#60; previous</p>
      <p className={(props.last ? 'hidden' : '')} onClick={props.nextPage}>next &#62;</p>
    </div>
  );
}

export default ScoreFooter;
