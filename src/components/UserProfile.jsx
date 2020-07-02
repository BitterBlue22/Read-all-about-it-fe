import React from "react";
import HeadingGeneral from "./StyledComponents/HeadingGeneral";
import { Grid, styled, Paper, GridListTile, Box } from "@material-ui/core";

const StyledPaper = styled(Paper)({
  padding: "1rem",
  maxWidth: "60%",
  backgroundColor: "#2c3531",
  boxShadow: "0px 2px 5px 2px  #2c3531",
  margin: "1rem",
  minWidth: "50%",
});
const StyledGridListTile = styled(GridListTile)({
  padding: "1rem",
  backgroundColor: "white",
  boxShadow: "0px 2px 5px 2px  #2c3531",
  display: "flex",
  justifyContent: "center",
  listStyle: "none",
});
const StyledGrid = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignSelf: "center",
});

const UserProfile = ({ user: { username, avatar_url } }) => {
  return (
    <StyledGrid>
      <StyledPaper>
        <StyledGridListTile>
          <Box>
            <HeadingGeneral>{username}</HeadingGeneral>
            <img src={avatar_url} alt="user-avatar" className="user-avatar" />
          </Box>
        </StyledGridListTile>
      </StyledPaper>
    </StyledGrid>
  );
};

export default UserProfile;
