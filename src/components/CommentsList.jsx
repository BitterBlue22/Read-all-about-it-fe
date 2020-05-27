import React, { Component } from "react";
import * as api from "../utils/api";
import CommentCards from "./CommentCards";

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
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props);
    const article_id = this.props.article_id;
    this.getAllComments(article_id);
  }

  getAllComments = (article_id) => {
    api.fetchAllComments(article_id).then((comments) => {
      this.setState({ comments: comments });
    });
  };
}

export default CommentsList;
