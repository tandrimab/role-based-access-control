import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../store/UserContext";

export const Navbar = () => {
  const {user, setUser} = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    setUser({});
    return navigate('/', {replace: true})
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">RBAC</Link>
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">
            <Link to='/about'>About</Link>
          </Button>
          {user?.userId && (
            <Button color="inherit">
              
              <Link to='/profile'>Profile</Link>
            </Button>
          )}
          {user?.role === 'admin' && (
            <Button color="inherit">
              
              <Link to='/admin'>Admin</Link>
            </Button>
          )}
          {!user?.userId ? (
            <Button color="inherit">
              <Link to='/login'>Login</Link>
            </Button>
          ) : (
            <Button
              className="p-0"
              color="inherit"
              onClick={logout}
            >
              Logout
            </Button>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
