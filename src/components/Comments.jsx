import AddComment from './AddComment';
import {getComments} from '../utils/api';
import {deleteComment} from '../utils/api';
import {useEffect, useState} from 'react';
import style from '../styles/Comments.module.css';

export default function Comments({article_id}) {
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
    <>
      <AddComment article_id={article_id} setComments={setComments} />
      <ul className={style.Comments__container}>
        <h3>Comments</h3>
        {comments.map((comment, i) => {
          return (
            <li className={style.Comments__commentList} key={i}>
              <div className={style.Comments__commentHeader}>
                <h4>{comment.username}</h4>
                <em>{dateToString(comment.created_at)}</em>
              </div>
              <hr />
              <p>{comment.body}</p>
              <div className={style.Comments__votesDelete}>
                <p>Votes: {comment.votes}</p>
                <button
                  onClick={() => {
                    const newComments = [...comments];
                    newComments.splice(i, 1);
                    setComments(newComments);
                    deleteComment(comment.comment_id);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
