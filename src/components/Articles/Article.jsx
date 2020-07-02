import React, { Component } from "react";
import VoteUpdater from "../Reusable/VoteUpdater";
import CommentsList from "../Comments/CommentsList";
import * as api from "../../utils/api";
import Loader from "../Reusable/Loader";
import ErrorDisplay from "../Reusable/ErrorDisplay";
import { Grid, styled, Paper, Box, Typography } from "@material-ui/core";
import HeadingGeneral from "../StyledComponents/HeadingGeneral";
const StyledGrid = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  listStyle: "none",
});

const StyledPaper = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "3rem",

  backgroundColor: "#2c3531",
  boxShadow: "0px 2px 5px 2px  #2c3531",
});
const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "3rem",
  backgroundColor: "white",
  boxShadow: "0px 2px 5px 2px  #2c3531",
});

class Article extends Component {
  state = {
    article: {},
    isLoading: true,
    err: "",
  };

  render() {
    const { isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorDisplay msg={err} />;
    const {
      title,
      topic,
      body,
      created_at,
      author,
      votes,
      article_id,
    } = this.state.article;

    return (
      <StyledGrid>
        <StyledPaper>
          <StyledBox className="full-article-body">
            <HeadingGeneral>{title}</HeadingGeneral>
            <Typography variant="h6">Topic: {topic}</Typography>
            <Typography>{body}</Typography>
            <Typography>
              created at
              {created_at} by
              {author},
            </Typography>
            <VoteUpdater article_id={article_id} votes={votes} />
          </StyledBox>
        </StyledPaper>

        <CommentsList
          article_id={this.props.article_id}
          user={this.props.user}
        />
      </StyledGrid>
    );
  }

  componentDidMount() {
    const article_id = this.props.article_id;

    this.getArticleById(article_id);
  }

  componentDidUpdate(prevProps, prevState) {
    const article_id = this.props.article_id;
    if (prevProps.article_id !== this.props.article_id) {
      this.getArticleById(article_id);
    }
  }

  getArticleById = (article_id) => {
    api
      .fetchArticleById(article_id)
      .then((article) => {
        this.setState({ article: article, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };
}

export default Article;
