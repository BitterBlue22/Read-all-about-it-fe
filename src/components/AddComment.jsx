import React, { Component } from "react";
import * as api from "../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AddComment extends Component {
  state = {
    body: "",
    username: "weegembump",
    created_at: "",
    comment_id: 0,
    votes: 0,
    article_id: 0,
  };

  render() {
    return (
      <form className="comment-form" onSubmit={this.addNewComment}>
        <label htmlFor="comment-input-box"></label>
        <input
          type="text"
          className="comment-input-box"
          onChange={this.handleInputChange}
          name="body"
        />
        <button className="btn">
          <FontAwesomeIcon icon="comment" />
          comment
        </button>
      </form>
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
    api.postCommentByArticleId(article_id, newComment).then((data) => {
      this.props.addCommentToState(newComment);
    });
  };
}

export default AddComment;
