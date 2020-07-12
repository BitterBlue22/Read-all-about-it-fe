import React, { Component } from "react";
import * as api from "../../utils/api";
import Loader from "../Reusable/Loader";
import ErrorDisplay from "../Reusable/ErrorDisplay";
import Sorter from "../Reusable/Sorter";
import AddArticle from "./AddArticle";
import { Grid, styled, Paper } from "@material-ui/core";
import OutlinedCard from "./CardArticles";
const StyledGrid = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  listStyle: "none",
});

const StyledPaper = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  padding: "1rem",
  backgroundColor: "#625434",
  boxShadow: "0px 2px 5px 2px  #1c1308",
  margin: "1rem",

  borderStyle: "outline",
  borderRadius: "0px",
});

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: "",
    sort_by: "",
  };
  render() {
    const { isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorDisplay msg={err} />;
    return (
      <StyledGrid>
        <Sorter handleSort={this.handleSort} />
        <StyledPaper>
          {this.state.articles.map((article) => {
            return <OutlinedCard key={article.article_id} article={article} />;
          })}
        </StyledPaper>

        <AddArticle
          addArticleToState={this.addArticleToState}
          user={this.props.user}
        />
      </StyledGrid>
    );
  }
  componentDidMount() {
    const topic_slug = this.props.topic_slug;
    const sort_by = this.state.sort_by;
    this.getAllArticles(topic_slug, sort_by);
  }

  componentDidUpdate(prevProps, prevState) {
    const topic_slug = this.props.topic_slug;
    const sort_by = this.state.sort_by;

    if (prevProps.topic_slug !== topic_slug || prevState.sort_by !== sort_by) {
      this.getAllArticles(topic_slug, sort_by);
    }
  }

  getAllArticles = (topic, sort_by) => {
    api
      .fetchAllArticles(topic, sort_by)
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };
  handleSort = (sort_by) => {
    this.setState({ sort_by: sort_by });
  };
  addArticleToState = (newArticle) => {
    this.setState((currentState) => {
      return {
        articles: [newArticle, ...currentState.articles],
      };
    });
  };
}

export default Articles;
