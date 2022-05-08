import styles from '../styles/FilterArticles.module.css';
import {Link, useNavigate} from 'react-router-dom';

export default function FilterArticles({topics, setSearchParams}) {
  let navigate = useNavigate();

  const handleTopicChange = (e) => {
    e.preventDefault();
    navigate(`/articles/topics/${e.target.value}`);
  };

  const handleSortChange = (e) => {
    e.preventDefault();
    const params = e.target.value;
    if (['created_at', 'comment_count', 'votes'].includes(params)) {
      setSearchParams({sort_by: params});
    }
    if (['ASC', 'DESC'].includes(params)) {
      setSearchParams({order: params});
    }
  };

  return (
    <div className={styles.FilterArticles__container}>
      <label htmlFor='topic'>Select topic</label>

      <select id='topic' onChange={handleTopicChange}>
        {topics &&
          topics.map((topic) => {
            return <option key={topic.slug}>{topic.slug}</option>;
          })}
      </select>

      <label htmlFor='sortBy'>Sort articles by</label>

      <select id='sortBy' onChange={handleSortChange}>
        <option value='created_at'>Date</option>
        <option value='comment_count'>Comment Count</option>
        <option value='votes'>Votes</option>
        <option value='ASC'>Ascending</option>
        <option value='DESC'>Descending</option>
      </select>

      <Link to='/articles'>
        <button className={styles.FilterArticles__clearButton}>CLEAR</button>
      </Link>
    </div>
  );
}
