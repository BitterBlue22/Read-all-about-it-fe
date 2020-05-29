import React, { Component } from "react";
import * as api from "../utils/api";

class AddTopic extends Component {
  state = {
    slug: "",
    description: "",
  };
  render() {
    return (
      <form className="topic-form" onSubmit={this.addNewTopic}>
        <label>New Topic:</label>
        <input type="text" name="slug" onChange={this.handleInputChange} />
        <label>description:</label>
        <input
          type="text"
          name="description"
          onChange={this.handleInputChange}
        />
        <button>Submit</button>
      </form>
    );
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  addNewTopic = (event) => {
    event.preventDefault();
    const newTopic = this.state;
    api.postNewTopic(newTopic);
    this.props.addTopicToState(newTopic);
  };
}

export default AddTopic;
