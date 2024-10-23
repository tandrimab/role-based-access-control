import React, { useContext } from "react";
import { Box } from "@mui/material";
import UserContext from "../store/UserContext";
import ComponentWrapper from "./ComponentWrapper";

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
