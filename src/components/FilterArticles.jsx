import { Link, useNavigate } from 'react-router-dom';
import { capitalise, uncapitalise } from '../utils/helperFunctions';

export default function FilterArticles({ topics, setSearchParams }) {
  let navigate = useNavigate();

  const handleTopicChange = (e) => {
    e.preventDefault();
    const param = uncapitalise(e.target.value);
    if (param === 'all') {
      return navigate(`/articles`);
    }
    navigate(`/articles/topics/${param}`);
  };

  const handleSortChange = (e) => {
    e.preventDefault();
    const params = e.target.value;
    if (['created_at', 'comment_count', 'votes'].includes(params)) {
      setSearchParams({ sort_by: params });
    }
    if (['ASC', 'DESC'].includes(params)) {
      setSearchParams({ order: params });
    }
    if (['None'].includes(params)) setSearchParams({});
  };

  return (
    <div className='flex flex-col m-2 pb-2 px-2 '>
      <label htmlFor='topic'>Select topic</label>

      <select
        id='topic'
        onChange={handleTopicChange}
        className='border border-gray rounded p-0.5 my-2'
      >
        <option key={0}>All</option>
        {topics &&
          topics.map((topic) => {
            const caps = capitalise(topic.slug);
            return <option key={topic.slug}>{caps}</option>;
          })}
      </select>

      <label htmlFor='sortBy'>Sort by</label>

      <select
        id='sortBy'
        onChange={handleSortChange}
        className='border border-gray rounded p-0.5 my-2'
      >
        <option>Recommended</option>
        <option value='created_at'>Date</option>
        <option value='comment_count'>Comment Count</option>
        <option value='votes'>Votes</option>
        <option value='ASC'>Ascending</option>
        <option value='DESC'>Descending</option>
      </select>

      <Link to='/'>
        <button className='border border-gray rounded my-5 px-2'>CLEAR</button>
      </Link>
    </div>
  );
}
