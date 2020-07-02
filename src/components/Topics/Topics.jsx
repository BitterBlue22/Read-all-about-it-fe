import React, { Component } from "react";
import * as api from "../../utils/api";
import TopicCards from "./TopicCards";
import Loader from "../Reusable/Loader";
import ErrorDisplay from "../Reusable/ErrorDisplay";
import { Grid, GridListTile, styled, Paper } from "@material-ui/core";
import { Link } from "@reach/router";
import Button from "../StyledComponents/Button";

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
  margin: "2rem",
});

class Topics extends Component {
  state = {
    topics: [],
    isLoading: true,
    err: "",
  };
  _isMounted = false;
  render() {
    const { isLoading, err } = this.state;
    if (err) return <ErrorDisplay msg={err} />;
    if (isLoading) return <Loader />;
    return (
      <StyledGrid>
        <StyledPaper>
          <Link to="/add-topic">
            <Button className="add-topic">New Topic</Button>
          </Link>
          <StyledTile>
            {this.state.topics.map((topic) => {
              return <TopicCards key={topic.slug} topic={topic} />;
            })}
          </StyledTile>
        </StyledPaper>
      </StyledGrid>
    );
  }
  componentDidMount() {
    this._isMounted = true;
    this.getAllTopics();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.topics !== this.state.topics) {
      this.getAllTopics();
    }
  }
  getAllTopics = () => {
    api
      .fetchAllTopics()
      .then((topics) => {
        if (this._isMounted) {
          this.setState({ topics, isLoading: false });
        }
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };

  componentWillUnmount() {
    this._isMounted = false;
  }
}

export default Topics;
