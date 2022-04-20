import axios from 'axios';

const ncNewsApi = axios.create({
  baseURL: 'https://gareths-nc-news.herokuapp.com/api',
});

export const getArticles = async (topic) => {
  const {data} = await ncNewsApi.get('/articles', {params: {topic: topic}});
  return data.articles;
};

<<<<<<< HEAD
export const getArticle = async (articleId) => {
  const {data} = await ncNewsApi.get(`articles/${articleId}`);
  console.log(data);
  return data.article;
=======
export const getTopics = async () => {
  const {data} = await ncNewsApi.get('/topics');
  return data.topics;
>>>>>>> main
};
