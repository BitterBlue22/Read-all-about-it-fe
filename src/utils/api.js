import axios from "axios";

export const fetchAllTopics = () => {
  return axios
    .get("https://tel-news-port.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    });
};

export const fetchAllArticles = () => {
  return axios.get().then(({ data: { articles } }) => {
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
