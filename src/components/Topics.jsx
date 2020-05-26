import React, { Component } from "react";
import axios from "axios";
import TopicCards from "./TopicCards";
import AddTopic from "./AddTopic";

class Topics extends Component {
  state = {
    topics: [],
    isLoading: true,
  };

  render() {
    if (this.state.loading) return <p>Loading...</p>;
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
    this.fetchAllTopics();
  }

  fetchAllTopics = () => {
    axios
      .get("https://tel-news-port.herokuapp.com/api/topics") //CORS error?
      .then(({ data }) => {
        this.setState({ topics: data.topics, isLoading: false });
      });
  };
}

export default Topics;
