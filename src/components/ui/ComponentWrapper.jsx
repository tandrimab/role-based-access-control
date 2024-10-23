import { Box, ThemeProvider, Typography } from "@mui/material";

 const ComponentWrapper = ({ children }) => {
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
            width: 700,
            height: 500,
            borderRadius: 1,
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "primary.dark",
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
            color: "#ffffff",
            textAlign: "left",
            padding: "1.5rem",
          }}
          component="div"
        >
          {children}
        </Box>
      </ThemeProvider>
    </Typography>
  );
};

export default ComponentWrapper
