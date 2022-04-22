import {Link} from 'react-router-dom';
import {useParams} from 'react-router';
import {useState, useEffect} from 'react';
import FilterArticles from './FilterArticles';
import ArticlePagination from './ArticlePagination';
import {getArticles, getTopics} from '../utils/api';
import {categoryBackground} from '../utils/helperFunctions';
import styles from '../styles/Articles.module.css';

export default function Articles(props) {
  const {topic} = useParams();
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);
  const [topics, setTopics] = useState();
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([getArticles(topic, page), getTopics()])
      .catch((err) => {
        if (err) return setLastPage(true);
      })

      .then((data) => {
        setArticles(data[0]);
        setTopics(data[1]);
        setIsLoading(false);
        setLastPage(false);
      });
  }, [topic, page]);

  if (isLoading) return;

  return (
    <div className={styles.Articles__articlesContainer}>
      <h1>Articles</h1>
      <FilterArticles topics={topics} />
      <ul className={styles.Articles__articlesList}>
        {articles.map((article) => {
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
        })}
      </ul>
      <ArticlePagination page={page} setPage={setPage} lastPage={lastPage} />
    </div>
  );
}
