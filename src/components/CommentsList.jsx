import React, { Component } from "react";
import * as api from "../utils/api";
import CommentCards from "./CommentCards";
import AddComment from "./AddComment";

class CommentsList extends Component {
  state = {
    comments: [],
  };
  render() {
    return (
      <div className="comment-list">
        {this.state.comments.map((comment) => {
          return <CommentCards key={comment.comment_id} comment={comment} />;
        })}
        <AddComment
          article_id={this.props.article_id}
          addCommentToState={this.addCommentToState}
        />
      </div>
    );
  }

  componentDidMount() {
    const article_id = this.props.article_id;
    this.getAllComments(article_id);
  }
  componentDidUpdate() {}
  addCommentToState = (newComment) => {
    this.setState((currentState) => {
      return {
        comments: [newComment, ...currentState.comments],
      };
    });
  };
  getAllComments = (article_id) => {
    api.fetchAllComments(article_id).then((comments) => {
      this.setState({ comments: comments });
    });
  };
}

export default CommentsList;
