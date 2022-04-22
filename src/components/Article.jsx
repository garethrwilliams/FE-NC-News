import {useEffect, useState} from 'react';
import {getArticle, patchArticle} from '../utils/api';
import {useParams} from 'react-router';
import style from '../styles/Article.module.css';

export default function Article({article_id}) {
  const [article, setArticle] = useState();
  const [voteCount, setVoteCount] = useState();
  const [voted, setVoted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function dateToString(timestamp) {
    return new Date(timestamp).toDateString();
  }

  useEffect(() => {
    getArticle(article_id).then((data) => {
      setArticle(data);
      setVoteCount(data.votes);
      setIsLoading(false);
    });
  }, [article_id]);

  const handleVoteSubmit = (e) => {
    e.preventDefault();
    setVoted(true);
    setVoteCount((current) => {
      return (current += 1);
    });
    patchArticle(article_id, {inc_votes: 1});
  };

  if (isLoading) return;

  return (
    <div className={style.Article__container}>
      <h1>{article.title}</h1>
      <h2>{article.author}</h2>

      <div className={style.Article__dateVote}>
        <em>{dateToString(article.created_at)}</em>
        <p>Votes: {voteCount}</p>
      </div>
      <p>{article.body}</p>
      <button disabled={voted} onClick={handleVoteSubmit}>
        Add Vote
      </button>
    </div>
  );
}
