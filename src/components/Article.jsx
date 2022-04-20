import {useEffect, useState} from 'react';
import {getArticle} from '../utils/api';
import {useParams} from 'react-router';
import style from '../styles/Article.module.css';

export default function Article() {
  const [article, setArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let {article_id} = useParams();
  let d;

  useEffect(() => {
    getArticle(article_id).then((newArticle) => {
      console.log('newArticle:', newArticle);
      setArticle(newArticle);
      setIsLoading(false);
    });
  }, []);

  if (!isLoading) {
    d = new Date(article.created_at).toDateString();
  }

  if (isLoading) return;

  return (
    <div className={style.Article__container}>
      <h1>{article.title}</h1>
      <h2>{article.author}</h2>
      <p>
        <em>{d}</em>
      </p>
      <p>{article.body}</p>
    </div>
  );
}
