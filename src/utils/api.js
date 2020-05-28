import axios from "axios";
const base_url = "https://tel-news-port.herokuapp.com/api";

export const fetchAllTopics = () => {
  return axios.get(`${base_url}/topics`).then(({ data: { topics } }) => {
    return topics;
  });
};

export const fetchAllArticles = (topic, sort_by) => {
  return axios
    .get(`${base_url}/articles`, {
      params: { topic, sort_by },
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const fetchAllUsers = () => {
  return axios.get(`${base_url}/users`).then(({ data: { users } }) => {
    return users;
  });
};

export const patchVotes = (article_id, increment) => {
  return axios.patch(`${base_url}/articles/${article_id}`, {
    inc_votes: increment,
  });
};

export const fetchArticleById = (article_id) => {
  return axios
    .get(`${base_url}/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const fetchAllComments = (article_id) => {
  return axios
    .get(`${base_url}/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const postCommentByArticleId = (article_id, newComment) => {
  return axios.post(`${base_url}/articles/${article_id}/comments`, newComment);
};

export const deleteCommentById = (comment_id) => {
  return axios.delete(`${base_url}/comments/${comment_id}`);
};

export const postNewTopic = (newTopic) => {
  return axios.post(`${base_url}/topics`, newTopic);
};

export const postNewArticleToTopic = (topic_slug, newArticle) => {
  return axios.post(`${base_url}/topics/articles`, newArticle);
};
