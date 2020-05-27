import React, { Component } from "react";
import ArticleCards from "./ArticleCards";
import * as api from "../utils/api";
import Loader from "./Loader";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
  };
  render() {
    if (this.state.loading) return <Loader />;
    return (
      <div className="article-board">
        {this.state.articles.map((article) => {
          return <ArticleCards key={article.article_id} article={article} />;
        })}
      </div>
    );
  }
  componentDidMount() {
    const topic_slug = this.props.topic_slug;
    this.getAllArticles(topic_slug);
  }

  componentDidUpdate(prevProps, prevState) {
    const topic_slug = this.props.topic_slug;
    if (prevProps.topic_slug !== this.props.topic_slug) {
      this.getAllArticles(topic_slug);
    }
  }

  getAllArticles = (topic) => {
    api.fetchAllArticles(topic).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default Articles;
