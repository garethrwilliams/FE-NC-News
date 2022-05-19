import axios from 'axios';

const ncNewsApi = axios.create({
  baseURL: 'https://gareths-nc-news.herokuapp.com/api',
});

export const getArticles = async (topic, page = 1, searchParams, limit = 6) => {
  try {
    const params = {
      topic: topic,
      limit: limit,
      p: page,
    };
    searchParams.forEach((value, key) => {
      params[key] = value;
    });

    const { data } = await ncNewsApi.get('/articles', { params: params });
    return data.articles;
  } catch (err) {
    console.log('err:', err);
  }
};

export const getTopics = async () => {
  const { data } = await ncNewsApi.get('/topics');
  return data.topics;
};

export const getArticle = async (article_id) => {
  const { data } = await ncNewsApi.get(`/articles/${article_id}`);
  return data.article;
};

export const patchArticle = async (article_id, body) => {
  try {
    const { data } = await ncNewsApi.patch(`/articles/${article_id}`, body);
  } catch (err) {}
};

export const getComments = async (article_id) => {
  const { data } = await ncNewsApi.get(`/articles/${article_id}/comments`, {
    params: {
      limit: 50,
    },
  });
  const comments = data.comments;
  comments.sort((a, b) => {
    return Date.parse(b.created_at) - Date.parse(a.created_at);
  });
  return comments;
};

export const postComment = async (article_id, body) => {
  try {
    await ncNewsApi.post(`/articles/${article_id}/comments`, body);
  } catch (err) {}
};

export const deleteComment = async (comment_id) => {
  const { data } = await ncNewsApi.delete(`comments/${comment_id}`);
  console.log('data:', data);
  return data;
};

export const getUsers = async () => {
  const { data } = await ncNewsApi.get('/users');
  return data.users;
};
