import React, { Component } from "react";
import * as api from "../../utils/api";
import Loader from "../Reusable/Loader";
import ErrorDisplay from "../Reusable/ErrorDisplay";
import { styled, Paper, Box } from "@material-ui/core";
import { Link } from "@reach/router";
import OutlinedCard from "./CardTopic";
import StyledButton from "../StyledComponents/Button";
const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  margin: "1rem",
});

const StyledPaper = styled(Paper)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.5rem",
  backgroundColor: "#1c1308",
  margin: "0.5rem",
  flexWrap: "wrap",
  maxWidth: "90%",
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
      <StyledBox>
        <Link to="/add-topic" className="link">
          <StyledButton className="add-topic">New Topic</StyledButton>
        </Link>
        <StyledPaper>
          {this.state.topics.map((topic) => {
            return <OutlinedCard key={topic.slug} topic={topic} />;
          })}
        </StyledPaper>
      </StyledBox>
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
}

export default Topics;
