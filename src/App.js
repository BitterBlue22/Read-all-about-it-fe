import "./App.css";
import React, { Component } from "react";
import { Router } from "@reach/router";
import Topics from "./components/Topics/Topics";
import Articles from "./components/Articles/Articles";
import Users from "./components/Users";
import Article from "./components/Articles/Article";
import CommentsList from "./components/Comments/CommentsList";
import styled from "styled-components";
import ErrorDisplay from "./components/Reusable/ErrorDisplay";
import PerfectScrollbar from "react-perfect-scrollbar";
import PrimarySearchAppBar from "./components/Reusable/Navigation";
import AddTopic from "./components/Topics/AddTopic";

class App extends Component {
  state = {
    user: {
      username: "weegembump",
      avatar_url:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f1411f51-b876-4331-9363-f895deabea7f/db3lx36-28f54f1a-46bf-4d0a-a99e-31fc03733c2d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZjE0MTFmNTEtYjg3Ni00MzMxLTkzNjMtZjg5NWRlYWJlYTdmXC9kYjNseDM2LTI4ZjU0ZjFhLTQ2YmYtNGQwYS1hOTllLTMxZmMwMzczM2MyZC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.8yyAxnaqfxrdbK5mLdLamkNmq4Cxeho52Yxfe26zxWQ",
    },
  };

  render() {
    const Container = styled.div`
      background-color: transparent;
      margin: 0;
      overflow: scroll;
      height: 100%;
      position: fixed;
      min-height: 100%;
      width: 100%;
      flex-wrap: wrap;
    `;
    return (
      <Container>
        <PrimarySearchAppBar />
        <PerfectScrollbar>
          <Router className="Router">
            <Topics path="/" />
            <Topics path="/topics" user={this.state.user.username} />
            <Articles path="/articles" user={this.state.user.username} />
            <Article
              path="/articles/:article_id"
              user={this.state.user.username}
            />
            <Articles path="/articles/:article_id/comments" />
            <Users path="/users" />
            <Articles path="/:topic_slug" />
            <CommentsList
              path="/comments/:comment_id"
              user={this.state.user.username}
            />
            <AddTopic path="/add-topic" />
            <ErrorDisplay default />
          </Router>
        </PerfectScrollbar>
      </Container>
    );
  }
}

export default App;
