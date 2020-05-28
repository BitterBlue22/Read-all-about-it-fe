import React, { Component } from "react";
import * as api from "../utils/api";

class VoteUpdater extends Component {
  state = {
    userVotes: 0,
  };
  handleVoteUpdate = (event) => {
    const { id } = event.target;
    if (id === "upvote") {
      this.setState(({ userVotes }) => {
        return {
          userVotes: userVotes + 1,
        };
      });
    } else if (id === "downvote") {
      this.setState(({ userVotes }) => {
        return {
          userVotes: userVotes - 1,
        };
      });
    }

    const { article_id } = this.props;
    let increment = 0;
    if (id === "upvote") {
      increment = 1;
    } else if (id === "downvote") {
      increment = -1;
    }
    api.patchVotes(article_id, increment).catch((err) => {
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
      <div>
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
      </div>
    );
  }
}

export default VoteUpdater;
