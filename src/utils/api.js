import axios from 'axios';

const ncNewsApi = axios.create({
  baseURL: 'https://gareths-nc-news.herokuapp.com/api',
});

export const getArticles = async () => {
  const {data} = await ncNewsApi.get('/articles');
  return data.articles;
};

export const getArticle = async (articleId) => {
  const {data} = await ncNewsApi.get(`articles/${articleId}`);
  console.log(data);
  return data.article;
};
