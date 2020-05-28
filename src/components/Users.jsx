import React, { Component } from "react";
import UserProfile from "./UserProfile";
import * as api from "../utils/api";
import Loader from "./Loader";

class Users extends Component {
  state = {
    users: [],
    isLoading: true,
  };
  render() {
    if (this.state.loading) return <Loader />;
    return (
      <div className="members-area">
        {this.state.users.map((user) => {
          return <UserProfile key={user.username} user={user} />;
        })}
      </div>
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
