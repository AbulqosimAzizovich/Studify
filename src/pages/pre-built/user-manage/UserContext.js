import React, { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import { userData } from "./UserData";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [data, setData] = useState(userData);

  return <UserContext.Provider value={{ contextData: [data, setData] }}><Outlet /></UserContext.Provider>;
};
