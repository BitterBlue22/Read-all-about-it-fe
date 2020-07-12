import React from "react";
import HeadingGeneral from "./StyledComponents/HeadingGeneral";
import { Grid, styled, Paper, GridListTile, Box } from "@material-ui/core";

const StyledPaper = styled(Paper)({
  padding: "1rem",
  maxWidth: "60%",
  backgroundColor: "#a48454",
  boxShadow: "0px 2px 5px 2px  #1c1308",
  margin: "1rem",
  minWidth: "50%",
});
const StyledGridListTile = styled(GridListTile)({
  padding: "1rem",
  backgroundColor: "#1c1308",
  boxShadow: "0px 2px 5px 2px #625434",
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
