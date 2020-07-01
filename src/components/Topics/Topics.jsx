import React, { Component } from "react";
import * as api from "../../utils/api";
import TopicCards from "./TopicCards";
import AddTopic from "./AddTopic";
import Loader from "../Reusable/Loader";
import ErrorDisplay from "../Reusable/ErrorDisplay";
import { Grid, GridListTile, styled, Paper } from "@material-ui/core";

const StyledGrid = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  listStyle: "none",
});
const StyledTile = styled(GridListTile)({
  maxWidth: "90%",
  minWidth: "80%",
});
const StyledPaper = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "3rem",

  backgroundColor: "#2c3531",
});
class Topics extends Component {
  state = {
    topics: [],
    isLoading: true,
    err: "",
  };

  render() {
    const { isLoading, err } = this.state;
    if (err) return <ErrorDisplay msg={err} />;
    if (isLoading) return <Loader />;
    return (
      <StyledGrid>
        <StyledPaper>
          <StyledTile>
            {this.state.topics.map((topic) => {
              return <TopicCards key={topic.slug} topic={topic} />;
            })}
          </StyledTile>
        </StyledPaper>

        <AddTopic addTopicToState={this.addTopicToState} />
      </StyledGrid>
    );
  }
  componentDidMount() {
    this.getAllTopics();
  }

  getAllTopics = () => {
    api
      .fetchAllTopics()
      .then((topics) => {
        this.setState({ topics, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };

  addTopicToState = (newTopic) => {
    this.setState((currentState) => {
      return {
        topics: [newTopic, ...currentState.topics],
        isLoading: false,
      };
    });
  };
}

export default Topics;
