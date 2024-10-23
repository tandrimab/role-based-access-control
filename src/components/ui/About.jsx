import React from "react";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const About = () => {
  return (
    <Typography
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        overflow: "hidden",
      }}
    >
      <ThemeProvider
        theme={{
          palette: {
            primary: {
                main: "#9b72cb",
                dark: "#d96570",
            },
          },
        }}
      >
        <Box
          sx={{
            width: 400,
            height: 400,
            borderRadius: 1,
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "primary.dark",
            },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '2rem',
            color: '#ffffff',
            textAlign: 'center',
            padding: '1.5rem'
          }}
          component="div"
        >
          RBAC is.....
        </Box>
      </ThemeProvider>
    </Typography>
  );
};
