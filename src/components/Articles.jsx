import {getArticles, getTopics} from '../utils/api';
import {useState, useEffect} from 'react';
import styles from '../styles/Articles.module.css';
import {categoryBackground} from '../utils/helperFunctions';
import FilterArticles from './FilterArticles';
import {useSearchParams} from 'react-router-dom';

export default function Articles() {
  const [articles, setArticles] = useState();
  const [topics, setTopics] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  /* for (const params in searchParams) {
    console.log('params:', params);
  }
 */

  useEffect(() => {
    Promise.all([getArticles(searchParams), getTopics()]).then((data) => {
      setArticles(data[0]);
      setTopics(data[1]);
      setIsLoading(false);
    });
  }, [searchParams]);

  if (isLoading) return;

  return (
    <div className={styles.Articles__articlesContainer}>
      <h1>Articles</h1>
      <FilterArticles topics={topics} setSearchParams={setSearchParams} />
      <ul className={styles.Articles__articlesList}>
        {articles.map((article) => {
          return (
            <li
              style={categoryBackground(article.topic)}
              className={styles.Articles__articleItem}
              key={article.article_id}
            >
              <section className={styles.Articles__articleContainer}>
                <h5>{article.title}</h5>
                <p>{article.author}</p>
                <p>{article.topic}</p>
              </section>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
