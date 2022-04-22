import axios from 'axios';

const ncNewsApi = axios.create({
  baseURL: 'https://gareths-nc-news.herokuapp.com/api',
});

export const getArticles = async (topic, page = 1) => {
  // try {
  const {data} = await ncNewsApi.get('/articles', {
    params: {topic: topic, limit: 6, p: page},
  });
  return data.articles;
  // } catch (err) {
  // return err;
  // }
};

export const getTopics = async () => {
  const {data} = await ncNewsApi.get('/topics');
  return data.topics;
};

export const getArticle = async (article_Id) => {
  const {data} = await ncNewsApi.get(`/articles/${article_Id}`);
  return data.article;
};

export const patchArticle = async (article_Id, body) => {
  try {
    console.log('body:', body);
    const {data} = await ncNewsApi.patch(`/articles/${article_Id}`, body);
    console.log('data:', data);
  } catch (err) {
    console.log('err:', err);
  }
};

export const getComments = async (article_Id) => {
  const {data} = await ncNewsApi.get(`/articles/${article_Id}/comments`);
  return data.comments;
};

export const postComment = async (article_Id, body) => {
  try {
    console.log(article_Id, body);
    const {data} = await ncNewsApi.post(
      `/articles/${article_Id}/comments`,
      body
    );
    console.log('data:', data);
  } catch (err) {
    console.log('err:', err);
  }
};

export const getUsers = async () => {
  const {data} = await ncNewsApi.get('/users');
  return data.users.map((e) => e.username);
};
