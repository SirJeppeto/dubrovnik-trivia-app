import './Score.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ScoreHeader from './ScoreHeader/ScoreHeader';
import ScoreBody from './ScoreBody/ScoreBody';
import ScoreFooter from './ScoreFooter/ScoreFooter';


const Score = (props) => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    axios.get('http://3.64.89.107/score/' + page)
      .then((res) => {
        let rank = page * 10 + 1;

        setScores(res.data.map(score => ({
          key: score._id,
          rank: rank++,
          username: score.username,
          score: score.score
        })));

        setLoading(false);
      });
  }, [page]);

  const nextPage = () => {
    if(scores.length === 11) {
      setLoading(true);
      setPage(page + 1);
    }
  }

  const previousPage = () => {
    if(page !== 0) {
      setLoading(true);
      setPage(page - 1);
    }
  }

  return (
    <div className="Score">
      <p className='Score__back' onClick={props.toggleScreen}>&#60; back</p>
      <ScoreHeader />
      <ScoreBody loading={loading} scores={scores} />
      <ScoreFooter first={page === 0} last={scores.length < 11} nextPage={nextPage} previousPage={previousPage} />
    </div>
  );
}

export default Score;
