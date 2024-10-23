import { useContext } from "react";
import UserContext from "../store/UserContext";
import ComponentWrapper from "./ComponentWrapper";

export const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <ComponentWrapper>
      {user?.userId ? "Hello, " + user.name : "You are not logged in!"}
    </ComponentWrapper>
  );
};
