import React, { useContext } from "react";
import { Box, ThemeProvider, Typography } from "@mui/material";
import UserContext from "../store/UserContext";
import ComponentWrapper from "./ComponentWrapper";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <ComponentWrapper>
      <Box component="div" sx={{ color: "text.secondary", fontSize: 20 }}>
        Name: {user.name} <br />
        <br />
        <Box component="div">
          User Id - {user.id}
          <br />
          <br />
          Email - {user.email}
          <br />
          <br />
          Role - {user.role}
        </Box>
      </Box>
    </ComponentWrapper>
  );
};
