import { useState } from "react";
import UserContext from "./UserContext";

export function UserContextProvider({children}) {
    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )

}