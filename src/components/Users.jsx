import React, { Component } from "react";
import UserProfile from "./UserProfile";
import * as api from "../utils/api";
import Loader from "./Reusable/Loader";
import { Grid } from "@material-ui/core";

class Users extends Component {
  state = {
    users: [],
    isLoading: true,
  };
  render() {
    const { isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <Grid>
        {this.state.users.map((user) => {
          return <UserProfile key={user.username} user={user} />;
        })}
      </Grid>
    );
  }
  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    api.fetchAllUsers().then((users) => {
      this.setState({ users, isLoading: false });
    });
  };
}

export default Users;
