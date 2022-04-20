import axios from 'axios';

const ncNewsApi = axios.create({
  baseURL: 'https://gareths-nc-news.herokuapp.com/api',
});

export const getArticles = async (topic) => {
  const {data} = await ncNewsApi.get('/articles', {params: {topic: topic}});
  return data.articles;
};

export const getTopics = async () => {
  const {data} = await ncNewsApi.get('/topics');
  return data.topics;
};
