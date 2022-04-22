import {useState} from 'react';
import {postComment} from '../utils/api';
import {useContext} from 'react';
import {UserContext} from '../contexts/User';
import style from '../styles/AddComment.module.css';

export default function AddComment({
  article_id,
  setComments,
  setUpdateConfirmed,
}) {
  const {users} = useContext(UserContext);
  const [newComment, setNewComment] = useState('');
  const [validUsername, setValidUsername] = useState(false);
  const [showNewComment, setShowNewComment] = useState(false);

  const handleComment = (e) => {
    e.preventDefault();
    setShowNewComment(!showNewComment);
  };

  const handleUsername = (e) => {
    setValidUsername(users.includes(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdateConfirmed(false);

    console.log(e.target.form[1].value);

    const comment = {
      votes: 0,
      username: e.target.form[1].value,
      body: e.target.form[0].value,
      created_at: new Date().toISOString(),
    };

    setComments((current) => {
      const newComments = [...current];
      newComments.unshift(comment);
      return newComments;
    });

    postComment(article_id, {
      username: e.target.form[1].value,
      body: e.target.form[0].value,
    }).then(() => {
      setUpdateConfirmed(true);
    });
    e.target.form[0].value = '';
  };

  return (
    <>
      <div className={style.AddComment__container}>
        <button onClick={handleComment}>
          {showNewComment ? 'Hide Comment' : 'Comment'}
        </button>
        <form
          style={{display: showNewComment ? 'flex' : 'none'}}
          className={style.AddComment__newComment}
        >
          <textarea
            onChange={(e) => setNewComment(e.target.value)}
            className={style.AddComment__textArea}
            placeholder='comment - min 20 characters'
          />
          <div className={style.AddComment__nameSubmit}>
            <input
              placeholder='Username'
              onChange={handleUsername}
              style={{
                backgroundColor: validUsername ? 'lightgreen' : 'lightcoral',
              }}
            ></input>
            <button
              onClick={handleSubmit}
              disabled={!validUsername || newComment.length < 20}
            >
              Submit
            </button>
            <p
              style={{
                display: validUsername ? 'none' : 'block',
              }}
            >
              *hint - cooljmessy might work
            </p>
          </div>
        </form>
      </div>
      ;
    </>
  );
}
