import React, { Component } from "react";
import UserProfile from "./UserProfile";
import * as api from "../utils/api";
import Loader from "./Reusable/Loader";

class Users extends Component {
  state = {
    users: [],
    isLoading: true,
  };
  render() {
    const { isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <>
        {this.state.users.map((user) => {
          return <UserProfile key={user.username} user={user} />;
        })}
      </>
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
