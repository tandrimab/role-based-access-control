import React from "react";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../store/UserContextProvider";

export const Layout = () => {
  return (
   
      <div className="min-h-screen w-full">
        <Navbar />
        <Outlet />
      </div>
    
  );
};
