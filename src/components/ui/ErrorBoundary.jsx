import { Box, Typography } from "@mui/material";
import React from "react";
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export const ErrorBoundary = () => {
  let error = useRouteError();

  if (error.status) {
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
        
          <Box
            sx={{
              width: 400,
              height: 400,
              borderRadius: 1,
              bgcolor: "#000000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2rem",
              color: "#ffffff",
              textAlign: "center",
              padding: "1.5rem",
            }}
            component="div"
          >
            <Box component="div" sx={{ color: "red", fontSize: 20 }}>
              Dang!
              <Box component="div">
                {error.status}
                <br />
                {error.message} <br />
                Please contact - {error.contact}<br /><br />
                Go back to <Link to="/">Home</Link>
              </Box>
            </Box>
          </Box>
      </Typography>
    );
  }
};
