import {Link} from 'react-router-dom';
import {categoryBackground} from '../utils/helperFunctions';
import styles from '../styles/Articles.module.css';

export default function ArticleCard({article}) {
  return (
    <li
      style={categoryBackground(article.topic)}
      className={styles.Articles__articleItem}
      key={article.article_id}
    >
      <Link to={{pathname: `/articles/${article.article_id}`}}>
        <section className={styles.Articles__articleContainer}>
          <h5>{article.title}</h5>
          <p>{article.author}</p>
          <p>{article.topic}</p>
        </section>
      </Link>
    </li>
  );
}
