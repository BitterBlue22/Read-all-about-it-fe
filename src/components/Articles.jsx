import React, { Component } from "react";
import ArticleCards from "./ArticleCards";
import axios from "axios";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
  };
  render() {
    return (
      <div className="article-board">
        {this.state.articles.map((article) => {
          return <ArticleCards key={article.article_id} article={article} />;
        })}
      </div>
    );
  }
  componentDidMount() {
    this.fetchAllArticles();
  }

  fetchAllArticles = () => {
    axios
      .get("https://tel-news-port.herokuapp.com/api/articles") //CORS error?
      .then(({ data }) => {
        this.setState({ articles: data.articles, isLoading: false });
      });
  };
}

export default Articles;
