import React, { Component } from "react";
import * as api from "../../utils/api";
import AddComment from "./AddComment";
import ErrorDisplay from "../Reusable/ErrorDisplay";
import Loader from "../Reusable/Loader";
import { Grid, Paper, styled } from "@material-ui/core";
import OutlinedCard from "./CardComment";
const StyledPaper = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  backgroundColor: "#625434",
  boxShadow: "0px 2px 5px 2px  #1c1308",
  maxWidth: "80%",
});
const StyledGrid = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  listStyle: "none",
});

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
      <StyledGrid>
        <StyledPaper>
          {this.state.comments.map((comment) => {
            return (
              <OutlinedCard
                key={comment.comment_id}
                comment={comment}
                user={user}
                removeComment={this.removeComment}
              />
            );
          })}
        </StyledPaper>{" "}
        <AddComment
          article_id={this.props.article_id}
          addCommentToState={this.addCommentToState}
          user={user}
        />
      </StyledGrid>
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
