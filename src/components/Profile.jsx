import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import ArticleCard from './ArticleCard';
import { useEffect, useState } from 'react';
import { getArticles } from '../utils/api';
import Loader from './Loader';

export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles(
      undefined,
      undefined,
      new URLSearchParams({ sort_by: 'author' }),
      100
    ).then((data) => {
      const userArticles = data.filter((article) => {
        return article.username === user;
      });

      setArticles(userArticles);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, [user]);

  return (
    <div className=''>
      <div className='border border-grey rounded mx-10 text-center h-12'>
        <p>Username: {user}</p>
        <p>Total articles: {articles && <span>{articles.length}</span>}</p>
      </div>
      <div className='flex flex-col'>
        {isLoading ? (
          <div className='m-auto p-12'>
            <Loader />
            <p>Loading...</p>
          </div>
        ) : (
          <>
            <h3 className='mx-24 mt-5'>My articles:</h3>
            <ul className='mx-20 '>
              {articles.map((article) => {
                return <ArticleCard article={article} />;
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
