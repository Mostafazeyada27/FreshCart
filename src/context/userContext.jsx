/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { createContext } from "react";

export let UserContext = createContext();

export default function userContextProvider(props) {
  const [userLogin, setUserLogin] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );

  return (
    <>
      <UserContext.Provider value={{ userLogin, setUserLogin }}>
        {props.children}
      </UserContext.Provider>
    </>
  );
}
