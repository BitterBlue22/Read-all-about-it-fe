import React, { Component } from "react";
import * as api from "../utils/api";
import TopicCards from "./TopicCards";
import AddTopic from "./AddTopic";
import Loader from "./Loader";

class Topics extends Component {
  state = {
    topics: [],
    isLoading: true,
  };

  render() {
    if (this.state.loading) return <Loader />;
    return (
      <div className="topic-board">
        <AddTopic />
        {this.state.topics.map((topic) => {
          return <TopicCards key={topic.slug} topic={topic} />;
        })}
      </div>
    );
  }
  componentDidMount() {
    this.getAllTopics();
  }

  getAllTopics = () => {
    api.fetchAllTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  };
}

export default Topics;
