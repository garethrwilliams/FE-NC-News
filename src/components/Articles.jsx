import {getArticles} from '../utils/api';
import {useState, useEffect} from 'react';
import styles from '../styles/Articles.module.css';
import {categoryBackground} from '../utils/helperFunctions';
import {Link} from 'react-router-dom';

export default function Articles() {
  console.log('styles:', styles);
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((newArticles) => {
      console.log('articles:', newArticles);
      setArticles(newArticles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return;

  return (
    <div className={styles.Articles__articlesContainer}>
      <h1>Articles</h1>
      <ul className={styles.Articles__articlesList}>
        {articles.map((article) => {
          return (
            <li
              style={categoryBackground(article.topic)}
              className={styles.Articles__articleItem}
              key={article.article_id}
            >
              <Link to={`${article.article_id}`}>
                <section className={styles.Articles__articleContainer}>
                  <h5>{article.title}</h5>
                  <p>{article.author}</p>
                  <p>{article.topic}</p>
                </section>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
