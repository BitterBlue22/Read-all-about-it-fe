import axios from "axios";

export const fetchAllTopics = () => {
  return axios
    .get("https://tel-news-port.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    });
};

export const fetchAllArticles = (topic) => {
  return axios
    .get("https://tel-news-port.herokuapp.com/api/articles", {
      params: { topic },
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const fetchAllUsers = () => {
  return axios
    .get("https://tel-news-port.herokuapp.com/api/users")
    .then(({ data: { users } }) => {
      return users;
    });
};

export const patchVotes = (article_id) => {
  return axios.patch(
    `https://tel-news-port.herokuapp.com/api/articles/${article_id}`,
    {
      inc_votes: 1,
    }
  );
};

export const fetchArticleById = (article_id) => {
  return axios
    .get(`https://tel-news-port.herokuapp.com/api/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const postCommentByArticleId = (article_id) => {};

export const fetchAllComments = (article_id) => {
  return axios
    .get(
      `https://tel-news-port.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data: { comments } }) => {
      return comments;
    });
};
