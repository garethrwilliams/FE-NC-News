import { useState } from 'react';
import { postComment } from '../utils/api';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';

export default function AddComment({
  article_id,
  setComments,
  setUpdateConfirmed,
}) {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState('');
  const [showNewComment, setShowNewComment] = useState(false);

  const handleComment = (e) => {
    e.preventDefault();
    setShowNewComment(!showNewComment);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdateConfirmed(false);
    setShowNewComment(!showNewComment);

    const comment = {
      votes: 0,
      username: user,
      body: e.target.form[0].value,
      created_at: new Date().toISOString(),
    };

    setComments((current) => {
      const newComments = [...current];
      newComments.unshift(comment);
      return newComments;
    });

    postComment(article_id, {
      username: user,
      body: e.target.form[0].value,
    }).then(() => {
      setUpdateConfirmed(true);
    });
    e.target.form[0].value = '';
  };

  return (
    <>
      <div className='flex flex-col mx-20 mt-10'>
        <button
          onClick={handleComment}
          className={`text-white bg-gray border border-gray rounded mb-2 hover:bg-grayDark
          }`}
        >
          {showNewComment ? 'Hide Comment' : 'Comment...'}
        </button>
        <form
          className={`flex-col flex transition ${
            showNewComment ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <textarea
            onChange={(e) => setNewComment(e.target.value)}
            className={`border border-grey rounded h-28 p-2 ${
              showNewComment ? '' : 'max-h-0'
            }`}
            placeholder='comment - min 20 characters'
          />
          <button
            onClick={handleSubmit}
            disabled={newComment.length < 20}
            className={`text-white bg-gray border border-gray rounded px-2 my-2 ${
              newComment.length < 20 ? '' : 'hover:bg-grayDark'
            } w-32 ${showNewComment ? '' : 'max-h-0'}`}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
