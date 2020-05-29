import React, { Component } from "react";
import * as api from "../utils/api";
import CommentCards from "./CommentCards";
import AddComment from "./AddComment";

class CommentsList extends Component {
  state = {
    comments: [],
  };
  render() {
    const { user } = this.props;
    return (
      <div className="comment-list">
        {this.state.comments.map((comment) => {
          return (
            <CommentCards
              key={comment.comment_id}
              comment={comment}
              user={user}
              removeComment={this.removeComment}
            />
          );
        })}
        <AddComment
          article_id={this.props.article_id}
          addCommentToState={this.addCommentToState}
          user={user}
        />
      </div>
    );
  }

  componentDidMount() {
    const article_id = this.props.article_id;
    this.getAllComments(article_id);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const article_id = this.props.article_id;
  //   if (prevProps.comments !== this.state.comments) {
  //     this.getAllComments(article_id);
  //   }
  // }

  addCommentToState = (newComment) => {
    this.setState((currentState) => {
      return {
        comments: [newComment, ...currentState.comments],
      };
    });
  };

  removeComment = (id) => {
    const filteredComments = this.state.comments.filter(
      ({ comment_id }) => comment_id !== id
    );
    this.setState({ comments: filteredComments });
  };

  getAllComments = (article_id) => {
    api.fetchAllComments(article_id).then((comments) => {
      this.setState({ comments: comments });
    });
  };
}

export default CommentsList;
