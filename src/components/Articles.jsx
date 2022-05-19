import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import FilterArticles from './FilterArticles';
import { useSearchParams } from 'react-router-dom';
import ArticlePagination from './ArticlePagination';
import { getArticles, getTopics } from '../utils/api';
import ArticleCard from './ArticleCard';
import Loader from './Loader';

export default function Articles(props) {
  const { topic } = useParams();
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
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      })
      .catch((err) => {
        setPage((current) => --current);
        setLastPage(true);
      });
  }, [topic, page, searchParams]);

  // if (isLoading) return;

  return (
    <div className=''>
      <div className='flex-1 flex flex-row mr-2'>
        <FilterArticles topics={topics} setSearchParams={setSearchParams} />
        {isLoading ? (
          <div className='m-auto'>
            <Loader />
            <p>Loading...</p>
          </div>
        ) : (
          <div>
            <ul className=''>
              {articles.map((article) => {
                return <ArticleCard article={article} />;
              })}
            </ul>
            <ArticlePagination
              page={page}
              setPage={setPage}
              lastPage={lastPage}
              setLastPage={setLastPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}
