import React from "react";

const Header = ({ user: { username, avatar_url } }) => {
  return (
    <header className="App-header">
      <h1>NC News</h1>
      <p>Signed in as: {username}</p>
      <img src={avatar_url} alt="Avatar" className="user-avatar" />
    </header>
  );
};

export default Header;
