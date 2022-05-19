import { useEffect, useState } from 'react';
import { getArticle, patchArticle } from '../utils/api';
import { categoryBackground, capitalise } from '../utils/helperFunctions';

export default function Article({ article_id }) {
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
    patchArticle(article_id, { inc_votes: 1 });
  };

  if (isLoading) return;

  return (
    <div className='border border-grey  rounded mx-20'>
      <h1 className='p-2'>{article.title}</h1>
      <h2 className='p-2'>{article.author}</h2>
      <div style={categoryBackground(article.topic)} className='text-white'>
        <h3 className='px-2'>{capitalise(article.topic)}</h3>
      </div>

      <div className='flex justify-between p-2'>
        <em>{dateToString(article.created_at)}</em>
        <p>Votes: {voteCount}</p>
      </div>
      <p className='p-2'>{article.body}</p>
      <button
        className={`text-white bg-gray border border-gray rounded px-2 m-2 ${
          voted ? '' : 'hover:bg-grayDark'
        }`}
        disabled={voted}
        onClick={handleVoteSubmit}
      >
        Add Vote
      </button>
    </div>
  );
}
