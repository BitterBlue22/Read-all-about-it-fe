import React, { Component } from "react";
import * as api from "../../utils/api";
import ErrorDisplay from "../Reusable/ErrorDisplay";
import Button from "../StyledComponents/Button";
import InputBox from "../StyledComponents/InputBox";
import Form from "../StyledComponents/Form";

class AddTopic extends Component {
  state = {
    slug: "",
    description: "",
    err: "",
  };
  render() {
    const { err } = this.state;
    if (err) return <ErrorDisplay msg={err} />;
    return (
      <Form>
        <label>New Topic:</label>
        <InputBox
          type="text"
          name="slug"
          size="medium"
          onChange={this.handleInputChange}
          required
        />
        <label>Description:</label>
        <InputBox
          type="text"
          name="description"
          onChange={this.handleInputChange}
          size="big"
          required
        />
        <Button name="post-btn" onClick={this.addNewTopic}>
          Post
        </Button>
      </Form>
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
    api
      .postNewTopic(newTopic)

      .catch((err) => this.setState({ err: err.response.data.msg }));
    this.setState({ slug: "", description: "", err: "" });
  };
}

export default AddTopic;
