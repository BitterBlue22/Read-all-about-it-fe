import React, { Component } from "react";
import * as api from "../../utils/api";
import ErrorDisplay from "../Reusable/ErrorDisplay";
import Button from "../StyledComponents/Button";
import Form from "../StyledComponents/Form";
import TextArea from "../StyledComponents/TextArea";

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
      <Form className="comment-form">
        <label htmlFor="comment-input-box"></label>
        <TextArea
          type="text"
          className="comment-input-box"
          onChange={this.handleInputChange}
          name="body"
          size="big"
          required
        />
        <Button name="post-btn" onClick={this.addNewComment}>
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

    api.postCommentByArticleId(article_id, newComment).then((res) => {
      this.props.addCommentToState(newComment);
    });

    this.setState({
      body: "",
      username: "weegembump",
      created_at: "",
      comment_id: 0,
      votes: 0,
      article_id: 0,
      err: "",
    });
  };
}

export default AddComment;
