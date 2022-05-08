import {Link} from 'react-router-dom';
import {useParams} from 'react-router';
import {useState, useEffect} from 'react';
import FilterArticles from './FilterArticles';
import {useSearchParams} from 'react-router-dom';
import ArticlePagination from './ArticlePagination';
import {getArticles, getTopics} from '../utils/api';
import {categoryBackground} from '../utils/helperFunctions';
import styles from '../styles/Articles.module.css';
import ArticleCard from './ArticleCard';

export default function Articles(props) {
  const {topic} = useParams();
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [topics, setTopics] = useState();
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([getArticles(topic, page, searchParams), getTopics()])

      .then((data) => {
        setArticles(data[0]);
        setTopics(data[1]);
        setIsLoading(false);
        setLastPage(false);
      })
      .catch((err) => {
        setPage((current) => --current);
        setLastPage(true);
      });
  }, [topic, page, searchParams]);

  // if (isLoading) return;

  return (
    <div className={styles.Articles__articlesContainer}>
      <h1>Articles</h1>
      <FilterArticles topics={topics} setSearchParams={setSearchParams} />
      <ul className={styles.Articles__articlesList}>
        {articles &&
          articles.map((article) => {
            return <ArticleCard article={article} />;
          })}
      </ul>
      <ArticlePagination page={page} setPage={setPage} lastPage={lastPage} />
    </div>
  );
}
