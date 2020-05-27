import React, { Component } from "react";
import AddComment from "./AddComment";
import VoteUpdater from "./VoteUpdater";
import CommentsList from "./CommentsList";
import * as api from "../utils/api";
import Loader from "./Loader";

class Article extends Component {
  state = {
    article: {},
    isLoading: true,
  };

  render() {
    if (this.state.loading) return <Loader />;
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
      <article>
        <h2>{title}</h2>
        <h4>Topic: {topic}</h4>
        <p>{body}</p>
        <h5>
          created at {created_at} by {author},{" "}
          <VoteUpdater article_id={article_id} votes={votes} />
        </h5>

        <AddComment />
        <CommentsList article_id={this.props.article_id} />
      </article>
    );
  }

  componentDidMount() {
    const article_id = this.props.article_id;
    console.log(article_id);
    this.getArticleById(article_id);
  }

  componentDidUpdate(prevProps, prevState) {
    const article_id = this.props.article_id;
    if (prevProps.article_id !== this.props.article_id) {
      this.getArticleById(article_id);
    }
  }

  getArticleById = (article_id) => {
    api.fetchArticleById(article_id).then((article) => {
      this.setState({ article: article });
    });
  };
}

export default Article;
