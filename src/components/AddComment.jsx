import React, { Component } from "react";
import * as api from "../utils/api";

class AddComment extends Component {
  state = { body: "", author: "", created_at: "", comment_id: 0 };

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
        <button className="btn">comment</button>
      </form>
    );
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      author: "Zizi",
    });
  };

  addNewComment = (event) => {
    event.preventDefault();
    const newComment = this.state;
    const article_id = this.props.article_id;
    api.postCommentByArticleId(article_id, newComment);
    this.props.addCommentToState(newComment);
  };
}

export default AddComment;
