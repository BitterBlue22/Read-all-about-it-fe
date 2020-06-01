import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VoteUpdater from "./VoteUpdater";
import CommentsList from "./CommentsList";
import * as api from "../utils/api";
import Loader from "./Loader";
import ErrorDisplay from "./ErrorDisplay";
import Board from "./StyledComponents/Board";

class Article extends Component {
  state = {
    article: {},
    isLoading: true,
    err: "",
  };

  render() {
    const { isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorDisplay msg={err} />;
    const {
      title,
      topic,
      body,
      created_at,
      author,
      votes,
      article_id,
    } = this.state.article;

    return (
      <Board>
        <section className="full-article-body">
          <h2>{title}</h2>
          <h4>Topic: {topic}</h4>
          <p>{body}</p>
          <h5>
            created at <FontAwesomeIcon icon="clock" />
            {created_at} by <FontAwesomeIcon icon="user" />
            {author}, <VoteUpdater article_id={article_id} votes={votes} />
          </h5>
        </section>

        <CommentsList
          article_id={this.props.article_id}
          user={this.props.user}
        />
      </Board>
    );
  }

  componentDidMount() {
    const article_id = this.props.article_id;

    this.getArticleById(article_id);
  }

  componentDidUpdate(prevProps, prevState) {
    const article_id = this.props.article_id;
    if (prevProps.article_id !== this.props.article_id) {
      this.getArticleById(article_id);
    }
  }

  getArticleById = (article_id) => {
    api
      .fetchArticleById(article_id)
      .then((article) => {
        this.setState({ article: article, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };
}

export default Article;
