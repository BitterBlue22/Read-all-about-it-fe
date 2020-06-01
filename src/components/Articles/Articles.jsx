import React, { Component } from "react";
import ArticleCards from "./ArticleCards";
import * as api from "../../utils/api";
import Loader from "../Reusable/Loader";
import ErrorDisplay from "../Reusable/ErrorDisplay";
import Sorter from "../Reusable/Sorter";
import AddArticle from "./AddArticle";
import Board from "../StyledComponents/Board";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: "",
    sort_by: "",
  };
  render() {
    const { isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorDisplay msg={err} />;
    return (
      <>
        <Sorter handleSort={this.handleSort} />
        <AddArticle
          addArticleToState={this.addArticleToState}
          user={this.props.user}
        />

        <Board>
          {this.state.articles.map((article) => {
            return <ArticleCards key={article.article_id} article={article} />;
          })}
        </Board>
      </>
    );
  }
  componentDidMount() {
    const topic_slug = this.props.topic_slug;
    const sort_by = this.state.sort_by;
    this.getAllArticles(topic_slug, sort_by);
  }

  componentDidUpdate(prevProps, prevState) {
    const topic_slug = this.props.topic_slug;
    const sort_by = this.state.sort_by;

    if (prevProps.topic_slug !== topic_slug || prevState.sort_by !== sort_by) {
      this.getAllArticles(topic_slug, sort_by);
    }
  }

  getAllArticles = (topic, sort_by) => {
    api
      .fetchAllArticles(topic, sort_by)
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };
  handleSort = (sort_by) => {
    this.setState({ sort_by: sort_by });
  };
  addArticleToState = (newArticle) => {
    this.setState((currentState) => {
      return {
        articles: [newArticle, ...currentState.articles],
      };
    });
  };
}

export default Articles;
