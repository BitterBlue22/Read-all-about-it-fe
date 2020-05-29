import React, { Component } from "react";
import * as api from "../utils/api";
import TopicCards from "./TopicCards";
import AddTopic from "./AddTopic";
import Loader from "./Loader";
import ErrorDisplay from "./ErrorDisplay";

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
      <section className="topic-board">
        <AddTopic addTopicToState={this.addTopicToState} />
        {this.state.topics.map((topic) => {
          return <TopicCards key={topic.slug} topic={topic} />;
        })}
      </section>
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
      };
    });
  };
}

export default Topics;
