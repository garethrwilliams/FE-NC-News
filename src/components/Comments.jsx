import AddComment from './AddComment';
import { getComments } from '../utils/api';
import { deleteComment } from '../utils/api';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../contexts/User';

export default function Comments({ article_id }) {
  const { user } = useContext(UserContext);
  const [comments, setComments] = useState();
  const [updateConfirmed, setUpdateConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function dateToString(timestamp) {
    return new Date(timestamp).toDateString();
  }

  useEffect(() => {
    getComments(article_id).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  }, [article_id, updateConfirmed]);

  if (isLoading) return;

  return (
    <>
      <AddComment
        article_id={article_id}
        setComments={setComments}
        setUpdateConfirmed={setUpdateConfirmed}
      />
      <ul className=' mx-20'>
        <h3 className='p-2'>
          Comments
          <em> ({comments.length})</em>
        </h3>
        {comments.map((comment, i) => {
          return (
            <li className='m-2' key={i}>
              <div className='flex justify-between '>
                <h4>{comment.username}</h4>
                <em>{dateToString(comment.created_at)}</em>
              </div>
              <hr />
              <p className='pt-4 text-justify'>{comment.body}</p>
              <div className='flex justify-between mb-16 mt-4'>
                <p>Votes: {comment.votes}</p>
                {comment.username === user ? (
                  <button
                    onClick={() => {
                      const newComments = [...comments];
                      newComments.splice(i, 1);
                      setComments(newComments);
                      deleteComment(comment.comment_id);
                    }}
                    className={`text-white bg-gray border border-gray rounded mb-2 px-2 hover:bg-grayDark
          }`}
                  >
                    Delete
                  </button>
                ) : (
                  ''
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
