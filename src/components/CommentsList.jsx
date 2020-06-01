import React, { Component } from "react";
import * as api from "../utils/api";
import CommentCards from "./CommentCards";
import AddComment from "./AddComment";
import ErrorDisplay from "./ErrorDisplay";
import Loader from "./Loader";
import Board from "./StyledComponents/Board";

class CommentsList extends Component {
  state = {
    comments: [],
    isLoading: true,
    err: "",
  };
  render() {
    const { user } = this.props;
    const { isLoading, err } = this.state;
    if (err) return <ErrorDisplay msg={err} />;
    if (isLoading) return <Loader />;
    return (
      <Board>
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
      </Board>
    );
  }

  componentDidMount() {
    const article_id = this.props.article_id;
    this.getAllComments(article_id);
  }

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
    api
      .fetchAllComments(article_id)
      .then((comments) => {
        this.setState({ comments: comments, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };
}

export default CommentsList;
