import axios from 'axios';

const ncNewsApi = axios.create({
  baseURL: 'https://gareths-nc-news.herokuapp.com/api',
});

export const getArticles = async (searchParams) => {
  const params = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  const {data} = await ncNewsApi.get('/articles', {params: params});
  return data.articles;
};

export const getTopics = async () => {
  const {data} = await ncNewsApi.get('/topics');
  return data.topics;
};
