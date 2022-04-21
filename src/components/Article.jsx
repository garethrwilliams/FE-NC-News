import {useEffect, useState} from 'react';
import {getArticle, patchArticle, getComments} from '../utils/api';
import {useParams} from 'react-router';
import style from '../styles/Article.module.css';

export default function Article() {
  const [article, setArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [voteCount, setVoteCount] = useState();
  const [voted, setVoted] = useState(false);
  const [comments, setComments] = useState();
  let {article_id} = useParams();

  function dateToString(timestamp) {
    return new Date(timestamp).toDateString();
  }

  useEffect(() => {
    Promise.all([getArticle(article_id), getComments(article_id)]).then(
      (data) => {
        console.log('data[0]:', data[1]);
        setArticle(data[0]);
        setVoteCount(data[0].votes);
        setComments(data[1]);
        setIsLoading(false);
      }
    );
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
    <>
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
      <ul className={style.Comments__container}>
        <h3>Comments</h3>
        {comments.map((comment) => {
          return (
            <li
              className={style.Comments__commentList}
              key={comment.comment_id}
            >
              <div className={style.Comments__commentHeader}>
                <h4>{comment.username}</h4>
                <em>{dateToString(comment.created_at)}</em>
              </div>
              <hr />
              <p>{comment.body}</p>
              <p>Votes: {comment.votes}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
