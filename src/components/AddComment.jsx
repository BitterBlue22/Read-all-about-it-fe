import React, { Component } from "react";
import * as api from "../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ErrorDisplay from "./ErrorDisplay";
import InputBox from "./StyledComponents/InputBox";
import Button from "./StyledComponents/Button";
import Form from "./StyledComponents/Form";

class AddComment extends Component {
  state = {
    body: "",
    username: "weegembump",
    created_at: "",
    comment_id: 0,
    votes: 0,
    article_id: 0,

    err: "",
  };

  render() {
    const { err } = this.state;

    if (err) return <ErrorDisplay msg={err} />;
    return (
      <Form className="comment-form" onSubmit={this.addNewComment}>
        <label htmlFor="comment-input-box"></label>
        <InputBox
          type="text"
          className="comment-input-box"
          onChange={this.handleInputChange}
          name="body"
          required
        />
        <Button className="btn">
          <FontAwesomeIcon icon="comment" />
          Post
        </Button>
      </Form>
    );
  }

  handleInputChange = (event) => {
    const { value } = event.target;
    const { user } = this.props;

    this.setState({
      body: value,
      author: user,
      created_at: "now",
    });
  };

  addNewComment = (event) => {
    event.preventDefault();

    const newComment = this.state;
    const article_id = this.props.article_id;

    api
      .postCommentByArticleId(article_id, newComment)

      .catch((err) => this.setState({ err: err.response.data.msg }));
    this.props.addCommentToState(newComment);
  };
}

export default AddComment;
