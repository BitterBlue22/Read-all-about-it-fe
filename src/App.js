import "./App.css";
import React, { Component } from "react";
import { Router } from "@reach/router";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Topics from "./components/Topics";
import Articles from "./components/Articles";
import Users from "./components/Users";

class App extends Component {
  state = {
    user: {
      username: "Zizi",
      avatar_url:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f1411f51-b876-4331-9363-f895deabea7f/db3lx36-28f54f1a-46bf-4d0a-a99e-31fc03733c2d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZjE0MTFmNTEtYjg3Ni00MzMxLTkzNjMtZjg5NWRlYWJlYTdmXC9kYjNseDM2LTI4ZjU0ZjFhLTQ2YmYtNGQwYS1hOTllLTMxZmMwMzczM2MyZC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.8yyAxnaqfxrdbK5mLdLamkNmq4Cxeho52Yxfe26zxWQ",
    },
    users: [],
  };
  render() {
    return (
      <div>
        <Header user={this.state.user} />
        <NavBar />
        <Router>
          <Topics path="/topics" />
          <Articles path="/articles" />
          <Users path="/users" />
        </Router>
        <section>
          <h2 className="welcome-text">Welcome to NC news!</h2>
        </section>

        <Footer />
      </div>
    );
  }
}

export default App;

//https://tel-news-port.herokuapp.com/api
