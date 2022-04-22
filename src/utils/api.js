import axios from 'axios';

const ncNewsApi = axios.create({
  baseURL: 'https://gareths-nc-news.herokuapp.com/api',
});

export const getArticles = async (topic, page = 1, searchParams) => {
  const params = {
    topic: topic,
    limit: 6,
    p: page,
  };
  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  console.log('params:', params);

  const {data} = await ncNewsApi.get('/articles', {params: params});
  return data.articles;
};

export const getTopics = async () => {
  const {data} = await ncNewsApi.get('/topics');
  return data.topics;
};

export const getArticle = async (article_id) => {
  const {data} = await ncNewsApi.get(`/articles/${article_id}`);
  return data.article;
};

export const patchArticle = async (article_id, body) => {
  try {
    console.log('body:', body);
    const {data} = await ncNewsApi.patch(`/articles/${article_id}`, body);
    console.log('data:', data);
  } catch (err) {
    console.log('err:', err);
  }
};

export const getComments = async (article_id) => {
  const {data} = await ncNewsApi.get(`/articles/${article_id}/comments`, {
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
    console.log(article_id, body);
    const {data} = await ncNewsApi.post(
      `/articles/${article_id}/comments`,
      body
    );
    console.log('data:', data);
  } catch (err) {}
};

export const deleteComment = async (comment_id) => {
  const {data} = await ncNewsApi.delete(`comments/${comment_id}`);
  console.log('data:', data);
  return data;
};

export const getUsers = async () => {
  const {data} = await ncNewsApi.get('/users');
  return data.users.map((e) => e.username);
};
