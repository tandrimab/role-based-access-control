import React, {  useState } from "react";
import SignIn from "./SignIn";
import { users } from "../../assets/contents/Users";
import { useNavigate } from "react-router-dom";
import UserContext from "../store/UserContext";
import { useContext } from "react";

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext)

  const validateSession = (username, password) => {
    let currentUser = users.find(
      (user) => user.email === username && user.password === password
    );
    if (currentUser) {
      setUser(currentUser)
      return navigate('/')
    } else {
      setErrorMessage("Email and password don't match");
    }
  };

  return (
    <div>
      <SignIn validateSession={validateSession} errorMessage={errorMessage} />
    </div>
  );
};
