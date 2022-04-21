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

export const getArticle = async (articleId) => {
  const {data} = await ncNewsApi.get(`/articles/${articleId}`);
  return data.article;
};
export const getComments = async (articleId) => {
  const {data} = await ncNewsApi.get(`/articles/${articleId}/comments`);
  console.log('data:', data);
  return data.comments;
};
export const patchArticle = async (articleId, body) => {
  try {
    console.log('body:', body);
    const {data} = await ncNewsApi.patch(`/articles/${articleId}`, body);
  } catch (err) {
    console.log('err:', err);
  }
};
