import React, { Component } from "react";
import * as api from "../utils/api";

class VoteUpdater extends Component {
  state = {
    userVotes: 0,
  };
  handleVoteUpdate = (event) => {
    const { id } = event.target;
    let vote = 0;

    if (id === "upvote") vote++;
    if (id === "downvote") vote--;

    this.setState(({ userVotes }) => {
      return {
        userVotes: userVotes + vote,
      };
    });

    const { article_id, comment_id } = this.props;
    const target_id = article_id ? article_id : comment_id;
    const endPoint = article_id ? "articles" : "comments";
    api.patchVotes(target_id, vote, endPoint).catch((err) => {
      if (id === "upvote") {
        this.setState(({ userVotes }) => {
          return {
            userVotes: userVotes - 1,
          };
        });
      } else if (id === "downvote") {
        this.setState(({ userVotes }) => {
          return { userVotes: userVotes + 1 };
        });
      }
    });
  };
  render() {
    const { userVotes } = this.state;
    const { votes } = this.props;
    return (
      <section className="vote-updater">
        <p>Votes: {votes + userVotes}</p>
        <button onClick={this.handleVoteUpdate}>
          <span role="img" aria-label="upvote" id="upvote">
            ⬆️
          </span>
        </button>
        <button onClick={this.handleVoteUpdate}>
          <span
            role="img"
            aria-label="downvote"
            id="downvote"
            disabled={userVotes === -1}
          >
            ⬇️
          </span>
        </button>
      </section>
    );
  }
}

export default VoteUpdater;
