import React from "react";

const UserProfile = ({ user: { username, avatar_url } }) => {
  return (
    <div className="user-profile">
      <h2>{username}</h2>
      <img src={avatar_url} alt="user-avatar" className="user-avatar" />
      <button className="btn">Articles</button>
      <button className="btn">Comments</button>
    </div>
  );
};

export default UserProfile;
