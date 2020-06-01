import React from "react";
import StyledCard from "./StyledComponents/StyledCard";
import HeadingGeneral from "./StyledComponents/HeadingGeneral";

const UserProfile = ({ user: { username, avatar_url } }) => {
  return (
    <StyledCard>
      <HeadingGeneral>{username}</HeadingGeneral>
      <img src={avatar_url} alt="user-avatar" className="user-avatar" />
    </StyledCard>
  );
};

export default UserProfile;
