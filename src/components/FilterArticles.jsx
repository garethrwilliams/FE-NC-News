import styles from '../styles/FilterArticles.module.css';
import {Link, useNavigate} from 'react-router-dom';

export default function FilterArticles({topics}) {
  let navigate = useNavigate();

  const handleTopicChange = (e) => {
    e.preventDefault();
    navigate(`/articles/topics/${e.target.value}`);
  };

  return (
    <div className={styles.FilterArticles__container}>
      <label htmlFor='topic'>Select topic</label>

      <select id='topic' onChange={handleTopicChange}>
        {topics.map((topic) => {
          return <option key={topic.slug}>{topic.slug}</option>;
        })}
      </select>

      <Link to='/articles'>
        <button className={styles.FilterArticles__clearButton}>CLEAR</button>
      </Link>
    </div>
  );
}
