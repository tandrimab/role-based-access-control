import React from "react";
import ComponentWrapper from "./ComponentWrapper";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <ComponentWrapper>
      <div>
        <div className="about">
          RBAC stand for Role Based Access Control which is used to manage
          access rights to particular part of an application.
        </div>
        <Link
          to="https://github.com/tandrimab/role-based-access-control"
          target="_blank"
        >
          Click here for more
        </Link>
      </div>
    </ComponentWrapper>
  );
};
