import React from "react";
import userStore from "./user-store";

export const storesContext = React.createContext({
  userStore,
});

export const useStores = () => React.useContext(storesContext)