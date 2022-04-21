import {useEffect, useState} from 'react';
import {getComments} from '../utils/api';
import {useParams} from 'react-router';
import style from '../styles/Article.module.css';

export default function Comments() {
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let {article_id} = useParams();

  function dateToString(timestamp) {
    return new Date(timestamp).toDateString();
  }

  useEffect(() => {
    getComments(article_id).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return;

  return (
    <ul className={style.Comments__container}>
      <h3>Comments</h3>
      {comments.map((comment) => {
        return (
          <li className={style.Comments__commentList} key={comment.comment_id}>
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
  );
}
