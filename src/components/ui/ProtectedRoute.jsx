import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import UserContext from "../store/UserContext";

export const ProtectedRoute = ({ children }) => {
  const { pathname } = useLocation();
  const {user} = useContext(UserContext)  

  if (!user?.userId || user?.nonAccessibleRoutes?.includes(pathname)) {
    
    throw {
        message: "Permission denied",
        contact: "tandrima@abc.com",
        status: 403
      }
    
  }

  return <div>{children}</div>;
};
