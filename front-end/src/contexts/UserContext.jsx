import { createContext } from "react";

export const UserContext = createContext(null);

const user = {
  fullName: "Nguyen Minh Hoag",
  email: "hoangnm@gmail.com",
};

const UserContextProvider = ({ children }) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
