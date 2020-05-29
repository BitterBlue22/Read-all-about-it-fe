import React, { Component } from "react";
import * as api from "../utils/api";

class AddArticle extends Component {
  state = {
    title: "",
    body: "",
    author: "weegembump",
    created_at: "",
    comment_count: 0,
    votes: 0,
    article_id: 0,
    topic: "",
  };

  render() {
    return (
      <form className="article-form" onSubmit={this.addNewArticle}>
        <label htmlFor="article-input-box">Topic: </label>
        <input
          type="text"
          className="article-input-box-small"
          onChange={this.handleInputChange}
          name="topic"
        />
        <label htmlFor="article-input-box">Title: </label>
        <input
          type="text"
          className="article-input-box-small"
          onChange={this.handleInputChange}
          name="title"
        />
        <label htmlFor="article-input-box-big">Article: </label>
        <input
          type="text"
          className="article-input-box-big"
          onChange={this.handleInputChange}
          name="body"
        />
        <button className="btn">post</button>
      </form>
    );
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const { user } = this.props;
    this.setState({
      [name]: value,
      author: user,
    });
  };

  addNewArticle = (event) => {
    event.preventDefault();
    const newArticle = this.state;
    const topic_slug = this.props.topic_slug;
    api.postNewArticleToTopic(topic_slug, newArticle);
    this.props.addArticleToState(newArticle);
  };
}

export default AddArticle;
