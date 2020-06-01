import React, { Component } from "react";
import * as api from "../../utils/api";
import ErrorDisplay from "../Reusable/ErrorDisplay";
import InputBox from "../StyledComponents/InputBox";
import Button from "../StyledComponents/Button";
import Form from "../StyledComponents/Form";

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
    err: "",
  };

  render() {
    const { err } = this.state;
    if (err) return <ErrorDisplay msg={err} />;
    return (
      <Form className="article-form" onSubmit={this.addNewArticle}>
        <label htmlFor="article-input-box">Topic: </label>
        <InputBox
          type="text"
          className="article-input-box-small"
          onChange={this.handleInputChange}
          name="topic"
          required
        />
        <label htmlFor="article-input-box">Title: </label>
        <InputBox
          type="text"
          className="article-input-box-small"
          onChange={this.handleInputChange}
          name="title"
          required
        />
        <label htmlFor="article-input-box-big">Article: </label>
        <InputBox
          type="text"
          className="article-input-box-big"
          onChange={this.handleInputChange}
          name="body"
          required
        />
        <Button className="btn">Post</Button>
      </Form>
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
    api
      .postNewArticleToTopic(topic_slug, newArticle)
      .catch((err) => this.setState({ err: err.response.data.msg }));
    this.props.addArticleToState(newArticle);
  };
}

export default AddArticle;
